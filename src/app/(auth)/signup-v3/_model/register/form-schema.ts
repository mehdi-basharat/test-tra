import { z } from 'zod';

import checkPasswordComplexity from '../../_utils/check-password-complexity';

export const signUpFormSchema = z
  .object({
    fullname: z.string().min(1, { message: 'Must be 1 or more characters long' }),
    email: z.string().email(),
    password: z
      .string()
      .min(8)
      .superRefine((password, checkPassComplexity) => {
        const missingRequirements = checkPasswordComplexity(password);
        if (missingRequirements.length > 0) {
          const requirements = missingRequirements.join(', ');
          checkPassComplexity.addIssue({
            code: 'custom',
            message: `Your password must have at least ${requirements}.`,
          });
        }
      }),
    confirm_password: z.string(),
    otp: z.string().min(6, {
      message: 'Your one-time password must be 6 characters.',
    }),
    hash: z.string(),
    age: z.string(),
    gender: z.string(),
  })
  .refine(data => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ['confirm_password'],
  });
