import { z } from 'zod';

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' }),
  email: z
    .string()
    .optional()
    .refine(val => val === '' || z.string().email().safeParse(val).success, {
      message: 'Invalid email address',
    }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' }),
});
