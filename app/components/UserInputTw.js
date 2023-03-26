import React from 'react'

export default function UserInputTw() {
  return (
<div className="relative flex lg:w-2/6 md:w-2/6 sm:w-2/6 flex-wrap items-stretch mb-3 ">
  <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
    <i className="fas fa-lock"></i>
  </span>
  <input type="text" placeholder="Twitter Username" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"/>
  <button className="bg-violet-500 text-white active:bg-violet-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mt-6 ease-linear transition-all duration-150" type="button">
  Next
</button>
</div>
  )
}
