import axios from "axios";

function ApiServices() {

    const url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&";

    const getImagesApi = async (keyword) => {
        const param = `api_key=${process.env.REACT_APP_API_KEY}&text=${keyword}&format=json&nojsoncallback=1&per_page=20`;
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
        response['data']['photos']['photo'].map(obj => {
            let photoObj = {
                url: `https://live.staticflickr.com/${obj.server}/${obj.id}_${obj.secret}.jpg`,
                title: obj.title
            } 
            imageArr.push(photoObj);
        });
        return imageArr;
    }

    return { getImagesApi }
}

export default ApiServices;