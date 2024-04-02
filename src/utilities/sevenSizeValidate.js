export const sevenSizeValidate = (input) => {
    return input.replace(/\D/g, '').slice(0, 7);
  };