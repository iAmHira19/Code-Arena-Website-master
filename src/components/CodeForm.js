"use client"
import {React, useState, useEffect} from 'react'
import "flowbite";
import { Label, TextInput, Textarea, Button } from "flowbite-react";
import { useUser } from "@clerk/nextjs";

export default function CodeForm() {
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [authorAvatar, setAuthorAvatar] = useState("");
    const [authorUsername, setAuthorUsername] = useState("");
    const { isLoaded, isSignedIn, user } = useUser();


    useEffect(() => {
     if(!!user) {
      console.log("FOUND!")
      setAuthorName(user.fullName);
      setAuthorUsername(user.username);
      setAuthorAvatar(user.profileImageUrl);
     }
    }, [])
    




    function handleOnChange(e) {
        console.log(e.target.name);
        setTitle(e.target.value);
    }
    const onClickSubmit = async (e) =>{
        e.preventDefault();
        alert(title);

        
    const data = {
        "title": title,
        "slug": slug,
        "body": body,
        "tags": tags,
        "authorName": authorName,
        "authorUsername": authorUsername,
        "authorAvatar": authorAvatar
      }
    const response = await fetch("http://localhost:3000/api/addCodePost", {
      method: "POST", 
    
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
     
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    console.log(response);
    return response.json(); // parses JSON response into native JavaScript objects
  }



  const handleBody = (e) => {
    setBody(e.target.value);
  }

  return (
    <form className="w-[50%] flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="title"
        value="Snippet Title:"
      />
    </div>
    <TextInput
      id="email"
      type="title"
      placeholder=""
      value={title}
      onChange={handleOnChange}
      required={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="tags"
        value="Tags:"
      />
    </div>
    <TextInput
      id="tags"
      type="text"
      required={true}
    />
  </div>

  <div id="textarea">
  <div className="mb-2 block">
    <Label
      htmlFor="comment"
      value="Body"
    />
  </div>
  <Textarea
    id="body"
    placeholder="Enter Body"
    required={true}
    rows={4}
    value={body}
    onChange={handleBody}    
  />
</div>

<div>
    <div className="mb-2 block">
      <Label
        htmlFor="fullName"
        value="Full Name:"
      />
    </div>
    <TextInput
      id="fullName"
      type="text"
      value={authorName}
      required={true}
      disabled
    />
  </div>


  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="username"
        value="Username:"
      />
    </div>
    <TextInput
      id="username"
      type="text"
      required={true}
      value={authorUsername}
      disabled
    />
  </div>

  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="avatar"
        value="Avatar:"
      />
    </div>
    <TextInput
      id="avatar"
      type="text"
      required={true}
      value={authorAvatar}
      disabled
    />
  </div>

  <Button onClick={onClickSubmit} type="submit">
    Submit Code
  </Button>
</form>
  )
}
