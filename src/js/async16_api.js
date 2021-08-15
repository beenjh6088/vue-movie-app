function fetchMovies(title) {
  // 대기(pending)
  // const OMDB_API_KEY = '7035c60c'
  const OMDB_API_KEY = '7035c60c123'
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`https://omdbapi.com?apikey=${OMDB_API_KEY}&s=${title}`)
      // 이행(fulfilled)
      resolve(res)
    } catch(error) {
      console.log(error.message)
      // 거부(rejected)
      reject("HEROPY!!!")
    }
  })
}

(async () => {
  try {
    const res = await fetchMovies('frozen')
    console.log(res)
  } catch(heropy) {
    console.log(heropy)
  }
})();

(() => {
  fetchMovies('jobs')
    .then(res => console.log(res))
    .catch((heropy) => { console.log(heropy)})
})();