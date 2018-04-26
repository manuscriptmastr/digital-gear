export let filterBy = (params, arr) => {

  let filter = (a) => {
    let paramEntries = Object.entries(params);
    let filteredArr = a.filter(el =>
      paramEntries.every(([k, v]) => el[k] === v)
    );
    return filteredArr;
  }
  return arr ? filter(arr) : (a) => filter(a);
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