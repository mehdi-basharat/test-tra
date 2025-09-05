const checkPasswordComplexity = (password: string): string[] => {
  const missingRequirements: string[] = [];
  // if (!/[A-Z]/.test(password)) {
  //   missingRequirements.push('one uppercase letter');
  // }
  if (!/[a-z]/.test(password)) {
    missingRequirements.push('one lowercase letter');
  }
  if (!/\d/.test(password)) {
    missingRequirements.push('one number');
  }
  // if (!/[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
  //   missingRequirements.push('one special character');
  // }

  return missingRequirements;
};

export default checkPasswordComplexity;
