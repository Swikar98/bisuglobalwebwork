'use-client'
import ServicesItem from "@/component/MainHome/services.Item"
import SectionHead from "./SectionHead"
export default function ServicesMenu(){
    return(
        <section className="" >
            <div className="text-center ">
            <SectionHead
            subHeader={'most popular services '}
            mainHeader={'Our Services'}/>
            </div>
            <div  className="">
               <ServicesItem/>  
               
            </div>
        </section>
    )
}