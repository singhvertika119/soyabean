'use client';
import FormInput from '@/components/common/form-input';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { Spinner } from '../common/spinner';
import { ContactData, contactSchema } from '@/lib/validation';

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
        <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto min-w-sm space-y-8">
          <FormInput name="name" label="Your Name" type="text" placeholder="John Doe" isAsterisk />
          <FormInput
            name="email"
            label="Your Email"
            type="text"
            placeholder="john@doe.com"
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

          <div className="text-center text-sm">
            New to this platform?{'  '}
            <Link href="/signup" className="font-medium text-blue-600 underline underline-offset-4">
              Sign Up here.
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
