import axios from "axios";

/**URL of the NASA Astronomy Picture of the Day API */
const URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = process.env.NASA_API_KEY;

/**Gets image data using NASA APOD API from 2021-09-21 to 2021-09-14 */
export const getImageData = async () => {
  //Get data and return
  const { data } = await axios.get(
    `${URL}?api_key=${API_KEY}&start_date=2021-09-14&end_date=2021-09-21`
  );
  return data;
};
