'use client'
import {React, useState, useEffect} from 'react'
import "flowbite";
import { Navbar, Button, Dropdown, Avatar } from "flowbite-react";
import LoginModale from './LoginModale';
import SignUpModale from './SignUpModale';
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { WithUser } from "@clerk/nextjs";





function NavBar() {

  const { isLoaded, isSignedIn, user } = useUser();

  const [userEmail, setUserEmail] = useState("Loading...");
const [username, setUsername] = useState("");
const [showModel, setShowModel] = useState(false);

useEffect(()=> {
  if (!!user) {
    setUserEmail(user.primaryEmailAddress);
    setUsername(user.fullName);
  }
}, [])
 


  return (
    <>
  
      <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Code Arena
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    {
      !!user?<UserButton/>:<SignInButton/>
    }
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/popular">
      Popular
    </Navbar.Link>
    <Navbar.Link href="/categories">
      Categories
    </Navbar.Link>
    <Navbar.Link href="/pricing">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/about">
      About
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>

  </>
  )
}

export default NavBar;