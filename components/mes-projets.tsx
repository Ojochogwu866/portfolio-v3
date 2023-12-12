'use client'

import { projects } from '@/lib/da'
import React from 'react'
import { CurrentSection } from '@/lib/hookslaw';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';

export default function MesExpériences() {
    const { ref } = CurrentSection("Projects", 0.5);
  return (
    <section ref={ref} id='project' className=' scroll-mt-36  md:px-[40px] '>
        <h2 className=' text-base font-semibold pb-2 md:hidden'>Work</h2>
      <div className='flex flex-col gap-10'>
        {
           projects.map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project} />
                </React.Fragment>
            ))}
      </div>
      <div className=' mt-10'>
                    <a  className="flex text-sm gap-2
                    " href="https://github.com/Ojochogwu866" 
                    target="_blank" rel="noreferrer noopener" 
                    aria-label="GitHub (opens in a new tab)">
                    <div className=''>View all my projects</div>→</a>
      </div>
    </section>
  )
}

type ProjectProps = (typeof projects)[number];

function Project(
   {
    project,
    url,
    stack,
    description
} : ProjectProps) {
    return (
    <motion.section
      variants={fadeIn("up", "expereinces", 0.2, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}id='projects' 
      className='flex gap-y-4 w-full'>
        <a href="" className=' flex'>
        <div className=''>
            <div className=' flex items-center  gap-1'>
                <h3 className=' text-lg font-semibold'>{project}</h3>
                <div>
                    <svg className='' width="9" height="9" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.4337 16.7625C19.0601 16.7298 18.7548 16.5723 18.518 16.2901C18.2814 16.0081 18.1775 15.701 18.2066 
                        15.3689L19.0074 6.21536L2.21376 20.3069C1.92033 20.5531 1.5972 20.6608 1.24433 20.6299C0.891491 20.599 0.591927 
                        20.4369 0.345712 20.1435C0.0994969 19.85 -0.00817256 19.5269 0.0226967 19.174C0.0535685 18.8212 0.215717 18.5216 0.509145 
                        18.2754L17.3028 4.18388L8.08701 3.37763C7.7134 3.34494 7.41862 3.18844 7.20262 2.90809C6.98661 2.62777 6.89496 2.30079 
                        6.92764 1.92718C6.97927 1.57614 7.14618 1.28224 7.42831 1.0455C7.71046 0.808749 8.01758 0.704888 8.34968 0.733943L20.7412 
                        1.81798C20.9486 1.83624 21.1223 1.88278 21.2622 1.95781C21.4019 2.03281 21.5289 2.13786 21.6425 2.2733C21.7562 2.40874 
                        21.8376 2.55198 21.8872 2.70267C21.9368 2.85338 21.9525 3.03256 21.9344 3.24002L20.8558 15.5692C20.823 15.9429 20.6712 
                        16.2433 20.4004 16.4706C20.1295 16.6979 19.8073 16.7952 19.4337 16.7625Z" fill="currentColor"/>
                    </svg></div>
            </div>
            <p className=' text-sm leading-7 mt-4'>{description}</p>
              <ul className=' mt-4 flex flex-wrap w-full gap-2'>
            {stack.map((stacks, index) => (
              <li
                className='w-fit text-[13px] py-1 px-2 gap-4 flex items-center border-solid border-[0.2px] text-[#6E6A85] border-[#95A1F9] bg-[#0c0a1b] rounded-full '
                key={index}
              >
                {stacks}
              </li>
            ))}
          </ul>
        </div>
        </a>
    </motion.section>
    )
}