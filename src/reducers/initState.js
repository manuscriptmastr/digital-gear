const initState = {
  items: [],
  products: [],
  categories: [],
  users: [],
  jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWU3MzRlMmZkZWY1ZjAwMTQ2ZmY3ZmUiLCJpZCI6IjVhZTczNGUyZmRlZjVmMDAxNDZmZjdmZSIsImlhdCI6MTUyNTEwMTc5NCwiZXhwIjoxNTI3NjkzNzk0fQ.sZE21cxdt_9YDvlSaDl2oqKv7qvmvKcf723yUwcMIsg",
  currentUser: {
    _id: "5ae734e2fdef5f00146ff7fe",
    email: "the.manuscriptmaster@gmail.com",
    username: 'manuscriptmaster',
    firstName: 'Joshua',
    lastName: 'Martin',
    profileImg: 'https://scontent-mia3-1.cdninstagram.com/vp/cc6cdcab79ccda2b6886293f3e24bf87/5B79B26A/t51.2885-19/s320x320/27576378_182862049151427_6510111844441522176_n.jpg'
  },
  search: {
    query: '',
    category: '',
    sort: ''
  }
}

export default initState;