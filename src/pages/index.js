import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/profiledeveloper-pic-1.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className=" flex items-center justify-between w-full ">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="ShanDev."
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2">
              <h1 className="text-xl font-bold">Building the Future, One Stack at a Time.</h1><br/>
              <p>
                As a proficient full-stack developer, I specialize in <br/>
                transforming ideas into impactful web applications. With a <br/>
                strong focus on modern frameworks like React.js, I am committed <br/>
                to delivering innovative, efficient, and scalable solutions. <br/>
                Dive into my latest projects and articles to explore the depth <br/>
                of my experience in full-stack development and my dedication to <br/>
                crafting seamless user experiences. 
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
