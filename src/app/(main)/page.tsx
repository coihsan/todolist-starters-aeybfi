import { redirect } from 'next/navigation'
import React from 'react'
import { currentUser } from '@clerk/nextjs'
const Page = () =>{
    // const authUser = await currentUser()
    return(
        <div className="flex justify-center items-center mt-4">
      <div className="max-w-[850px] border-[1px] p-4 rounded-xl">
        <h1 className="text-4xl"> Create An Agency</h1>
      </div>
    </div>
    )
}

export default Page