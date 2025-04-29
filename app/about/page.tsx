import Image from "next/image";
import { Metadata } from "next";
import { BiEnvelope, BiLinkExternal, BiSolidDownload } from "react-icons/bi";
import { CustomPortableText } from "../components/shared/CustomPortableText";
import Heroes from "../components/pages/Heroes";
import Usage from "../components/pages/Usage";
import { Slide } from "../animation/Slide";
import RefLink from "../components/shared/RefLink";
import { PortableText } from "@portabletext/react";

export const metadata: Metadata = {
  title: "About | Kajal Deore",
  metadataBase: new URL("https://avdhesh-portfolio.vercel.app/about"),
  description: "Learn more about my skills, experience and technical background",
  openGraph: {
    title: "About | Kajal Deore",
    url: "https://avdhesh-portfolio.vercel.app/about",
    description: "Learn more about my skills, experience and technical background",
    // images: "https://res.cloudinary.com/avdhesh-varshney/image/upload/v1724603838/og.png",
  },
};

export default function About() {
  const data = {
    fullName: "Kajal Deore",
    location: "Dhule, Maharashtra",
    profileImage: {
      image: "https://cdn.sanity.io/images/1ofznrqz/production/29e5de57c6f1ec45b45be482e66455b7ed0221d0-1201x1201.jpg", // Replace with your image URL
      alt: "Kajal Deore",
      lqip: "data:image/jpeg;base64,...", // Replace with your base64 image preview data
    },
    fullBio: [
      {
        _type: "block",
        children: [
          { _type: "span", text: "a software developer with a passion for building web applications and exploring the world of AI. Over the past few years, I’ve participated in several hackathons, winning competitions like the Kimo AI Competition, InsightMed Hackathon, and CodeCraze 2.0. I’ve also had the opportunity to contribute to open-source projects through programs like GirlScript Summer of Code and Social Winter of Code, which have helped me collaborate with developers worldwide and improve my skills. In addition, I’ve gained valuable experience through the Pragati Path to Future program at Infosys, where I focused on data science and machine learning, and the Google Cloud Arcade, where I developed a deeper understanding of cloud technologies." },
        ],
      },
    ],
    email: "kajaldeore04@gmail.com",
  };

  return (
    <main className="relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      <div key={data.fullName}>
        <section className="relative grid lg:grid-cols-custom grid-cols-1 gap-x-6 justify-items-center">
          <div className="order-2 lg:order-none">
            <Slide>
              <h1 className="font-incognito font-semibold tracking-tight sm:text-5xl text-3xl lg:leading-tight basis-1/2 mb-8">
                I&apos;m {data.fullName}. I'm Kajal Deore, creating software that makes a difference.
              </h1>
              <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed">
                    <PortableText
                      value={data.fullBio}
                      components={CustomPortableText}
                    />
                  </div>
              
            </Slide>
          </div>

          <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
            <Slide delay={0.1}>
              <div className="sticky top-10">
                <Image
                  className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top"
                  src={data.profileImage.image}
                  width={400}
                  height={400}
                  quality={100}
                  alt={data.profileImage.alt}
                  placeholder="blur"
                  blurDataURL={data.profileImage.lqip}
                  priority
                />

                <div className="flex flex-col text-center gap-y-4">
                  <div className="flex items-center gap-x-3">
                    <RefLink
                      href="https://linktr.ee/avdhesh15"
                      className="flex items-center justify-center text-center gap-x-2 basis-[90%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 text-lg font-incognito font-semibold"
                    >
                      View Resume <BiLinkExternal className="text-base" />
                    </RefLink>
                    <a
                      href="https://drive.google.com/file/d/10kmJcMktF0t_sDRIkkHmOEz7XPJvLDyN/view?usp=sharing"
                      className="flex items-center justify-center text-center dark:text-primary-color text-secondary-color hover:underline basis-[10%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-3 text-lg"
                      title="Download Resume"
                    >
                      <BiSolidDownload
                        className="text-lg"
                        aria-label="Download Resume"
                      />
                    </a>
                  </div>

                  <a
                    href={`mailto:${data.email}`}
                    className="flex items-center gap-x-2 hover:text-primary-color"
                  >
                    <BiEnvelope className="text-lg" />
                    {data.email}
                  </a>
                </div>
              </div>
            </Slide>
          </aside>
        </section>
        <Slide delay={0.14}>
          <Usage />
        </Slide>
        <Heroes />
      </div>
    </main>
  );
}
