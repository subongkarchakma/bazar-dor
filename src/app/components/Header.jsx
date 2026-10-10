import Image from 'next/image';
import NavLinks from './NavLinks';
import Link from 'next/link';
import Marquee from './Marquee';

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD",{dateStyle: 'full'})
    
    return (
        <header className='mb-5 mt-3'>
      <div className=' container mx-auto flex justify-between my-2 '>
        <div className='flex items-center gap-1'>
          <Image className='p-2 border rounded-2xl' height={70} width={60} src={"/logo-icon.png"} alt='Logo' />
          <div>
            <Link href={'/'}><h2 className='font-bold text-2xl'>বাজার দর</h2></Link>
            <p className='font-semi-bold'>{date}</p>
          </div>
        </div>
        <div>

          <Link href={'/sign-in'}>
          <button className='btn btn-ghost font-bold'>Sign In</button>
          </Link>
          

          <Link href={'/sign-up'}>
          <button className='btn bg-[#05893E]'>Sign Up</button>
          </Link>
          
        </div>
      </div>

      <NavLinks/>
      <Marquee/>

    </header>
    );
};

export default Header;