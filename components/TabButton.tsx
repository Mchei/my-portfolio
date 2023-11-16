import React, { MouseEventHandler } from 'react'

const TabButton = ( e:{active:boolean, selectTab:MouseEventHandler<HTMLButtonElement>, children:string}) => {
const buttonClasses = e.active ? 'text-white borer-b border-purple-500' : 'text-[#ADB7BE]'

  return (
    <button onClick={e.selectTab}>
        <p className={`mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500 ${buttonClasses}`}>
            {e.children}
        </p>
    </button>
  )
}

export default TabButton