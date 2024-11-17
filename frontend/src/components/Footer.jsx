import { Button, Input, TextField } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react'
const Footer = () => {
    return (
        <div className='flex-col justify-between px-8 py-8 bg-custom-primary custom-secondary'>
            <div className='flex w-full justify-between'>
                <div className='flex-1'>
                    <p className='font-poppins text-lg'>Get Exclusive Updates!</p>
                </div>
                <div className='flex flex-1 justify-end gap-4'>

                    <input type="email" id="email" class="p-2 w-full border border-white rounded-md" placeholder="john.doe@company.com"  />

                   <button className='w-48 border border-white font-bold'>Join Now!</button>
                </div>
            </div>
            <div className='flex mt-12'>
            <div className='flex-col flex-1 w-full justify-between font-poppins text-lg font-bold my-3'>
                <div className='mb-3'>
                    <div className='font-poppins text-3xl font-bold'>FindMyCollege</div>
                </div>
                <div className='flex gap-3 cursor-pointer'>
                    <InstagramIcon fontSize="large" />
                    <LinkedInIcon fontSize="large" />
                </div>
            </div>
            <div className='flex flex-1 py-3 gap-12 w-full justify-start'>
                <div className='flex flex-col'>
                   <h2 className='font-poppins text-lg font-bold'>Support</h2>
                   <a href=''>Help Center</a>
                   <a href=''>Student Support</a>
                   <a href=''>Resource Center</a>
                   <a href=''>Contact Support</a>
                </div>
                <div className='flex flex-col'>
                   <h2 className='font-poppins text-lg font-bold'>Assistance</h2>
                   <a href=''>Data Protection</a>
                   <a href=''>Site Map</a>
                   <a href=''>Subscription Plans</a>
                   <a href=''>Contact Support</a>
                </div>
            </div>
            
            </div>
        </div>
    )
}

export default Footer;

