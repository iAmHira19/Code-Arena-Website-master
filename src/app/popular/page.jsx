'use client'
import { CodeSnippet } from '@/components/CodeSnippet';
import { Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react'

function page() {
const [snippets, setSnippets] = useState([]);
  async function getData() {
    const response = await fetch("http://localhost:3000/api/CodePosts");
    const jsonData = await response.json();
    console.log(jsonData);
    setSnippets(jsonData.snippets)
  }

  useEffect(() => {
  getData();
  }, [])
  return (
    <div className='my-4 w-full h-screen flex justify-center items-center flex-col'>
    <h1>Popular Posts</h1>
    {
      snippets.length == 0? <Spinner/>:""
    }

    {
      snippets.map((snippet) => {
        return <CodeSnippet slug={snippet.slug} title={snippet.title} body={snippet.body} avatar={snippet.authorAvatar} author={snippet.authorName} />
      })
    }
    </div>
  )
}

export default page