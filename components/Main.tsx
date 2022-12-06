import React from 'react'

const Main = () => {
  return (
    <div className="bg-cover bg-center " style={{backgroundImage: `url('../ue4.jpg')`}}>
        <div className='max-w-[1240px] pt-14 mb-[-96px] w-full h-[100vh] mx-auto text-center text- flex flex-col justify-center'>   
            <p className='text-red-800 text-m'>
                They are rage, brutal, without mercy.<br/>
                But you. You will be worse.<br/>
                Rip and tear, until it is done.
            </p>

            <h1 className='pt-[50vh] pb-6 font-diablo'>
                <span className='text-red-200'>Infernal Dimension</span>
            </h1>
            <h3 className='text-red-400 font-bold p-2 uppercase font-diablo'>
                Environment Art & Level Design<br/>Projects & Services
            </h3>
        </div>
    </div>
  )
}

export default Main