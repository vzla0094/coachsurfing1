'use client'

import {useEffect, useState} from "react";

import {Avatar, Box} from "@mui/material";
import {Person} from "@mui/icons-material";

import data from '/src/users.json'

export default function Profile() {
  const [user, setUser] = useState({})
  
  useEffect(() => {
    setTimeout(() => {
      setUser(data['axtykgvdtyj924'])
    }, 500)
  }, [])
  
  return (
    <Box p={10} display='flex' flexDirection='column' alignItems='center'>
      <Avatar sx={{width: 150, height: 150, mb: 5}}>
        <Person/>
      </Avatar>
      <p><b>Name: </b>{user.name}</p>
      <p><b>Age: </b>{user.age}</p>
      <p><b>Hobbies: </b>{user.hobbies?.map(hobby => `${hobby} `)}</p>
      <p><b>Books: </b>{user.books?.map(book => `${book} `)}</p>
    </Box>
  )
}