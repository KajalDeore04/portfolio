import { Metadata } from "next";
import { BiDetail } from "react-icons/bi";
import Posts from "../components/pages/Posts";
import Social from "../components/shared/Social";
import { Slide } from "../animation/Slide";
import PageHeading from "@/app/components/shared/PageHeading";

export const metadata: Metadata = {
  title: "Blog | Kajal Deore",
  metadataBase: new URL("https://avdhesh-portfolio.vercel.app/blog"),
  description: "Read the latest stories from Kajal Deore's Blog",
  openGraph: {
    title: "Blog | Kajal Deore",
    url: "https://avdhesh-portfolio.vercel.app/blog",
    description: "Read the latest stories from Kajal Deore's Blog",
    images: "https://res.cloudinary.com/avdhesh-varshney/image/upload/v1724597954/blog.png", // You can change the image URL here as well
  },
};

export default async function Blog() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Blog"
        description="Welcome to my blog domain where I share personal stories about things I've learned, projects I'm working on, and general findings. I also write for other publications."
      >
        <Social type="publication" />
      </PageHeading>

      <Slide delay={0.1}>
        <div className="flex items-center gap-x-3 mb-8">
          <BiDetail />
          <h2 className="text-xl font-semibold tracking-tight">Explore All</h2>
        </div>
        <Posts />
      </Slide>
    </main>
  );
}
