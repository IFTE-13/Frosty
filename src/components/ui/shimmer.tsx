import React from 'react'

const Shimmer = ({ onClick, logo, text } : any) => {
  return (
    <button 
    className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    onClick={onClick}
    >
        <span className='flex flex-row items-center justify-center gap-x-2'>{logo} {text}</span>
    </button>
  )
}

export default Shimmer;
      