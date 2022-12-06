import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GiCrownedSkull } from 'react-icons/gi';
import { useState } from 'react';

const Navbar = () => {
  const [navFocus, setNavFocus] = useState('');

  return (
    <div className='fixed w-full h-14 shadow-2xl z-[100] bg-[#450808]'>
        <div className='flex justify-between items-center w-full h-full px-4 lg:px-12'>
            <Link href='/' onClick={() => setNavFocus('index')}>
                <GiCrownedSkull className='mt-0 w-12 h-12' />
            </Link>

            <div>
                <ul className='flex font-diablo'>
                    <Link href='/blog/'>
                        <li className='ml-10 text-lg font-bold uppercase'>Blog</li>
                    </Link>
                    <Link href='/projects/'>
                        <li className='ml-10 text-lg font-bold uppercase'>Projects</li>
                    </Link>
                    <Link href='/contact/'>
                        <li className='ml-10 text-lg font-bold uppercase'>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar;