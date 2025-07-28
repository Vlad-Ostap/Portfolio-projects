import { useState, useRef } from 'react';

function useScroll(length) {
    const scrollBar = useRef(null);
    const sumScroll = length - 2;
    const [numScroll, setNumScroll] = useState(1);
    const [isScrolling, setIsScrolling] = useState(false);

    const scrollLeft = () => {
        if (scrollBar.current && !isScrolling) {
            setIsScrolling(true);
            scrollBar.current.scrollBy({
                left: -400,
                behavior: 'smooth'
            });

            if (numScroll > 1) {
                setNumScroll(numScroll - 1)
            }

            setTimeout(() => {
                setIsScrolling(false);
            }, 500);
        }
    }

    const scrollRight = () => {
        if (scrollBar.current && !isScrolling) {
            setIsScrolling(true);
            const cardWidth = scrollBar.current.children[0].offsetWidth;
            const marginWidth = parseFloat(getComputedStyle(scrollBar.current).gap);
            scrollBar.current.scrollBy({
                left: cardWidth + marginWidth,
                behavior: 'smooth'
            });
        }

        if (numScroll < sumScroll) {
            setNumScroll(numScroll + 1);
        }

        setTimeout(() => {
            setIsScrolling(false);
        }, 500);
    }

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