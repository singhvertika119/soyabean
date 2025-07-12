import { KawaiiHeart } from '../../../public/icons/kawaii-heart';
import { KawaiiLeaf } from '../../../public/icons/kawaii-leaf';
import CaptionImage from '../common/caption-image';
import { Button } from '../ui/button';

export default function HomeSection() {
  return (
    <section id="home" className="flex min-h-[92vh] items-center justify-between">
      <div className="max-w-lg">
        <h2 className="bg-kawaii-lavender mb-4 w-fit rounded-full px-4 py-3 text-sm font-medium">
          FullStack Developer
        </h2>
        <h1 className="mb-6 text-4xl font-bold">
          Hi, I'm <br />
          <span className="bg-gradient-to-r from-pink-300 to-pink-400 bg-clip-text text-transparent">
            Amulya
          </span>
        </h1>
        <p className="text-lg">
          Welcome to my world where coding meets creativity ౨ৎ˚₊✩‧₊ I combine technical expertise
          with creativity to craft functional, imaginative solutions!
        </p>
        <div className="mt-8 flex gap-4">
          <Button className="bg-kawaii-pink hover:bg-kawaii-pink/80 w-44 rounded-full py-6 text-base font-semibold text-black transition-all duration-300 hover:shadow-sm">
            See My Work
            <KawaiiHeart className="text-black" />
          </Button>
          <Button className="bg-kawaii-mint hover:bg-kawaii-mint/80 w-44 rounded-full py-6 text-base font-semibold text-black transition-all duration-300 hover:shadow-sm">
            Contact Me
            <KawaiiLeaf className="text-black" />
          </Button>
        </div>
      </div>

      {/* Images */}
      <div className="border-kawaii-pink from-kawaii-pink via-kawaii-mint to-kawaii-blue flex gap-4 rounded-3xl border-2 bg-gradient-to-br p-1 shadow-xl">
        <div className="flex h-full w-full gap-4 rounded-2xl bg-white px-10 py-20">
          <CaptionImage
            src="/images/beabadoobee.jpeg"
            caption="Beabadoobee"
            className="w-60"
            captionClassName="bg-kawaii-lavender/70"
          />
          <CaptionImage
            src="/images/beabadoobee.jpeg"
            caption="Oikawa"
            className="w-60"
            captionClassName="bg-kawaii-pink/70"
          />
        </div>
      </div>
    </section>
  );
}
