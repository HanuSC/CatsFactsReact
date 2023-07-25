 const get = async (url) => {
  return await new Promise((resolve, reject) => {

    try {
      
      fetch(url)
        .then((res) =>  res.json())
        .then((res) => resolve(res))
        .catch((err) =>  reject(err))

    } catch (error) {
      reject(error)
    }
     
}) }


export default get