import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { createSubmission } from '../scripts/submit-indexnow.mjs';
const host='alon-gorenshtein.github.io';
const key='1234567890abcdef1234567890abcdef';
test('IndexNow payload covers the seven published pages with same-host ownership',async()=>{
 const xml=await readFile(new URL('../public/sitemap.xml',import.meta.url),'utf8');
 const payload=createSubmission(xml,{host,key});
 assert.equal(payload.host,host);
 assert.equal(payload.keyLocation,`https://${host}/${key}.txt`);
 assert.equal(payload.urlList.length,7);
 assert.ok(payload.urlList.includes(`https://${host}/publications/`));
 assert.equal(new Set(payload.urlList).size,7);
});
test('IndexNow refuses foreign-origin URLs before sending anything',()=>{
 assert.throws(()=>createSubmission('<urlset><url><loc>https://example.org/private</loc></url></urlset>',{host,key}),/outside/);
});
test('IndexNow refuses empty sitemaps and malformed ownership keys',()=>{
 assert.throws(()=>createSubmission('<urlset/>',{host,key}),/empty/);
 assert.throws(()=>createSubmission(`<loc>https://${host}/</loc>`,{host,key:'bad key'}),/key/);
});
