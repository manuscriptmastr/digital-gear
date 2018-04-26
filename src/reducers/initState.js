const initState = {
  items: [],
  products: [
    {
      id: 1,
      price: 12.99,
      title: 'DC T-shirt',
      body: 'Get this shirt and make all your friends jealous!'
    },
    {
      id: 2,
      price: 24.99,
      title: 'DC Fanny Pack',
      body: 'Cuz FANNY PACKS ARE BACK!!!'
    },
    {
      id: 3,
      price: 59.99,
      title: 'Chris Aquino Chia Pet',
      body: "We love our instructors, and we know you do, too. Pour ethically-sourced coffee on Chris' head and watch his mohawk grow!"
    }
  ],
  categories: [
    {
      id: 1,
      title: 'Crafts',
      slug: 'crafts'
    },
    {
      id: 2,
      title: 'Swag',
      slug: 'swag'
    },
    {
      id: 3,
      title: 'Stationary',
      slug: 'stationary'
    }
  ],
  users: [],
  currentUser: {
    id: 1,
    username: 'nybblr',
    firstName: 'Jonathan',
    lastName: 'Martin',
    profileImg: 'https://scontent-mia3-1.cdninstagram.com/vp/cc6cdcab79ccda2b6886293f3e24bf87/5B79B26A/t51.2885-19/s320x320/27576378_182862049151427_6510111844441522176_n.jpg'
  },
  search: {
    filters: {},
    sort: 'title'
  }
}

export default initState;