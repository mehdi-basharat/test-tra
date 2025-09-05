module.exports = {
  '*.{js,jsx,ts,tsx}': ['prettier --config .prettierrc --write', 'eslint --fix'],
  '*.json': ['sort-package-json', 'prettier --config .prettierrc --write'],
};
