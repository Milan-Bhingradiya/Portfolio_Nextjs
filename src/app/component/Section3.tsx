import Card from "./Card";
import postmanImage from "../../../public/postman.png";
import reactImage from "../../../public/react.png";
import flutterImage from "../../../public/flutter.png";

import cpuImage from "../../../public/cpuimg.png";
import dsaImage from "../../../public/dsa.png";
import lockImage from "../../../public/lock.png";
export default function Section3() {
   const myservicesArr: string[] = [
     "Web Devlopment",
     "App Devlopment",
     "Backend Devlopment",
   ];
   const learningArr = ["Machine learning", "DSA", "College Subjects"];

   const myservicesImgArr = [reactImage, flutterImage, postmanImage];
   const learningImgArr = [cpuImage, dsaImage, lockImage];

   return (
    <div>
      <div className="  text-3xl font-bold text-white xs:ml-24 sm:ml-[120px] mt-20  ml-11 mr-2  xs:mr-4  sm:mr-20 ">
        My services
      </div>

      <div className="flex flex-row justify-center md:justify-center  flex-wrap text-white ml-2 mr-2   xs:ml-3 xs:mr:mr-3  sm:ml-20 sm:mr-20">
        {myservicesArr.map((name, index) => {
          return (
            <Card
              key={index}
              name={name}
              img={myservicesImgArr.at(index)}
            ></Card>
          );
        })}
      </div>

      <div className="  text-3xl font-bold text-white  xs:ml-24 sm:ml-[120px] mt-20  ml-11 mr-2   xs:mr-4  sm:mr-20 ">
        Learning
      </div>

      <div className="flex flex-row justify-center md:justify-center  flex-wrap text-white  ml-2 mr-2   xs:ml-3 xs:mr:mr-3  sm:ml-20 sm:mr-20">
        {learningArr.map((name, index) => {
          return (
            <Card key={index} name={name} img={learningImgArr.at(index)}></Card>
          );
        })}
      </div>
    </div>
  );
}
