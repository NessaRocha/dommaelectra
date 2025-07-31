import { useEffect, useRef } from 'react';

/**
 * Hook para animação de scroll em elemento único
 */
export const useScrollAnimation = ({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
  animationClass = 'animate',
} = {}) => {
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasAnimated.current)) {
          element.classList.add(animationClass);
          hasAnimated.current = true;
        } else if (!triggerOnce && !entry.isIntersecting) {
          element.classList.remove(animationClass);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, animationClass]);

  return elementRef;
};

/**
 * Hook para animação de scroll em múltiplos elementos
 */
export const useMultiScrollAnimation = (elements, options = {}) => {
  const elementRefs = useRef([]);
  const hasAnimated = useRef(new Set());

  useEffect(() => {
    const currentRefs = elementRefs.current;
    const observers = [];

    currentRefs.forEach((element, index) => {
      if (!element) {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated.current.has(index)) {
            element.classList.add(options.animationClass || 'animate');
            hasAnimated.current.add(index);
          } else if (!options.triggerOnce && !entry.isIntersecting) {
            element.classList.remove(options.animationClass || 'animate');
            hasAnimated.current.delete(index);
          }
        },
        {
          threshold: options.threshold || 0.1,
          rootMargin: options.rootMargin || '0px',
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer, index) => {
        const element = currentRefs[index];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [
    elements,
    options.threshold,
    options.rootMargin,
    options.triggerOnce,
    options.animationClass,
  ]);

  return elementRefs;
};
