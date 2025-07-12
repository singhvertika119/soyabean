import Wrapper from '@/components/common/Wrapper';
import AboutSection from '@/components/home/about';
import ContactSection from '@/components/home/contact';
import HomeSection from '@/components/home/home';
import ProjectsSection from '@/components/home/projects';

export default function Home() {
  return (
    <main>
      <Wrapper>
        <HomeSection />
      </Wrapper>
      <AboutSection />
      <Wrapper>
        <ProjectsSection />
      </Wrapper>
      <ContactSection />
    </main>
  );
}
