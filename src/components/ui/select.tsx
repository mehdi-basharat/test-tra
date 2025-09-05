'use client';

import * as React from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils'; // if you have a classnames utility

export function Select({
  // placeholder = 'Select an option',
  options,
  value,
  onValueChange,
}: {
  placeholder?: string;
  options: { label: string; value: string }[];
  value?: string;
  onValueChange: (val: string) => void;
}) {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
      <SelectPrimitive.Trigger
        className={cn(
          'inline-flex w-full items-center justify-between rounded-xl border px-3 py-2 text-sm',
          'focus:outline-none focus:ring-2 focus:ring-primary',
          'bg-white dark:bg-neutral-900',
        )}
      >
        <SelectPrimitive.Value
        // placeholder={placeholder}
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Content
        className="z-50 rounded-xl border bg-white shadow-md dark:bg-neutral-900"
        position="popper"
        style={{ width: 'var(--radix-select-trigger-width)' }}
      >
        <SelectPrimitive.Viewport className="max-h-60 overflow-y-auto p-1">
          {options.map(opt => (
            <SelectPrimitive.Item
              key={opt.value}
              className={cn(
                'relative flex w-full cursor-pointer select-none items-center rounded-md px-3 py-2 text-sm outline-none',
                'focus:bg-gray-100 dark:focus:bg-neutral-800',
              )}
              value={opt.value}
            >
              <SelectPrimitive.ItemText>{opt.label}</SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator className="absolute right-2 flex items-center">
                <Check className="h-4 w-4 text-primary" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
          ))}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
}
