export let fromCategory = (id, arr) => {
  
  let category = (a) => {
    let filteredArr = a.filter(el =>
      id && el.category ? el.category._id === id : true
    );
    return filteredArr;
  }
  return arr ? category(arr) : (a) => category(a);
}

export let queryBy = (str, arr) => {
  let cleanedStr = str.toLowerCase();

  let query = (a) => {
    let filteredArr = a.filter(el => {
      let values = Object.values(el);
      let stringValues = values.filter(v => typeof(v) === 'string');
      let cleanedValues = stringValues.map(v => v.toLowerCase());
      return cleanedValues.some(v => v.includes(cleanedStr));
    });
    return filteredArr;
  }
  return arr ? query(arr) : (a) => query(a);
}

export let sortBy = (key, arr) => {

  let sort = (a) => {
    let copy = [ ...a ];
    copy.sort((y, z) => {
      let order = 0;
      if (y[key] < z[key]) {
        order = -1;
      }
      if (y[key] > z[key]) {
        order = 1;
      }
      return order;
    });
    return copy;
  }
  return arr ? sort(arr) : (a) => sort(a);
}

export let pipe = (...operations) => (arr) => operations.reduce((a, op) => op(a), arr);