import axios from "axios";

function ApiServices() {

    const url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&";
    const apiKey = "e61674a5f0d32b7262facc56e7cead47";

    const getImagesApi = async (keyword) => {
        const param = `api_key=${apiKey}&text=${keyword}&format=json&nojsoncallback=1&per_page=20`;
        try {
            const response = await axios.get(url+param);
            const imgObjArr = generateImgObj(response);
            return {
                isError: false, 
                data: imgObjArr,
                errorMsg: ""
            };
        } catch(e) {
            console.log(e);
            return {
                isError: true, 
                data:[], 
                errorMsg: "Something went wrong! Please try again."
            };
        }
    }

    function generateImgObj(response) {
        let imageArr = [];
        response['data']['photos']['photo'].forEach(obj => {
            let photoObj = {
                url: `https://live.staticflickr.com/${obj.server}/${obj.id}_${obj.secret}.jpg`,
                title: obj.title,
                id: obj.id
            } 
            imageArr.push(photoObj);
        });
        return imageArr;
    }

    return { getImagesApi }
}

export default ApiServices;