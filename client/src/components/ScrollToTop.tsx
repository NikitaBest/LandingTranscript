import { useEffect } from "react";
import { useLocation } from "wouter";
import {
  PENDING_SECTION_SCROLL_KEY,
  scrollToHashWithRetry,
} from "@/lib/scroll";

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    const pending = sessionStorage.getItem(PENDING_SECTION_SCROLL_KEY);
    if (pending) {
      sessionStorage.removeItem(PENDING_SECTION_SCROLL_KEY);
      scrollToHashWithRetry(pending);
      return;
    }

    const hash = window.location.hash;
    if (hash) {
      scrollToHashWithRetry(hash, "auto");
      return;
    }

    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
