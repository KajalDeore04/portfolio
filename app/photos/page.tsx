import { Slide } from "../animation/Slide";
import Image from "next/image";
import { Metadata } from "next";
import { photosQuery } from "@/lib/sanity.query";
import type { PhotoType } from "@/types";
import EmptyState from "../components/shared/EmptyState";
import { sanityFetch } from "@/lib/sanity.client";
import PageHeading from "@/app/components/shared/PageHeading";

export const metadata: Metadata = {
  title: "Photos | Kajal Deore",
  metadataBase: new URL("https://avdhesh-portfolio.vercel.app/photos"),
  description: "Explore photos taken by Kajal Deore",
  openGraph: {
    title: "Photos | Kajal Deore",
    url: "https://avdhesh-portfolio.vercel.app/photos",
    description: "Explore photos taken by Kajal Deore",
    images: "https://res.cloudinary.com/avdhesh-varshney/image/upload/v1724597064/photos.png",
  },
};

export default async function Photos() {
  const images: PhotoType[] = await sanityFetch({
    query: photosQuery,
    tags: ["photo"],
  });

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <PageHeading
        title="Photos"
        description="I love to capture moments and here are some of the photos that I've taken over the years. I hope you enjoy them as much as I enjoyed taking them."
      />
      <figure className="my-6">
        <Slide delay={0.12} className="flex flex-wrap gap-2">
          {images.length > 0 ? (
            <section className="columns-1 sm:columns-2 lg:columns-3 gap-4 mb-12">
              {images.map((image) => (
                <Image
                  key={image._id}
                  src={image.src}
                  alt={image?.alt || ""}
                  className="mb-4 w-full break-inside-avoid rounded-lg"
                  width={100}
                  height={100}
                  sizes="100"
                />
              ))}
            </section>
          ) : (
            <EmptyState />
          )}
        </Slide>
      </figure>
    </main>
  );
}
