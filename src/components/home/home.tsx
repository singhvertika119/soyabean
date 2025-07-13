import { KawaiiHeart } from '../../../public/icons/kawaii-heart';
import { KawaiiLeaf } from '../../../public/icons/kawaii-leaf';
import CaptionImage from '@/components/common/caption-image';
import { Button } from '@/components/ui/button';

export default function HomeSection() {
  return (
    <section
      id="home"
      className="mt-10 grid min-h-[80vh] grid-cols-1 items-center justify-center gap-4 sm:mt-0 sm:min-h-[91vh] md:grid-cols-2"
    >
      <div className="max-w-lg">
        <h2 className="bg-kawaii-lavender mx-auto mb-4 w-fit rounded-full px-6 py-3 text-sm font-medium sm:mx-0">
          Full Stack Developer
        </h2>
        <h1 className="font-family-bubblegum mb-6 text-center text-6xl font-bold sm:text-left">
          Hi, I&apos;m <br />
          <span className="bg-gradient-to-r from-pink-300 to-pink-400 bg-clip-text text-6xl text-transparent sm:text-6xl">
            Vertika
          </span>
        </h1>
        <p className="text-center text-lg sm:text-left">
          Welcome to my world where coding meets creativity ౨ৎ˚₊✩‧₊ I combine technical expertise
          with creativity to craft functional, imaginative solutions!
        </p>
        <div className="mt-8 flex justify-center gap-4 sm:justify-start">
          <Button className="bg-kawaii-pink hover:bg-kawaii-pink/80 w-40 rounded-full py-5 text-sm font-semibold text-black transition-all duration-300 hover:shadow-sm sm:w-44 sm:text-base">
            See My Work
            <KawaiiHeart className="text-black" />
          </Button>
          <Button className="bg-kawaii-mint hover:bg-kawaii-mint/80 w-40 rounded-full py-5 text-sm font-semibold text-black transition-all duration-300 hover:shadow-sm sm:w-44 sm:text-base">
            Contact Me
            <KawaiiLeaf className="text-black" />
          </Button>
        </div>
      </div>

      {/* Images */}
      <div className="border-kawaii-pink from-kawaii-pink via-kawaii-mint to-kawaii-blue flex gap-4 rounded-3xl border-2 bg-gradient-to-br p-1 shadow-xl">
        <div className="flex h-full w-full justify-center gap-4 rounded-2xl bg-white px-4 py-6 sm:px-10 sm:py-20">
          <CaptionImage
            src="/images/beabadoobee.jpeg"
            caption="Beabadoobee"
            className="h-40 w-60 sm:h-full"
            captionClassName="bg-kawaii-lavender/70"
          />
          <CaptionImage
            src="/images/beabadoobee.jpeg"
            caption="Oikawa"
            className="h-40 w-60 sm:h-full"
            captionClassName="bg-kawaii-pink/70"
          />
        </div>
      </div>
    </section>
  );
}
