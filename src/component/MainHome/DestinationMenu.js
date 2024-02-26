'use-client'

import MenuItem from "@/component/MainHome/menu.Item"
import SectionHead from "./SectionHead"
export default function DestinationMenu(){
    return(
        <section className="w-full mt-10" >
            <div className="text-center ">
            <SectionHead
            subHeader={'Your scholastic objectives are waiting to be fulfilled.'}
            mainHeader={'Destination'}/>
            </div>
            <div  className="w-full ">
               <MenuItem/>  
               
            </div>
        </section>
    )
}