import React from 'react'

const header = (props: string) => {
  return (
    <div className='w-full pb-4'>
            <h3 className='font-diablo text-gray-700'>{ props.sideText }</h3>
            <div className='w-full h-[2px] bg-gray-700 mb-2'></div>
            <h2 className='font-diablo'>{ props.mainText }</h2>
    </div>
  )
}

export default header