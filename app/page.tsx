'use client'

import Presente from "@/components/je-me-presente"
import Etmoi from "@/components/et-moi"

export default function Home() {
  return (
      <main className="flex md:h-screen w-full px-[80px] text-[#6E6A85] gap-10">
        <div className=" w-1/2 md:mt-32 md:fixed flex-1">
          <Presente/>
        </div>
        <div className=" w-1/2 md:mt-36 flex md:justify-end flex-1">
          <Etmoi/>
        </div>
      </main>
  )
}
