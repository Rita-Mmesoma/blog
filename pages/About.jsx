import React from 'react';
import Hero from '../src/components/hero/hero';

const About = () => {
  return(
    <div>
        <Hero/>
        <div className='max-w-6xl mx-auto p-4 sm:p-8'>
            <h1 className='about tracking-wider text-2xl font-black pb-4'>WELCOME, </h1>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
                <div className='lg:w-2/3'>
                    <p className='tracking-wider font-serif text-gray-600 text-lg leading-7 mb-8'> 
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click   me to add your own content and make changes to the font
                    </p>

                    <p className='tracking-wider font-serif text-gray-600 text-lg leading-7 mb-8'> 
                        At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wix ellaneous in Support. Feel free to tell us what you think and give us feedback in the Wix Forum. If you’d like to benefit from a professional designer’s touch, head to the Wix Arena and connect with one of our Wix Pro designers. Or if you need more help you can simply type your questions into the Support Forum and get instant answers. To keep up to date with everything Wix, including tips and things we think are cool, just head to the Wix Blog!
​                    </p>
                    <div>
                        <img src="/sign.png" alt="" />
                    </div>
                </div>
                <div className='lg:w-1/3 flex flex-col gap-4'>
                    <img src="/image.png" alt="profile_pic" className='w-full'/>
                    <h1 className='about tracking-wider text-xl font-black '> WANT TO CONNECT?</h1>
                    <p> Email me at: info@mysite.com</p>
                </div>
            </div>
        </div>
    </div>
  )
};

export default About;
