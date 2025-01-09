import Image from "next/image";
import instaImage from "../../../public/insta.png";
import linkedImage from "../../../public/linkedin.png";
import discordImage from "../../../public/discord.png";
import meImage from "../../../public/me.png";
import githubImage from "../../../public/github.png";
export default function OldHero() {
  return (
    <div
      style={{ minHeight: "calc(100vh - 60px)" }}
      className="  w-full text-white flex flex-col  justify-center     "
    >
      <div className="    flex flex-row sm:justify-center   h-[500px] m-4 xs:m-10 ">
        {/* 1 */}
        <div className="   flex flex-col justify-center">
          <div className="sm:h-[20px]"></div>
          <div className="font font-semibold  leading-10 text-[20px]  sm:text-sm md:text-md lg:text-lg xl:text-3xl">
            {/* HELLO I &apos; M
              HELLO I &lsquo; M */}
            HELLO I &rsquo; M
          </div>
          <div className="h-[10px]"></div>
          <p className="font-extrabold leading-none text-[45px]  sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
            Milan
          </p>
          <p className=" leading-none font-extrabold text-[55px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
            Bhingradiya
          </p>
          <br></br>
          <div className="text-[15px] leading-8 sm:text-sm md:text-md lg:text-lg xl:text-xl">
            Web Devloper & App Devloper
          </div>

          <div className="h-[10px]"></div>

          <div className="  hover:scale-95 h-[30px] w-[90px]    md:h-[33px] sm:w-[120px] sm:h-[35px] lg:h-[38px] lg:w-[140px] xl:h-[40px] xl:w-[150px]  mt-2 sm:mt-4 rounded-md   bg-primary2 flex flex-row justify-center items-center ">
            <p className="text-[10px]  sm:text-sm md:text-md lg:text-lg xl:text-xl">
              {" "}
              Explore More
            </p>
          </div>

          <div className=" flex flex-row  mt-2 sm:mt-4 ">
            <Image
              className=" object-contain hover:scale-110 h-[17px] sm:h-[20px] md:h-[22px] lg:h-[27px] xl:h-[30px] m-2"
              src={linkedImage}
              alt="LinkedIn"
            ></Image>

            <Image
              className=" object-contain hover:scale-110  h-[17px] sm:h-[20px] md:h-[22px] lg:h-[27px] xl:h-[30px] m-2"
              src={instaImage}
              alt="Instagram"
            ></Image>
            <Image
              className=" object-contain hover:scale-110  h-[17px] sm:h-[20px] md:h-[22px] lg:h-[27px] xl:h-[30px] m-2"
              src={githubImage}
              alt="GitHub"
            ></Image>
            <Image
              className=" object-contain hover:scale-110  h-[17px] sm:h-[20px] md:h-[22px] lg:h-[27px] xl:h-[30px] m-2"
              src={discordImage}
              alt="Discord"
            ></Image>
          </div>
        </div>

        {/* 2 */}

        <div className="xs:w-32  "> </div>
        {/* 3*/}
        <div className="   hidden xs:block    flex-row justify-center h-[200px] w-[500px] sm:h-[200px]  md:h-[350px] lg:h-[400px] xl:h-[430px]">
          <Image
            className=" blueshadow object-contain h-[200px] sm:h-[200px]  md:h-[350px] lg:h-[400px] xl:h-[430px] o"
            src={meImage}
            alt="my img"
          ></Image>
        </div>
      </div>
    </div>
  );
}
