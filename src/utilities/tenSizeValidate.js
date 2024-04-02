export const tenSizeValidate = (input) => {
    return input.replace(/\D/g, '').slice(0, 10);
  };