const get2 = async (url, json = false) => {
  return await new Promise((resolve, reject) => {
    try {
      fetch(url)
        .then((res) => {
          if (res.status === 200) {
            return res
          }
        })
        .then((res) => {
            json ? resolve(res.json()) : resolve(res)
        })
        .catch((error) => reject(error))
    } catch (error) {
      reject(error)
    }
  });
};

export default get2;
