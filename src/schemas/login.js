import { z } from 'zod';

export const loginSchema = z.object({
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
