'use client'

import {useState} from "react";
import {BottomNavigation, BottomNavigationAction} from '@mui/material';
import Link from "next/link";

export const BottomNav = () => {
  const [value, setValue] = useState(0);
  
  return <>
    <BottomNavigation showLabels value={value} onChange={(event, newValue) => {
      setValue(newValue);
    }}>
      <BottomNavigationAction component={(props) => <Link {...props} href='/'>home</Link>} label='home'/>
      <BottomNavigationAction component={(props) => <Link {...props} href='/profile'>profile</Link>} label='profile'/>
    </BottomNavigation>
  </>
}