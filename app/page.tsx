'use client'

import Presente from "@/components/je-me-presente"
import Etmoi from "@/components/et-moi"
import MesExpériences from "@/components/mes-expériences"

export default function Home() {
  return (
      <main className="flex md:h-screen w-full px-[80px] text-[#6E6A85] gap-10">
        <div className=" w-[40%] md:mt-32 flex-1 h-[100vh] fixed">
          <Presente/>
        </div>
        <div className=" w-1/2 md:mt-[86px]  flex flex-col flex-1 h-auto absolute justify-end items-end right-0 p-10">
          <Etmoi/>
          <div className=" mt-20">
            <MesExpériences/>
          </div>
        </div>
      </main>
  )
}
