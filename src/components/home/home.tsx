import Link from 'next/link';
import { KawaiiHeart } from '../../../public/icons/kawaii-heart';
import { KawaiiLeaf } from '../../../public/icons/kawaii-leaf';
import CaptionImage from '@/components/common/caption-image';
import { Button } from '@/components/ui/button';
import { MusicIcon, Star, StarIcon } from 'lucide-react';

export default function HomeSection() {
  return (
    <section
      id="home"
      className="mt-10 grid min-h-[80vh] grid-cols-1 items-center justify-center gap-4 sm:mt-0 sm:min-h-[91vh] lg:grid-cols-2"
    >
      <div className="max-w-lg">
        <h2 className="bg-kawaii-lavender mx-auto mb-4 w-fit rounded-full px-6 py-3 text-sm font-medium sm:mx-0 dark:text-neutral-800">
          Machine Learning Engineer
        </h2>
        <h1 className="font-family-bubblegum mb-6 text-center text-6xl font-bold sm:text-left">
          Hi, I&apos;m <br />
          <span className="bg-gradient-to-r from-pink-300 to-pink-400 bg-clip-text text-6xl text-transparent sm:text-6xl">
            Vertika
          </span>
        </h1>
        <p className="text-center text-lg sm:text-left">
          Mostly just curious about everything. I like building things, talking about ideas, and
          keeping things simple.
        </p>
        <div className="mt-8 flex justify-center gap-4 sm:justify-start">
          <Link href="#projects">
            <Button className="bg-kawaii-pink hover:bg-kawaii-pink/80 w-40 rounded-full py-5 text-sm font-semibold text-black transition-all duration-300 hover:shadow-sm sm:w-44 sm:text-base">
              See My Work
              <KawaiiHeart className="text-black" />
            </Button>
          </Link>
          <Link href="#contact">
            <Button className="bg-kawaii-mint hover:bg-kawaii-mint/80 w-40 rounded-full py-5 text-sm font-semibold text-black transition-all duration-300 hover:shadow-sm sm:w-44 sm:text-base">
              Contact Me
              <KawaiiLeaf className="text-black" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Images */}
      <div className="border-kawaii-pink from-kawaii-pink via-kawaii-mint to-kawaii-blue relative flex gap-4 rounded-3xl border-2 bg-gradient-to-br p-1 shadow-xl">
        <div className="flex h-full w-full justify-center gap-4 rounded-2xl bg-white px-4 py-6 sm:px-10 sm:py-12">
          <div className="space-y-2">
            <CaptionImage
              src="/images/muffin1.jpg"
              caption="Muffins <3"
              className="max-h-60 w-full sm:h-full sm:w-52"
              captionClassName="bg-kawaii-lavender/70"
            />
            <Star size={20} className="text-kawaii-mint mx-auto" />
          </div>
          <div className="space-y-2">
            <CaptionImage
              src="/images/momo.jpg"
              caption="me & momos"
              className="max-h-60 w-full sm:h-full sm:w-52"
              captionClassName="bg-kawaii-pink/70"
            />
            <MusicIcon size={20} className="text-kawaii-pink mx-auto" />
          </div>
        </div>

        <StarIcon
          className="animate-sparkle absolute -top-3 -right-3 text-yellow-400"
          fill="rgb(250 204 21)"
        />
        <StarIcon
          className="animate-sparkle absolute -bottom-3 -left-3 text-yellow-400"
          fill="rgb(250 204 21)"
        />
      </div>
    </section>
  );
}
