"use client"
import useActiveSectionView from '@/hooks/useActiveSectionView';
import React from 'react'
import { logos } from '@/lib/data';
import Image from 'next/image';
const Customers = () => {
    const { ref } = useActiveSectionView("Customers");

    return (
        <div className=' bg-white px-[18rem] py-20 w-full ' id='customers' ref={ref}>
            <h3 className='font-sans text-center tracking-wide text-slate-600 font-light mt-4  mb-10'> Some of our multi-entity customers</h3>
            <div className="flex items-center justify-center space-x-12">
                {logos.map((logo, index) => (
                    <div className='border'>
                        <Image src={logo.icon} alt={logo.name} width={100} height={40} />
                    </div>
                ))}
            </div>
        </div >

    )
}

export default Customers