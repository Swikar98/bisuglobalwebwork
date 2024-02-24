import { PiStudentFill } from "react-icons/pi";
import { LiaUniversitySolid } from "react-icons/lia";
import { IoIosDocument } from "react-icons/io";

export default function STServices() {
  return (
    <div className="bg-blue-600 m-4 p-4 rounded-lg">
      <div className="items-center justify-center text-center mt-5">
        <h1 className="font-bold text-3xl bg-blue text-white">Our Services </h1>
        <div className="mx-4 m-4 rounded-lg h-full w-full flex text-white justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 lg:gap-52">
            <div className="mx-4 sm:mx-0">
              <PiStudentFill size={170} />
            </div>
            <div className="mx-4 sm:mx-0 rounded-lg">
              <LiaUniversitySolid size={170} />
            </div>
            <div className="mx-4 sm:mx-0 rounded-lg">
              <IoIosDocument size={170} />
            </div>
            
          </div>
        </div>
        <div className="mx-4 m-4 rounded-lg h-full w-full flex text-white justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 lg:gap-52">
            <div className="mx-4 sm:mx-0">
              <PiStudentFill size={170} />
            </div>
            <div className="mx-4 sm:mx-0 rounded-lg">
              <LiaUniversitySolid size={170} />
            </div>
            <div className="mx-4 sm:mx-0 rounded-lg">
              <IoIosDocument size={170} />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
