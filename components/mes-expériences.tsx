'use client'

import { experiences } from '@/lib/da'
import RouteChild from './RouteChild'
import React from 'react'
import { CurrentSection } from '@/lib/hookslaw';

export default function MesExpériences() {
    const { ref } = CurrentSection("Experience", 0.5);
  return (
    <section ref={ref} id='experience' className=' scroll-mt-36'>
      <div className='flex flex-col gap-10'>
        {
            experiences.map((experience, index) => (
                <React.Fragment key={index}>
                    <Experience {...experience} />
                </React.Fragment>
            ))}
      </div>
      <div className=' mt-10'>
        <RouteChild url='/experience'>View All Experiences <span/>→</RouteChild>
      </div>
    </section>
  )
}

type ExperienceProps = (typeof experiences)[number];
function Experience(
   {
    title,
    organization,
    date,
    stack,
    description
} : ExperienceProps) {
    return (
    <section className='flex gap-y-4 '>
        <a href="" className=' flex'>
        <div className=''>
            <h3 className=' text-lg font-semibold'>{organization}</h3>
            <p className='text-base font-normal mt-2'>{title}</p>
            <p className=' text-sm leading-7 mt-4'>{description}</p>
            <ul className=' mt-4 grid gap-4 grid-cols-4 w-full'>
                {stack.map((stacks, index) => (
                    <li className='w-[150px] text-sm py-1 px-2 gap-4 flex items-center 
                    border-solid border-[0.2px] text-[#6E6A85] border-[#95A1F9] bg-[#0c0a1b] rounded-full ' key={index}>{stacks}</li>
                ))}
            </ul>
        </div>
        <div className=' w-full'>
            <p className=' text-xs'>{date}</p>
        </div>
        </a>
    </section>
    )
}
