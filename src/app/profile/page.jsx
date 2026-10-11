'use client'
import { authClient } from '../../lib/auth-client';
import React from 'react';

const ProfilePage = () => {

     const { data: session } = authClient.useSession();
        const user = session?.user;

        const handleSignOut = async() => {
                await authClient.signOut()
            };

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='bg-base-300 border border-purple-400 p-6 rounded-box'>
                <h2 className='text-2xl font-bold my-4'> প্রোফাইল</h2>
                    <p>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
                <div>
                    <div>
                            <h2 className=''>Name : {user?.name}</h2>
                            <h2>Email : {user?.email}</h2>
                        </div>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;