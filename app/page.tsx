'use client'

import Presente from "@/components/je-me-presente"
import Etmoi from "@/components/et-moi"
import MesExpériences from "@/components/mes-expériences"
import MesProjets from "@/components/mes-projets"
import Articles from "@/components/articles-écrits"
import Footer from "@/components/Footer"

export default function Home() {
  return (
      <main className="flex  flex-col h-auto md:h-screen w-full px-[20px] md:px-[80px] text-[#6E6A85] gap-10">
        <div className=" w-full md:w-[40%] md:mt-32 mt-20 md:flex-1 h-screen md:fixed">
          <Presente/>
        </div>
        <div className=" w-full md:w-1/2 md:mt-[86px]  flex flex-col md:flex-1 h-auto md:absolute justify-end items-end right-0 md:p-5">
          <Etmoi/>
          <div className=" md:mt-36 mt-10">
            <MesExpériences/> 
          </div>
          <div className=" md:mt-36 mt-10">
            <MesProjets/>
          </div>
          <div className=" mt-10 md:mt-24 md:pr-[40px]">
            <Articles/>
          </div>
          <div className=" mt-10 md:mt-28 md:pr-[40px]">
            <Footer/>
          </div>
        </div>
      </main>
  )
}
