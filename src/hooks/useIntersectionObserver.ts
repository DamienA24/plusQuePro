import { useEffect, useRef, RefCallback } from "react";

export function useIntersectionObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {
    root: null,
    rootMargin: "100px",
    threshold: 0.1,
  }
): [RefCallback<HTMLDivElement>] {
  const observer = useRef<IntersectionObserver | null>(null);
  const currentElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(callback, options);

    const { current: currentObserver } = observer;

    if (currentElement.current) {
      currentObserver.observe(currentElement.current);
    }

    return () => currentObserver.disconnect();
  }, [callback, options]);

  const ref: RefCallback<HTMLDivElement> = (element) => {
    if (element) {
      currentElement.current = element;
      if (observer.current) {
        observer.current.observe(element);
      }
    }
  };

  return [ref];
}
