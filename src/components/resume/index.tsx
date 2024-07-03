import { RESUME_URL } from '@/utils/services/client/constants';
import React from 'react';

const Index = () => {
  return (
    <div className='h-full w-full' >
        <iframe src={RESUME_URL} width={"100%"} className=' h-full' />
    </div>
  )
}

export default Index