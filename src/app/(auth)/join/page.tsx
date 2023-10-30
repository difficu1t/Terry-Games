'use client'
import FormButton from "@/components/FormButton/FormButton"
import Link from "next/link"

export default function SignUp() {

  return (
  <div className="flex w-full h-screen justify-center">
    <div className={"flex flex-col w-[500px] h-fit mt-24 bg-white rounded-md border border-gray-300"}>
      <div className="flex justify-center w-full p-3">
        <span className="text-lg font-black pt-3">Join Terry Games!</span>
      </div>
      <div className="flex flex-col p-3 px-10 gap-2">
        <div>
          <label htmlFor="username" className="w-min text-xs font-bold"> Username </label>
          <input type="text" className="w-full border border-gray-400 rounded-md p-2 px-3" id="username"/>
        </div>
        <div>
          <label htmlFor="email" className="w-min text-xs font-bold"> Email </label>
          <input type="email" className="w-full border border-gray-400 rounded-md p-2 px-3" id="email"/>
        </div>
        <div> 
          <label htmlFor="password" className="w-min text-xs font-bold"> Email </label>
          <input type="password" className="w-full border border-gray-400 rounded-md p-2 px-3" id="password"/>
        </div>
      </div>
      <div className="border-t border-gray-400 m-3 mx-10"></div>
      <div className="flex justify-center gap-1 p2 px-10 mb-3">
        <FormButton href="/">Create an Account</FormButton>
      </div>
      <div className="border-t border-gray-400 mx-36"></div>
      <div className="flex justify-center p-3">
        <span className="text-xs font-bold">Already have an account? <Link href="/signin" className="text-blue-600">Sign In</Link></span>
      </div>
    </div>
  </div>
  )
}