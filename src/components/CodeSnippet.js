import React from 'react'
import "flowbite";
import { Toast, HiFire, Card, Button } from "flowbite-react";
export const CodeSnippet = (props) => {
   
  return (
    <>
    <Card className='w-[70%]' style={{
        margin: "40px 0px"
    }}>
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {props.title}
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
   {props.body.substr(0, 10)}...
   <br/>
   <img style={{
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    display: "inline-block"
   }} src={props.avatar}/> {props.author}
  </p>
  <Button onClick={()=> {
  }}>
    Read more
    <svg
      className="ml-2 -mr-1 h-4 w-4"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </Button>
</Card>
</>
  )
}
