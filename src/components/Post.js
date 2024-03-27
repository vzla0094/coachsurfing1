import {Avatar, Box, Card} from "@mui/material";
import {Person} from "@mui/icons-material";

export const Post = ({author, text, profilePicture}) => <Card sx={{p: 2}}>
  <Box display="flex" alignItems="center">
    <Avatar sx={{mr: 2}}>
      <Person/>
    </Avatar>
    <p>{author}</p>
  </Box>
  <p>{text}</p>
</Card>;