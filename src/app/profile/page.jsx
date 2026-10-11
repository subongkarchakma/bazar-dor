'use client'
import { authClient } from '../../lib/auth-client';
import React from 'react';

const ProfilePage = () => {

     const { data: session } = authClient.useSession();
        const user = session?.user;

        const handleSignOut = async() => {
                await authClient.signOut()
            };

            const handleUpdateProfile = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newUserData = Object.fromEntries(formData.entries());
        await authClient.updateUser({
            ...newUserData
        })

    }

    return (
        <div className='max-w-7xl mx-auto '>
            <div className='bg-base-300 border border-purple-400 p-6 rounded-box my-5'>
                <h2 className='text-2xl font-bold my-4'> প্রোফাইল</h2>
                    <p>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
                <div>
                    <div>
                            <h2 className=''>Name : {user?.name}</h2>
                            <h2>Email : {user?.email}</h2>
                        </div>

                </div>

            </div>

            <div className=' bg-base-200 p-6 border-2 border-purple-400 rounded-box'>
                    <p>তথ্য</p>
                    <p>নাম</p>

                    <form onSubmit={handleUpdateProfile} action="">
                        
                    <fieldset className="  fieldset border-base-300 rounded-box  border ">
                        
                        <div >
                            <input name='name' type="text" className="input join-item" placeholder="Upadte name" />
                            <button type='submit' className="btn w-full my-2 border-2">Update</button>
                        </div>
                    </fieldset>
                    </form>


                </div>

        </div>
    );
};

export default ProfilePage;