'use client';
import { Eye, EyeOff } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import useDisclosure from '@/hooks/use-disclosure';

import HaveAccount from '../../../_components/HaveAccount';
import { useSignupContext } from '../../_context';

import useFormEvent from './usecase/use-form-event';

const SignupForm = () => {
  const { isOpen: isPasswordOpen, toggle: togglePassword } = useDisclosure();
  const { isOpen: isConfirmOpen, toggle: toggleConfirm } = useDisclosure();

  const { form } = useSignupContext();
  const { onSubmit } = useFormEvent();

  return (
    <div className="flex flex-1 flex-col items-center gap-3">
      <Card className="w-[23rem] max-w-xs border-none shadow-none sm:max-w-lg">
        <CardHeader>
          <CardTitle className="text-center text-primary">Email Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="flex flex-col" onSubmit={onSubmit}>
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Password</FormLabel>
                      {isPasswordOpen ? (
                        <EyeOff className="cursor-pointer" onClick={togglePassword} />
                      ) : (
                        <Eye className="cursor-pointer" onClick={togglePassword} />
                      )}
                    </div>
                    <FormControl>
                      <Input placeholder="Enter password" type={isPasswordOpen ? 'text' : 'password'} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Confirm Password</FormLabel>
                      {isConfirmOpen ? (
                        <EyeOff className="cursor-pointer" onClick={toggleConfirm} />
                      ) : (
                        <Eye className="cursor-pointer" onClick={toggleConfirm} />
                      )}
                    </div>
                    <FormControl>
                      <Input placeholder="Confirm password" type={isConfirmOpen ? 'text' : 'password'} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="mt-2" disabled={!form.formState.isDirty && !form.formState.isValid} type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <HaveAccount />
    </div>
  );
};

export default SignupForm;
