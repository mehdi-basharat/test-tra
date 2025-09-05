import type { z } from 'zod';

import type { signinSchema } from './form-schema';

export type SignInSchemaType = z.infer<typeof signinSchema>;
