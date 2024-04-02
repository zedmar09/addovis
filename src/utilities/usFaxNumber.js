export const isValidUSFaxNumber = (faxNumber) => {
    const faxNumberRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    
    return faxNumberRegex.test(faxNumber);
  };