const axios = require("axios");

export async function getAllCoins() {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASEURL}/getCoins`
    );
    return data?.data;
  } catch (error) {
    console.error(error);
  }
}

export default { getAllCoins };