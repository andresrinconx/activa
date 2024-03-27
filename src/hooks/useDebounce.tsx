import { useRef, useEffect } from 'react';

const useDebounce = <Func extends (...args: any[]) => void>(
  callback: Func,
  ms: number,
) => {
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => {
      if (!timer.current) return;
      clearTimeout(timer.current);
    };
  }, []);

  const debouncedFunction = ((...args) => {
    const newTimer = setTimeout(() => {
      callback(...args);
    }, ms);
    clearTimeout(timer.current);
    timer.current = newTimer;
  }) as Func;

  return debouncedFunction;
};

export default useDebounce;
