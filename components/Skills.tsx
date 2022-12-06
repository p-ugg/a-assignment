import React from 'react'
import Header from './snippets/header';

const Skills = () => {
  return (
    <div className='w-full md:min-h-[50vh] px-4 lg:px-12 py-12 bg-gray-900'>
        <Header sideText={'Skills'} mainText={'Our 3D content creation tech stack'} />

        <div className='m-auto lg:grid grid-cols-5 gap-8'>
            <div className='col-span-3 pb-4'>
            <p>In the first age, in the first battle, when the shadows first lengthened, one stood. Burned by the embers of Armageddon, his soul blistered by the fires of Hell and tainted beyond ascension, he chose the path of perpetual torment.</p>

<p>In his ravenous hatred he found no peace, and with boiling blood he scoured the Umbral Plains seeking vengeance against the dark lords who had wronged him.</p>

<p>He wore the crown of the Night Sentinels, and those that tasted the bite of his sword named him... the Doom Slayer.</p>

<p>Tempered by the fires of Hell, his iron will remained steadfast through the passage that preys upon the weak. For alone he was the Hell Walker, the Unchained Predator, who sought retribution in all quarters, dark and light, fire and ice, in the beginning and the end, and he hunted the slaves of Doom with barbarous cruelty; for he passed through the divide as none but demon had before.</p>
            </div>
            <div className='col-span-2'>
                <img className='border border-0 rounded-lg mx-auto' src='/ue_editor.jpg' />
            </div>
        </div>
    </div>
  );
}

export default Skills