export const restrictInputSpecial = (value) => {
    return value.replace(/[^0-9]/g, '');
  };