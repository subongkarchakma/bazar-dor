import Image from 'next/image';
import React from 'react';
import NavLinks from './NavLinks';

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD",{dateStyle: 'full'})
    
    return (
        <header className='mb-5 mt-3'>
      <div className=' container mx-auto  flex justify-between my-4 '>
        <div className='flex items-center gap-2'>
          <Image className='p-2 bg-[#05893E] border rounded-2xl' height={50} width={50} src={"/logo-icon.png"} alt='Logo' />
          <div>
            <h2 className='font-bold text-2xl'>বাজার দর</h2>
            <p className='font-semi-bold'>{date}</p>
          </div>
        </div>
        <div>
          <button className='btn btn-ghost font-bold'>Sign In</button>
          <button className='btn btn-error'>Sign Up</button>
        </div>
      </div>

      {/* <NavLinks /> */}

    </header>
    );
};

export default Header;