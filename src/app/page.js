'use client'
import {Stack} from '@mui/material';
import {Post} from "@/components/Post";
import {useEffect, useState} from "react";
import postsData from '/src/posts.json'
import usersData from '/src/users.json'

export default function Home() {
  const [posts, setPosts] = useState([])
  
  const currentUserId = 'axtykgvdtyj924' // This is set during auth
  
  useEffect(() => {
    // TODO: improve mock call with Promises
    setTimeout(() => {
      setPosts(postsData.filter(post => {
        return usersData[currentUserId].friends.includes(post.userId)
      }))
    }, 500)
  }, [])
  
  return (
    <>
      <Stack spacing={1}>
        {posts.map(({author, text, picture, postId}) =>
          <Post
            key={postId}
            author={author}
            text={text}
            picture={picture}
          />
        )}
      </Stack>
    </>
  );
}
