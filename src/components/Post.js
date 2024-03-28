'use client'

import {useState} from "react";
import {Avatar, Box, Card, CardActionArea, Dialog, DialogContent, Typography} from "@mui/material";
import {Person} from "@mui/icons-material";

const PostContent = ({detailedView = false, text, author}) => <>
  <Box display="flex" alignItems="center">
    <Avatar sx={{mr: 2}}>
      <Person/>
    </Avatar>
    <p>{author}</p>
  </Box>
  <Typography noWrap={!detailedView}>{text}</Typography>
</>

export const Post = ({author, text}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return <>
    <Dialog fullWidth maxWidth='xl' onClose={handleClose} open={open}>
      <DialogContent>
        <PostContent detailedView author={author} text={text}/>
      </DialogContent>
    </Dialog>
    <Card>
      <CardActionArea sx={{p: 2}} onClick={handleClickOpen}>
        <PostContent author={author} text={text}/>
      </CardActionArea>
    </Card>
  </>;
}