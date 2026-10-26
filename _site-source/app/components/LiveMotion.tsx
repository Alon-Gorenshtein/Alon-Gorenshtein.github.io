"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-motion-reveal]";

export default function LiveMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const motionQuery = typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : null;
    const pointerQuery = typeof window.matchMedia === "function"
      ? window.matchMedia("(pointer: fine)")
      : null;
    const canObserve = typeof window.IntersectionObserver === "function";
    const canAnimate = typeof window.requestAnimationFrame === "function";
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    const hero = document.querySelector<HTMLElement>(".hero-system");
    const finePointer = pointerQuery?.matches ?? false;
    let motionReduced = motionQuery?.matches ?? true;
    let revealObserver: IntersectionObserver | null = null;
    let pointerListenersActive = false;
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const syncPointer = () => {
      frame = 0;
      hero?.style.setProperty("--pointer-x", pointerX.toFixed(3));
      hero?.style.setProperty("--pointer-y", pointerY.toFixed(3));
    };

    const schedulePointerSync = () => {
      if (canAnimate) {
        if (!frame) frame = window.requestAnimationFrame(syncPointer);
      } else {
        syncPointer();
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!hero || motionReduced || !finePointer || (event.pointerType !== "mouse" && event.pointerType !== "pen")) return;
      const bounds = hero.getBoundingClientRect();
      pointerX = Math.max(-1, Math.min(1, (event.clientX - (bounds.left + bounds.width / 2)) / (bounds.width / 2)));
      pointerY = Math.max(-1, Math.min(1, (event.clientY - (bounds.top + bounds.height / 2)) / (bounds.height / 2)));
      hero.classList.add("is-pointer-active");
      schedulePointerSync();
    };

    const resetPointer = () => {
      pointerX = 0;
      pointerY = 0;
      hero?.classList.remove("is-pointer-active");
      schedulePointerSync();
    };

    const removePointerListeners = () => {
      if (!hero || !pointerListenersActive) return;
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerleave", resetPointer);
      pointerListenersActive = false;
    };

    const addPointerListeners = () => {
      if (!hero || motionReduced || !finePointer || pointerListenersActive) return;
      hero.addEventListener("pointermove", handlePointerMove, { passive: true });
      hero.addEventListener("pointerleave", resetPointer, { passive: true });
      pointerListenersActive = true;
    };

    const reveal = () => {
      revealObserver?.disconnect();
      revealObserver = null;
      revealElements.forEach((element) => element.classList.add("is-visible"));
      root.classList.remove("motion-ready");
    };

    const observeReveals = () => {
      if (motionReduced || !canObserve) {
        reveal();
        return;
      }
      revealObserver = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            revealObserver?.unobserve(entry.target);
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
      );
      root.classList.add("motion-ready");
      revealElements.forEach((element) => {
        element.classList.remove("is-visible");
        revealObserver?.observe(element);
      });
    };

    const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
      motionReduced = event.matches;
      if (motionReduced) {
        reveal();
        removePointerListeners();
        resetPointer();
      } else {
        observeReveals();
        addPointerListeners();
      }
    };

    observeReveals();
    addPointerListeners();
    if (motionQuery?.addEventListener) {
      motionQuery.addEventListener("change", handleMotionPreferenceChange);
    } else if (motionQuery?.addListener) {
      motionQuery.addListener(handleMotionPreferenceChange);
    }

    return () => {
      revealObserver?.disconnect();
      removePointerListeners();
      if (frame && canAnimate) window.cancelAnimationFrame(frame);
      if (motionQuery?.removeEventListener) {
        motionQuery.removeEventListener("change", handleMotionPreferenceChange);
      } else if (motionQuery?.removeListener) {
        motionQuery.removeListener(handleMotionPreferenceChange);
      }
      root.classList.remove("motion-ready");
      hero?.classList.remove("is-pointer-active");
    };
  }, []);

  return null;
}
