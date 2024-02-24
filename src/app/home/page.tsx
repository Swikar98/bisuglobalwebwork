"use client";
import Text from "../../component/Text";
import NextJsCarousel from "../../component/NextJsCarousel";
import Footer from "../../component/Footer";
import Mainaus from '@/component/mainaus'
import MainCard from '@/component/MainCard'
import Welcome from '@/component/Welcome'
import Service from "@/component/Service"
export default function Home() {
  return (
    <>
      <NextJsCarousel /> 
      <Welcome/>
      <Mainaus/>
      <MainCard/>
      <Service/>
      <Text />


    </>
  );
}