"use client"
import { useAppSelector } from '@/redux/hooks';
import { selectIsAdminLoggedIn } from '@/redux/slices/auth/authSlice';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react'

const AuthLayout = ({children}:{children:ReactNode}) => {
 const navigate = useRouter();
 const isAdminLoggedIn = useAppSelector(selectIsAdminLoggedIn);

 if(isAdminLoggedIn){
    navigate.push("/admin");
 }

  return (
    <div className='h-[90vh] w-full flex items-center justify-center' >
        {children}
    </div>
  )
}

export default AuthLayout