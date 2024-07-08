import { useEffect, useState, useRef, type RefObject } from 'react';

export default function useOnScreen(ref: RefObject<HTMLElement>) {

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };


    const observerRef = useRef<IntersectionObserver | null>(null);
    const [isOnScreen, setIsOnScreen] = useState(false);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsOnScreen(true)
                    // console.log('React Element is visible');
                } else {
                    // console.log('React Element is not visible');
                    // если нужно проигрывать заново
                    // setIsOnScreen(false) 
                }
            }), options
        }
        );
    }, []);

    useEffect(() => {
        ref.current && observerRef.current?.observe(ref.current);

        return () => {
            observerRef.current && observerRef.current.disconnect();
        };
    }, [ref]);

    return isOnScreen;
}