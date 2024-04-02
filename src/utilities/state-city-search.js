import usstatecityzip from 'src/utilities/usstatecityzip'

const getCityStateByZip = (zip) => {
    const cities = {};
    const states = {};
  
    usstatecityzip.forEach(entry => {
      if ((entry.zips + '').includes(zip)) {
        cities[entry.city] = cities[entry.city] || [];
        cities[entry.city].push(entry.state_name);
  
        states[entry.state_name] = states[entry.state_name] || [];
        states[entry.state_name].push(entry.city);
      }
    });
  
    return { cities, states };
  };
  
  export { getCityStateByZip };