'use client'

import { experiences } from '@/lib/da'
import React from 'react'
import { CurrentSection } from '@/lib/hookslaw';

export default function  AllExperiencesProjects() {
    const { ref } = CurrentSection("Experience", 0.5);
  return (
    <section ref={ref} id='experience' className=' pt-36 pb-20 mt-10 w-full scroll-mt-36'>
      <div className='flex flex-col gap-y-10'>
        {
            experiences.map((experience, index) => (
                <React.Fragment key={index}>
                    <Experience {...experience} />
                </React.Fragment>
            ))}
        <div className=' text-sm text-gray-200 font-semibold gap-2 flex items-center '>
            Download Resume above for detailed reference of roles, skills applied and achievements
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
    <section className='flex gap-y-4 text-[#6E6A85] '>
        <a href="" className=' flex gap-8'>
        <div className='md:w-9/12 flex flex-col'>
            <h3 className=' text-lg font-semibold'>{organization}</h3>
            <p className='text-base font-normal mt-2'>{title}</p>
            <p className=' text-sm leading-7 mt-4'>{description}</p>
            <ul className=' mt-4 flex gap-2 w-full'>
                {stack.map((stacks, index) => (
                    <li className=' text-xs gap-4 flex items-center text-[#6E6A85] ' key={index}>{stacks}</li>
                ))}
            </ul>
              </div>
             <div className=''>
            <p className=' text-xs'>{date}</p>
        </div>
        </a>
    
    </section>
    )
}

