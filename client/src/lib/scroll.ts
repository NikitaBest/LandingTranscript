const NAVBAR_OFFSET = 88;

export function scrollToHashElement(
  hash: string,
  behavior: ScrollBehavior = "smooth",
): boolean {
  const id = hash.startsWith("#") ? hash : `#${hash}`;
  const element = document.querySelector(id);
  if (!element) return false;

  const top =
    element.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

export function scrollToHashWithRetry(
  hash: string,
  behavior: ScrollBehavior = "smooth",
  maxAttempts = 30,
): void {
  let attempts = 0;

  const tryScroll = () => {
    if (scrollToHashElement(hash, behavior) || attempts >= maxAttempts) return;
    attempts += 1;
    requestAnimationFrame(tryScroll);
  };

  tryScroll();
}

export const PENDING_SECTION_SCROLL_KEY = "scrollToSection";
