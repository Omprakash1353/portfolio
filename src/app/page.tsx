import Image from "next/image";
import Link from "next/link";
import { AiOutlineKubernetes } from "react-icons/ai";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import {
	FaCss3,
	FaDocker,
	FaGitAlt,
	FaGithub,
	FaHtml5,
	FaLinkedin,
	FaNodeJs,
	FaReact,
	FaWindows,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";
import { GrGraphQl, GrMysql } from "react-icons/gr";
import { IoLogoElectron, IoLogoJavascript, IoMail } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import {
	SiDrizzle,
	SiExpress,
	SiLeetcode,
	SiNestjs,
	SiPostman,
	SiRedis,
	SiRedux,
	SiSocketdotio,
	SiSpring,
} from "react-icons/si";

export default function Home() {
  const socialLinks = [
    { href: "/#", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "/#", icon: <FaGithub />, label: "Github" },
    { href: "/#", icon: <SiLeetcode />, label: "Leetcode" },
    { href: "/#", icon: <IoMail />, label: "Mail" },
  ];

  return (
    <main className="flex min-h-screen items-start justify-center pt-32 bg-black">
      <div className="container w-[650px] p-10 text-white flex flex-col justify-center items-center gap-10">
        <div className="flex items-center self-start">
          <span className="mr-2 bg-green-500 rounded-full w-2 h-2"></span>
          <span className="text-start text-xs lg:text-base">Online</span>
        </div>
        <div className="self-start">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-wide">
            <span>Hey I&apos; m Omprakash</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to to-blue-500">
              Fullstack Developer.
            </span>
          </h1>
        </div>
        <div className="self-start flex items-center gap-x-5 gap-y-2 flex-wrap">
          {socialLinks.map((links) => (
            <Link key={links.label} href={links.href}>
              <div className="w-28 h-10 bg-zinc-900 flex justify-center items-center rounded-md gap-2 hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1]">
                {links.icon}
                {links.label}
              </div>
            </Link>
          ))}
        </div>
        <div className="text-zinc-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi enim
          quis minus libero, consectetur qui dolore quisquam atque nam eos
          deleniti alias cumque provident laborum placeat ex aspernatur sed
          beatae!
        </div>
        <div className="w-full bg-zinc-600 h-[0.5px]" />
        <section className="w-full">
          <h3 className="self-start text-xl font-medium pb-5">Projects</h3>
          <div className="flex flex-wrap gap-4"></div>
        </section>
        <div className="w-full bg-zinc-600 h-[0.5px]" />
        <section className="w-full">
          <h3 className="self-start text-xl font-medium pb-5">Tech</h3>
          <div className="flex flex-wrap gap-4">
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <BiLogoMongodb className="h-10 w-10 text-emerald-500" />
              MongoDB
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <SiExpress className="h-8 w-8" />
              Express
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <FaReact className="h-10 w-10 text-blue-700" />
              React
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <FaNodeJs className="h-10 w-10 text-green-600" />
              NodeJS
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <RiNextjsFill className="h-10 w-10 text-black bg-white rounded-full outline-none border-none" />
              Next
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <SiSocketdotio className="h-10 w-10" />
              Socket IO
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <GrGraphQl className="h-10 w-10 text-pink-600" />
              GraphQL
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <Image
                src={"/firebase.png"}
                alt="Firebase"
                height={100}
                width={100}
                className="h-10 w-8 object-center object-cover"
              />
              Firebase
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <SiRedux className="h-10 w-10 text-purple-800" />
              Redux
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <IoLogoJavascript className="h-10 w-10 text-yellow-400" />
              Javascript
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <BiLogoTypescript className="h-11 w-11 text-blue-700" />
              Typescript
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <GrMysql className="h-11 w-11 text-blue-700" />
              MySQL
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <FaHtml5 className="h-11 w-11 text-orange-700" />
              HTML
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <FaCss3 className="h-11 w-11 text-blue-700" />
              CSS
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <FaDocker className="h-11 w-11 text-blue-700" />
              Docker
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <Image
                src={"/java.png"}
                alt="Firebase"
                height={100}
                width={100}
                className="h-10 w-8 object-center object-cover"
              />
              Java
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <Image
                src={"/python.png"}
                alt="Firebase"
                height={100}
                width={100}
                className="h-10 w-8 object-center object-cover"
              />
              Python
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <SiRedis className="h-11 w-11 text-red-500" />
              Redis
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <Image
                src={"/c++.svg"}
                alt="Firebase"
                height={100}
                width={100}
                className="h-10 w-8 object-center object-cover"
              />
              C++
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <IoLogoElectron className="h-10 w-10" />
              Electron
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <Image
                src={"/aws.webp"}
                alt="Firebase"
                height={100}
                width={100}
                className="h-7 w-10 object-contain object-center"
              />
              AWS
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <SiSpring className="h-9 w-9 text-green-500" />
              Spring Boot
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <FaGolang className="h-14 w-14 text-cyan-500" />
              Go
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <SiNestjs className="h-11 w-11 text-rose-600" />
              Nest
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <SiDrizzle className="h-11 w-11 text-lime-400" />
              Drizzle
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <AiOutlineKubernetes className="h-12 w-12 text-blue-800" />
              Kubernetes
            </div>
          </div>
        </section>
        <div className="w-full bg-zinc-600 h-[0.5px]" />
        <section className="w-full">
          <h3 className="self-start text-xl font-medium pb-5">Uses</h3>
          <div className="flex flex-wrap gap-4">
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <FaWindows className="h-10 w-10 text-blue-500" />
              Windows
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <FcLinux className="h-10 w-10" />
              Linux
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <FaGitAlt className="h-10 w-10 text-red-900" />
              Git
            </div>
            <div className="bg-zinc-900 h-32 w-32 rounded-md flex flex-col justify-center items-center hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-[1.1] cursor-pointer">
              <SiPostman className="h-10 w-10 text-orange-500" />
              Postman
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
