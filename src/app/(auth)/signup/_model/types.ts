import type { z } from 'zod';

import type { signUpFormSchema } from './register';

export type SignupSchemaType = z.infer<typeof signUpFormSchema>;
export type SignupDataType = SignupSchemaType;
