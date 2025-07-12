import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 chars'),
  email: z.string().email('Invalid email'),
  message: z.string().min(1, 'Message is required'),
});

export type ContactData = z.infer<typeof contactSchema>;
