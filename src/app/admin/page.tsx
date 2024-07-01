"use client"
import { useAppSelector } from '@/redux/hooks'
import { selectIsAdminLoggedIn } from '@/redux/slices/auth/authSlice'
import { useRouter } from 'next/navigation'
import React from 'react'


const Admin = () => {
  const navigate = useRouter();
  const isAdminLoggedIn = useAppSelector(selectIsAdminLoggedIn);

  if(!isAdminLoggedIn){
    navigate.push("/admin/auth/signin");
  }

  return (
    <div className='' >
      
    </div>
  )
}

export default Admin