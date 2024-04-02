export const fiveSizeValidate = (input) => {
    return input.replace(/\D/g, '').slice(0, 5);
  };