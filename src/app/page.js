'use client'
import {Stack} from '@mui/material';
import {Post} from "@/components/Post";
import {useEffect, useState} from "react";
import data from '/src/posts.json'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // TODO: improve mock call with Promises
    setTimeout(() => {
      setPosts(data.posts)
    }, 2000)
  }, [])

  return (
    <>
      <Stack spacing={1}>
        {posts.map(({author, text, picture}) => <Post author={author} text={text} picture={picture}/>)}
      </Stack>
    </>
  );
}
