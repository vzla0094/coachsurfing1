'use client'

import {useState} from "react";
import {BottomNavigation, BottomNavigationAction} from '@mui/material';

export const BottomNav = () => {
  const [value, setValue] = useState(0);

  return <>
    <BottomNavigation showLabels value={value} onChange={(event, newValue) => {
      setValue(newValue);
    }}>
      <BottomNavigationAction label='home'/>
      <BottomNavigationAction label='profile'/>
    </BottomNavigation>
  </>
}