import { CakeIcon } from "lucide-react"
import useTheme from '@/hooks/useTheme';
import React, { useState, useEffect } from 'react';

const Test = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const color = isDarkMode ? 'white' : 'black';


  return (
    <div className='m-5'>
      <CakeIcon color={color} size={100} />
    </div>
  )
};

export default Test