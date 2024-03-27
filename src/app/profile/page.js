import {Avatar, Box} from "@mui/material";
import {Person} from "@mui/icons-material";

export default function Profile() {
  return (
    <Box p={10} display='flex' flexDirection='column' alignItems='center'>
      <Avatar sx={{width: 150, height: 150, mb: 5}}>
        <Person/>
      </Avatar>
      <p><b>Name: </b>Eliezer</p>
      <p><b>Age: </b>29 years</p>
      <p><b>Hobbies: </b>Hiking</p>
      <p><b>Books: </b>Man in search for meaning - Viktor Frankl</p>
    </Box>
  )
}