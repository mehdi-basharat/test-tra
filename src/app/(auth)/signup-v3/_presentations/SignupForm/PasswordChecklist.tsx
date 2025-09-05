import { CheckCircle2, Circle, ThumbsUp } from 'lucide-react';

export const passwordRules = {
  minLength: (password: string) => password.length >= 8,
  number: (password: string) => /\d/.test(password),
  uppercase: (password: string) => /[A-Z]/.test(password),
  lowercase: (password: string) => /[a-z]/.test(password),
};

export const PasswordChecklist = ({ password }: { password: string }) => {
  const rules = [
    { label: 'Must have at least 8 characters', valid: passwordRules.minLength(password) },
    { label: 'Must have at least 1 number', valid: passwordRules.number(password) },
    { label: 'Must have at least 1 capital letter', valid: passwordRules.uppercase(password) },
    { label: 'Must have at least 1 small case letter', valid: passwordRules.lowercase(password) },
  ];

  const allValid = rules.every(rule => rule.valid);

  if (allValid) {
    return (
      <div className="mt-2 flex items-center gap-2">
        <ThumbsUp className="h-4 w-4 text-primary" />

        <span className="text-[14px] text-[#23C965]">Great! You entered strong password</span>
      </div>
    );
  }

  return (
    <ul className="mt-2 space-y-1 text-sm">
      {rules.map((rule, idx) => (
        <li key={`ke ${idx}`} className="flex items-center gap-2">
          {rule.valid ? (
            <CheckCircle2 className="h-4 w-4 text-white" fill="#23C965" />
          ) : (
            <Circle className="h-4 w-4 text-gray-400" />
          )}
          <span className={rule.valid ? 'text-[#23C965]' : 'text-[#667085]'}>{rule.label}</span>
        </li>
      ))}
    </ul>
  );
};
