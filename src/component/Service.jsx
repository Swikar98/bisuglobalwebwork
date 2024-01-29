import { PiStudentFill } from "react-icons/pi";
import { LiaUniversitySolid } from "react-icons/lia";
import { IoIosDocument } from "react-icons/io";
export default function STServices() {
  return (
    <div>
    <div className=" m-4 p-4 h-full w-full flex justify-center  text-center">
      <div className="grid grid-cols-2 md:grid-cols-3">
        <div className=" ">
          <PiStudentFill />
        </div>
        <div className=" rounded-lg">
          <LiaUniversitySolid />
        </div>
        <div className="rounded-lg">
          <IoIosDocument />
        </div>
      </div>
    </div>
    </div>
  );
}
