export let fetchCategories = (token) =>
  fetch("https://etsetera.herokuapp.com/category", {
    headers: new Headers({
      Authorization: `Bearer ${token}`
    })
  }).then(d => d.json());