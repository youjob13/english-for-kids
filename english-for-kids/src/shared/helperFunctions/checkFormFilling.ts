const checkFormFilling = (formData: FormData): boolean => {
  const formFields = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const [, inputValue] of formData.entries()) {
    // TODO
    if (typeof inputValue === 'string') {
      formFields.push(!!inputValue);
    } else {
      formFields.push(!!inputValue.name);
    }
  }

  return formFields.every((isFillingInput) => isFillingInput);
};

export default checkFormFilling;
