'use client'

import { navVariants } from '@/lib/motion'
import { motion } from 'framer-motion'


export default function Topbar() {
    const handleButtonClick = async () => {
    try {
      const response = await fetch('/api');

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = '/ojochogwudickson.pdf';

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } else {
        console.error('Failed to download PDF. Status:', response.status);
      }
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  }
  return (
    <motion.header
     variants={navVariants}
     initial="hidden"
     viewport={{ once: true, amount: 0.25 }}
     whileInView="show"
      className='px-[40px] md:px-[80px] pt-3 md:pt-6 flex w-full items-end justify-end fixed'>
        <button onClick={handleButtonClick} className=' z-50 py-2 px-8 flex items-center border-solid border-[1.5px] text-[#6E6A85] border-[#95A1F9] bg-[#0c0a1b] rounded-full'>
          Resume
        </button>
    </motion.header>
  )
}

