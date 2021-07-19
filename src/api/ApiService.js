import axios from "axios"
const KEY_API = "21381163-3778efd7fa0406bf0c983211f"

const fetchImgs = ({ searchQuery = "", page = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits)
}

export default fetchImgs
