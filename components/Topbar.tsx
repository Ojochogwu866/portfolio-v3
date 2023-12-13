'use client'

import { navVariants } from '@/lib/motion'
import { motion } from 'framer-motion'


export default function Topbar() {
    const handleClick = async () => {
    const response = await fetch('/api');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ojochogwudickson.pdf';
    link.click();
    window.URL.revokeObjectURL(url);
  };
  return (
    <motion.header
     variants={navVariants}
     initial="hidden"
     viewport={{ once: true, amount: 0.25 }}
     whileInView="show"
      className='px-[40px] md:px-[80px] pt-3 md:pt-6 flex w-full items-end justify-end md:fixed'>
        <button onClick={handleClick} className=' z-50 md:py-2 py-1 md:px-8 px-4 flex items-center border-solid border-[1.5px] text-[#6E6A85] border-[#95A1F9] bg-[#0c0a1b] rounded-full'>
          Resume
        </button>
    </motion.header>
  )
}

