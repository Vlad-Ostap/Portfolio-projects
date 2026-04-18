import { useState, useRef } from 'react';

function useScroll(length) {
    const scrollBar = useRef(null);

    const sumScroll = length - 2;

    const [numScroll, setNumScroll] = useState(1);
    const [isScrolling, setIsScrolling] = useState(false);

    const scrollLeft = () => {
        if (!scrollBar.current || isScrolling) return;

        setIsScrolling(true);

        const container = scrollBar.current;
        const cardWidth = container.children[0].offsetWidth;
        const gap = parseFloat(getComputedStyle(container).gap);

        if (numScroll > 1) {
            container.scrollBy({
                left: -(cardWidth + gap),
                behavior: 'smooth'
            });

            setNumScroll(prev => prev - 1);
        } else {
            container.scrollTo({
                left: container.scrollWidth,
                behavior: 'smooth'
            });

            setNumScroll(sumScroll);
        }

        setTimeout(() => {
            setIsScrolling(false);
        }, 300);
    };

    const scrollRight = () => {
        if (!scrollBar.current || isScrolling) return;

        setIsScrolling(true);

        const container = scrollBar.current;
        const cardWidth = container.children[0].offsetWidth;
        const gap = parseFloat(getComputedStyle(container).gap);

        if (numScroll < sumScroll) {
            container.scrollBy({
                left: cardWidth + gap,
                behavior: 'smooth'
            });

            setNumScroll(prev => prev + 1);
        } else {
            container.scrollTo({
                left: 0,
                behavior: 'smooth'
            });

            setNumScroll(1);
        }

        setTimeout(() => {
            setIsScrolling(false);
        }, 300);
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