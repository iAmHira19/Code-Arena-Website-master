"use client"
import React from 'react'
import "flowbite";
import { Footer } from "flowbite-react";
export const FooterComp = () => {
  return (
    <Footer container={true}>
  <Footer.Copyright
    href="#"
    by="Code Arena | Made with <3 by Psycho"
    year={2023}
  />
  <Footer.LinkGroup>
    <Footer.Link href="#">
      About
    </Footer.Link>
    <Footer.Link href="#">
      Privacy Policy
    </Footer.Link>
    <Footer.Link href="#">
      Licensing
    </Footer.Link>
    <Footer.Link href="#">
      Contact
    </Footer.Link>
  </Footer.LinkGroup>
</Footer>
  )
}
