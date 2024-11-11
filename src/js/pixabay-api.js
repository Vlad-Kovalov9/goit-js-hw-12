const BASE_URL = "https://pixabay.com/api/";
const API_KEY = `46950452-7815ceb93240c1d1876de68f7`;
import axios from "axios";
import iziToast from "izitoast";

export async function getData(inputValue, page = 1, per_page = 15) {
    try {
        const { data } = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: inputValue,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
                page,
                per_page,
            }
        });
        console.log(data);

        if (data.hits.length === 0) {
            return { hits: [] };
        }
        return data;
    } catch (error) {
        console.log(error);
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            backgroundColor: `red`
        });
        return { hits: [] };;
    }
}