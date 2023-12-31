import { experiences } from '@/lib/da';
import RouteChild from './RouteChild';
import React from 'react';
import { CurrentSection } from '@/lib/hookslaw';
import { fadeIn } from '@/lib/motion';
import { motion } from 'framer-motion';

export default function MesExpériences() {
  const { ref } = CurrentSection('Experience', 0.5);
  const top3Experiences = experiences.slice(0, 3);

  return (
    <section ref={ref} id='experience' className=' scroll-mt-36  md:px-[40px] '>
        <h2 className=' text-base font-semibold pb-2 md:hidden'>Experiences</h2>
      <div 
      className='flex flex-col gap-10'>
        {top3Experiences.map((experience, index) => (
          <React.Fragment key={index}>
            <Experience {...experience} />
          </React.Fragment>
        ))}
      </div>
      <div className=' mt-10'>
        <RouteChild url='/experience'>
          View All Experiences <span />→
        </RouteChild>
      </div>
    </section>
  );
}

type ExperienceProps = (typeof experiences)[number];

function Experience({
  title,
  organization,
  date,
  stack,
  description,
}: ExperienceProps) {
  return (
    <motion.section
      variants={fadeIn("up", "expereinces", 0.2, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className='flex gap-y-4 '>
      <a href='' className=' flex w-full' >
        <div className='w-full'>
          <div className='w-full flex justify-between items-center'>
            <div className=''>
              <h3 className=' text-lg font-semibold'>{organization}</h3>
              <p className='text-base font-normal mt-2'>{title}</p>
            </div>
           <div className=' '>
            <p className=' text-xs'>{date}</p>
          </div>
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
  );
}
