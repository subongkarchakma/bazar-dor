'use client'
import { authClient } from '../../lib/auth-client';
import Link from 'next/link';
import React from 'react';

const UserInfo = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;
    console.log(user);

    const handleSignOut = async () => {
        await authClient.signOut()
    };

    return (
        <div>

            {
                user ?

                 <Link href={'/profile'}>
                 <div>
                     <p>{user.name}</p>
                     <button onClick={handleSignOut} className='btn '> Sign out </button>
                      </div>
                 </Link> 
                :
                
                <div>

                    <div>

                <Link href={'/sign-in'}>
                    <button className='btn btn-ghost font-bold'>Sign In</button>
                </Link>


                <Link href={'/sign-up'}>
                    <button className='btn bg-[#05893E]'>Sign Up</button>
                </Link>

            </div> 

                </div>
            }
            
        </div>
    );
};

export default UserInfo;