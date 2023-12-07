'use client'

import Presente from "@/components/je-me-presente"
import Etmoi from "@/components/et-moi"
import MesExpériences from "@/components/mes-expériences"
import MesProjets from "@/components/mes-projets"
import Articles from "@/components/articles-écrits"

export default function Home() {
  return (
      <main className="flex  flex-col h-auto md:h-screen w-full px-[40px] md:px-[80px] text-[#6E6A85] gap-10">
        <div className=" w-full md:w-[40%] mt-32 flex-1 h-[100vh] md:fixed">
          <Presente/>
        </div>
        <div className=" w-full md:w-1/2 md:mt-[86px]  flex flex-col flex-1 h-auto md:absolute justify-end items-end right-0 md:p-10">
          <Etmoi/>
          <div className=" mt-36">
            <MesExpériences/>
          </div>
          <div className=" mt-36">
            <MesProjets/>
          </div>
          <div className=" mt-36">
            <Articles/>
          </div>
        </div>
      </main>
  )
}
