import React, { useState } from 'react';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import toast from 'react-hot-toast';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [checkboxError, setCheckboxError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (!email) {
            setEmailError('Email is required');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!isChecked) {
            setCheckboxError('You must subscribe to the newsletter');
            valid = false;
        } else {
            setCheckboxError('');
        }

        if (valid) {
            // Handle form submission
            console.log('Form submitted');
            toast.success('Subscribed successfully!');
            setEmail('');
            setIsChecked(false);
        }
    };

    return (
        <div>
            <footer className='bg-black/90 text-white p-4'>
                <div >
                    <div className='flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto p-4 sm:p-8 gap-4 '>
                        <div className='text-center md:text-left'>
                            <h2 className='text-xl tracking-wider font-serif mb-2'>SIGN UP AND STAY UPDATED</h2>
                        </div>
                        <div className='w-full md:w-auto'>
                            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                                <p className='font-serif'>Enter your email here *</p>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='w-full md:w-[30rem]  border border-white focus:text-sm font-serif text-white'
                                />
                                {emailError && <p className='text-red-500 text-sm font-serif'>{emailError}</p>}
                                <div className='flex gap-10 mt-2 flex-col md:flex-row justify-around items-center'>
                                    <div className='flex items-center gap-2'>
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={() => setIsChecked(!isChecked)}
                                        />
                                        <p className='text-sm font-serif'>
                                            Yes, subscribe me to your newsletter*
                                        </p>
                                    </div>
                                    <div>
                                        <button
                                            type='submit'
                                            className='bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 cursor-pointer w-full md:w-[10rem] transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                                {checkboxError && <p className='text-red-500 text-sm font-serif'>{checkboxError}</p>}
                            </form>
                        </div>

                    </div>

                    <div>
                        <div className='flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto p-4 sm:p-8 gap-4'>
                            <p className='text-sm font-serif'>&copy; 2024 Your Company. All rights reserved.</p>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-lg font-serif'>Follow us on</h3>
                                <div className='flex gap-4 text-3xl'>
                                    <a href='https://x.com/'><FaTwitterSquare className='text-blue-500' /></a>
                                    <a href='https://www.linkedin.com/login'><FaLinkedin className='text-blue-600' /></a>
                                    <a href='https://www.facebook.com' className=''><FaFacebookSquare className='text-blue-700 ' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;