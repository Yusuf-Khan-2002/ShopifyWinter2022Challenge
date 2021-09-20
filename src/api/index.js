import axios from "axios";

/**URL of the NASA Astronomy Picture of the Day API */
const URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = "MhqduYw74p2VK16Gi0iQGLCBowyt45LLBdbdejUD";

/**Gets image data using NASA APOD API from the last 7 days */
export const getImageData = async () => {
  //Set startDate to 7 days ago
  const startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  //Convert startDate to YYYY-MM-DD
  const startDateString = `${startDate.getFullYear()}-${
    startDate.getMonth() + 1
  }-${startDate.getDate()}`;

  //Get data and return
  const { data } = await axios.get(`${URL}?api_key=${API_KEY}&start_date=${startDateString}`);
  return data;
};
