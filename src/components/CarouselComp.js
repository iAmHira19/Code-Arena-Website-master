'use client'
import {React, useState, useEffect} from 'react'
import "flowbite";
import { Carousel } from "flowbite-react";

function CarouselComp() {



  return (
    <>
  
  <div className="h-80 sm:h-90 xl:h-80 2xl:h-96">
    
  <Carousel>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <img src="../car-1.jpg"/>
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
    
      <img src="../car-2.jpg"/>
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      
      <img src="../car-3.jpg"/>
    </div>
  </Carousel>
</div>
  </>
  )
}

export default CarouselComp;