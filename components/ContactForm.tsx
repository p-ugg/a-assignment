import React, { use } from 'react';
import { useState } from 'react';
import Header from './snippets/header';

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [inputs, setInputs] = useState({});
  const [textarea, setTextarea] = useState();

  const getFormData = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));    
  } 

  const getTextareaData = (event: any) => {
    setTextarea(event.target.value);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
        setSubmitting(false);
        console.log(inputs, textarea);
    }, 2000)
  }

  return (
    <div className='w-full px-4 lg:px-12 pt-20 bg-gray-900'>
        <Header sideText={'Contact form'} mainText={'Tell us what\'s on your mind'} />

        <div className='grid lg:grid-cols-5 gap-8'>
            <div className='col-span-3 lg:col-span-2 w-full h-full' >
                <div className='lg:p-4 h-full'>
                    <div>
                        <img className='pb-4 rounded-lg' src='/ue_contact.jpg'/>
                    </div>
                    <div>
                        <p className=''>Tempered by the fires of Hell, his iron will remained steadfast through the passage that preys upon the weak. For alone he was the Hell Walker, the Unchained Predator, who sought retribution in all quarters, dark and light, fire and ice.</p>
                    </div>
                </div>                
            </div>

            <div className='col-span-3 w-full h-auto '>
                    <div className='pb-8 pt-1' >
                        {/*<form onSubmit={handleSubmit}>*/}
                        <form action='api/form'>
                            <div className='grid md:grid-cols-2 gap-4 w-full pt-2'>
                                <div className='flex flex-col'>
                                    <label className='font-garamond text-lg lg:pl-2'>Name</label>
                                    <input className='border-2 rounded-lg p-2 flex border-gray-800 bg-[#220d0d] focus:outline-none focus:border-gray-600'
                                        type='text' name='name' placeholder='your name'
                                        value={inputs.name || ""} onChange={getFormData} />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='font-garamond text-lg lg:pl-2'>Phone number</label>
                                    <input className='border-2 rounded-lg p-2 flex border-gray-800 bg-[#220d0d] focus:outline-none focus:border-gray-600'
                                        type='text' name='phone' placeholder='your phone no.'
                                        value={inputs.phone || ""} onChange={getFormData} />
                                </div>
                            </div>
                            <div className='flex flex-col pt-2'>
                                    <label className='font-garamond text-lg lg:pl-2'>Email</label>
                                    <input className='border-2 rounded-lg p-2 flex border-gray-800 bg-[#220d0d] focus:outline-none focus:border-gray-600'
                                        type='email' name='email' placeholder='your email address' required
                                        value={inputs.email || ""} onChange={getFormData} />
                            </div>
                            <div className='flex flex-col pt-2'>
                                    <label className='font-garamond text-lg lg:pl-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-2 flex border-gray-800 bg-[#220d0d] focus:outline-none focus:border-gray-600'
                                        type='text' name='subject' placeholder='your inquiry'
                                        value={inputs.subject || ""} onChange={getFormData} />
                            </div>
                            <div className='flex flex-col pt-2'>
                                    <label className='font-garamond text-lg lg:pl-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-2 flex border-gray-800 bg-[#220d0d] focus:outline-none focus:border-gray-600'
                                        rows='8' name='message' placeholder='your message...' required
                                        value={textarea} onChange={getTextareaData}>
                                    </textarea>
                            </div>
                            <button className='mt-4'>{submitting ? 'Submitting message...' : 'Send Message'}</button>
                        </form>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ContactForm