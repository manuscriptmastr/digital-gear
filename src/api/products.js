export let fetchProducts = (token) =>
  fetch("https://etsetera.herokuapp.com/product", {
    headers: new Headers({
      Authorization: `Bearer ${token}`
    })
  }).then(d => d.json());