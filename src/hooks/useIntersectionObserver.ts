'use client';

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<HTMLDivElement>, boolean] {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
  } = options;

  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [node, setNode] = useState<Element | null>(null);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // You have to have a node to observe
    if (!node) return;

    // Disconnect the previous observer
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    const { current: currentObserver } = observer;
    currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node, threshold, root, rootMargin]);

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const prevEntry = useRef<IntersectionObserverEntry>();
  useEffect(() => {
    prevEntry.current = entry;
  });

  return [
    (node: Element | null) => {
      setNode(node);
    },
    !!entry?.isIntersecting,
  ];
}
