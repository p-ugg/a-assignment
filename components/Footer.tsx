import React from 'react'
import {BsGithub} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';

let isPlaying: boolean = false;

function playTheme (): void {
    let audioTheme = document.getElementById('audioTheme');
    if (audioTheme !== null) {
        isPlaying ? audioTheme.pause() : audioTheme.play();
        isPlaying = !isPlaying;
    }
}

const Footer = () => {
  return (
    <div className='w-full h-14 px-4 lg:px-12'>
        <div className='flex justify-between items-center pt-4'>
            <span className='flex'>
                Youtube <AiFillYoutube className='mx-2 mt-[-5px] w-8 h-8' />
                GitHub <BsGithub className='mx-2 mt-[-5px] w-8 h-8' />
                Twitter <AiFillTwitterCircle className='mx-2 mt-[-6px] w-9 h-9'/>
            </span>
            <audio id='audioTheme' src='/Viscera_theme.mp3'></audio>
            <span className='flex cursor-pointer' onClick={playTheme}>See you in hell!</span>
        </div>
    </div>
  )
}

export default Footer