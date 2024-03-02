"use client";
import Text from "../../component/Text";
import ServicesMenu from "@/component/MainHome/ServicesMenu"
import DestinationMenu from "@/component/MainHome/DestinationMenu"
import HomeBackground from "@/component/MainHome/HomeBackground"
import Shape from "@/component/MainHome/shape"
import Choose from "@/component/MainHome/choose"
export default function Home() {
  return (
    <>
      <HomeBackground  /> 
      <Shape />
      <DestinationMenu/>
      <Choose/>
      <Text />
      <ServicesMenu/>
    


    </>
  );
}