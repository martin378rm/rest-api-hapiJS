const routes = [
  {
    method: "GET",
    path: "/user",
    handler: (request, h) => {
      const data = {
        payload: {
          nama: "Nanang",
          usia: 40,
          alamat: "Jonggol",
        },
      }
      return data
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      const about = {
        payload: {
          about: "lorem ipsum dolor sit amet",
        },
      }
      return about
    },
  },
]

module.exports = routes
