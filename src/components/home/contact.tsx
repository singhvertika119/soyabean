import Wrapper from '../common/Wrapper';
import ContactForm from './contact-form';

export default function ContactSection() {
  return (
    <section id="contact" className="from-kawaii-pink/20 to-kawaii-mint/20 bg-gradient-to-br py-20">
      <Wrapper>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-xl font-semibold">Get in touch</h1>
          <div className="bg-kawaii-pink h-1 w-20"></div>

          <p className="mt-2 max-w-lg text-center">
            Have a project in mind or want to chat about coding? Send me a message and let&apos;s
            create something amazing together!
          </p>
        </div>

        <div className="border-kawaii-pink mx-auto mt-20 max-w-2xl rounded-3xl border-2 bg-white p-10 shadow transition-transform hover:scale-[1.01]">
          <ContactForm />
        </div>
      </Wrapper>
    </section>
  );
}
