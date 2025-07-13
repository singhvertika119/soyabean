'use client';
import FormInput from '@/components/common/form-input';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { Spinner } from '../common/spinner';
import { ContactData, contactSchema } from '@/lib/validation';
import { MailIcon } from 'lucide-react';

export default function ContactForm() {
  const form = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactData) => {
    console.log(data);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto space-y-8">
          <FormInput name="name" label="Your Name" type="text" placeholder="Hoover" isAsterisk />
          <FormInput
            name="email"
            label="Your Email"
            type="text"
            placeholder="hoover@gmail.com"
            isAsterisk
          />
          <FormInput
            name="message"
            label="Your Message"
            type="text"
            placeholder="Your message"
            isAsterisk
          />

          <Button
            type="submit"
            className="bg-kawaii-mint w-full rounded-xl py-5 font-semibold text-black shadow-sm transition-colors duration-300 hover:bg-pink-300"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <Spinner className="size-4 text-white" />
            ) : (
              'Send Message'
            )}
          </Button>

          <div className="flex flex-col items-center justify-center gap-0 text-center text-sm sm:flex-row sm:gap-2">
            <MailIcon className="text-kawaii-pink inline-block size-7 animate-bounce sm:size-5" />
            <div>
              Or send me an email at{' '}
              <Link
                href="mailto:singhvertika119@gmail.com"
                className="font-medium underline underline-offset-4"
              >
                singhvertika119@gmail.com
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
