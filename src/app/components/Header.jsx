import Image from 'next/image';
import NavLinks from './NavLinks';
import Link from 'next/link';
import UserInfo from './UserInfo';

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD",{dateStyle: 'full'})
    
    return (
        <header className='mb-5 mt-3 sticky top-0 z-50 bg-white shadow-sm'>
      <div className=' container mx-auto flex justify-between my-2 '>
        <div className='flex items-center gap-1'>
          <Image className='p-1 border rounded-2xl bg-green-400' height={70} width={60} src={"/logo-icon.png"} alt='Logo' />
          <div>
            <Link href={'/'}><h2 className='font-bold text-2xl'>বাজার দর</h2></Link>
            <p className='font-semi-bold'>{date}</p>
          </div>
        </div>

        <UserInfo/>
      </div>

      <NavLinks/>

    </header>
    );
};

export default Header;