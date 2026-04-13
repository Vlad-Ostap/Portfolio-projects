import { useState, useRef } from 'react';

function useScroll(length) {
    const scrollBar = useRef(null);

    const sumScroll = length - 2;

    const [numScroll, setNumScroll] = useState(1);
    const [isScrolling, setIsScrolling] = useState(false);

    const scrollLeft = () => {
        if (!scrollBar.current || isScrolling) return;

        setIsScrolling(true);

        const cardWidth = scrollBar.current.children[0].offsetWidth;
        const gap = parseFloat(getComputedStyle(scrollBar.current).gap);

        scrollBar.current.scrollBy({
            left: -(cardWidth + gap),
            behavior: 'smooth'
        });

        setNumScroll(prev =>
            prev > 1 ? prev - 1 : sumScroll
        );

        setTimeout(() => {
            setIsScrolling(false);
        }, 500);
    };

    const scrollRight = () => {
        if (!scrollBar.current || isScrolling) return;

        setIsScrolling(true);

        const cardWidth = scrollBar.current.children[0].offsetWidth;
        const gap = parseFloat(getComputedStyle(scrollBar.current).gap);

        scrollBar.current.scrollBy({
            left: cardWidth + gap,
            behavior: 'smooth'
        });

        setNumScroll(prev =>
            prev < sumScroll ? prev + 1 : 1
        );

        setTimeout(() => {
            setIsScrolling(false);
        }, 500);
    };

    return {
        scrollBar,
        numScroll,
        sumScroll,
        isScrolling,
        scrollLeft,
        scrollRight
    };
}

export default useScroll;