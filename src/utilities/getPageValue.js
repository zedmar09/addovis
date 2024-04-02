// utils/paginationUtils.js
export const getPageValue = (url) => {
    const match = url?.match(/[?&]page=([^&]+)/);
  
    return match ? match[1] : null;
  };
  