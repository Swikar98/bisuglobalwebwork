import Footer from "@/component/Footer"
import Aboutcompany from "@/component/Aboutcompany"

export default function About (){
  return (
   <>
   <div className="relative bg-blue-600  h-52 w-full border-10 border-black flex items-center 
         bg-emerald-500 text-white "> 
       <p className="font-medium text-6xl m-14" ><u>ABOUT US </u></p>
</div> 
<Aboutcompany />
</>
  )
}