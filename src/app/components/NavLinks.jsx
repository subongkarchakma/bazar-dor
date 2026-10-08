import Link from 'next/link';


const NavLinks = async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/categories");
    const data = await res.json();
    return (
        <div className='border-gray-100 border-y-2'>

            <div className='container mx-auto flex gap-7 py-4  '>
            {data.map(nav => <Link className='flex gap-2' key={nav.id} href={nav.slug}>
            <span>{nav.icon}</span>
            {nav.nameBn}</Link> )}
        </div>

        </div>
    );
};

export default NavLinks;