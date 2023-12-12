'use client'

import { motion } from 'framer-motion';
import { footerVariants } from '@/lib/motion';

export default function Footer() {
  return (
    <section className='pb-10 w-full flex'>
    <motion.div
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
  >
        <p className=' text-[13px] leading-6 text-gray-400  '>
            Layout inspired by <a className=' text-gray-200 font-semibold' href='https://brittanychiang.com' target="_blank" rel="noreferrer noopener" aria-label="Brittany (opens in a new tab)">Brittany</a>. 
            Designed in figma, and code written in TypeScript and NextJs by Me☺️. Find it on <a className=' text-gray-200 font-semibold' target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" href='https://github.com/Ojochogwu866/portfolio-v3'>Github</a>.
        </p>  
    </motion.div>
    <div className="flex justify-end items-end absolute -mt-20 w-[200px] h-[100px] gradient-04" />
    </section>
  )
}
