import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Bannerpic from "../image/banner.jpg";

export default class Text extends Component{
  render(){
    return (
    <div className=" relative text-center item-center justify-center m-3 mt-12 md:mt-0 ">
    <Image
      src={Bannerpic}
      alt="bacground  flex image"
      className="rounded-lg h-fit-content"
    />
    <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-2  w-full absolute text-center text-white">
     
      <Carousel infiniteLoop useKeyboardArrows autoPlay normal className=""> 
    <div > 
    <p className=" text-2xl text-center p-9 hover:text-white  ">
            "Consider the impact of your success on others."
          </p>
    
  </div>
    <div> 
    <p className=" text-2xl text-center  p-9 hover:text-white  ">
            "Each day is a fresh chapter in your life's narrative.."
          </p>
    

    </div> 
  
  </Carousel> 
  </div>
  </div>
      );
    }
    }

