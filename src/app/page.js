'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { UserProfile, useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useState } from 'react';
import CarouselComp from '@/components/CarouselComp';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
   <>
   
  <CarouselComp/>
   </>
  )
}
