// not hooks law, just playing around Physics, since I love physics actually 😊

import { useActiveSectionContext } from '@/context/activity';
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import type { Section } from './types';



export function CurrentSection(
    sectionName : Section, threshold = 0.5){
    const { ref, inView } = useInView({
        threshold,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000){
        setActiveSection(sectionName);
    }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref
    }
}