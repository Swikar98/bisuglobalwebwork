"use client";
import Text from "../../component/Text";
import NextJsCarousel from "../../component/NextJsCarousel";
import ServicesMenu from "@/component/MainHome/ServicesMenu"
import Mainaus from '@/component/MainHome/Mainaus'
import MainCard from '@/component/MainHome/MainCard'
import Welcome from '@/component/MainHome/Welcome'
import DestinationMenu from "@/component/MainHome/DestinationMenu"
export default function Home() {
  return (
    <>
      <NextJsCarousel /> 
      <Welcome/>
      <DestinationMenu/>
      
      <Text />
      <ServicesMenu/>
    


    </>
  );
}