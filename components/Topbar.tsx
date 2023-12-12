'use client'

import { navVariants } from '@/lib/motion'
import { motion } from 'framer-motion'


export default function Topbar() {
  return (
    <motion.header
     variants={navVariants}
     initial="hidden"
     whileInView="show"
      className='px-[40px] md:px-[80px] pt-3 md:pt-6 flex w-full items-end justify-end fixed'>
        <div className=' z-50 py-2 px-8 flex items-center border-solid border-[1.5px] text-[#6E6A85] border-[#95A1F9] bg-[#0c0a1b] rounded-full'>
          Resume
        </div>
    </motion.header>
  )
}

