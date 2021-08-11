const checkFormFilling = (formData: FormData): boolean => {
  const formFields = [];

  for (const inputValue of formData.values()) {
    if (typeof inputValue === 'string') {
      formFields.push(!!inputValue);
    } else {
      formFields.push(!!inputValue.name);
    }
  }

  return formFields.every((isFillingInput) => isFillingInput);
};

export default checkFormFilling;
