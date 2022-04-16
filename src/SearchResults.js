import React, { useContext } from "react";
import ApiResponseContext from "./ApiResponseContext";
import './SearchResults.css';

function SearchResults() {

    const apiResponse = useContext(ApiResponseContext);
    
    const imageList = apiResponse.apiJsonData.map((imgObj, key) => {
        return(
            <div key={key} className="img-card">
                <img src={imgObj.url} alt={imgObj.title}/>
                <div>{imgObj.title}</div>
            </div>
        );
    });

    function getCurrentView() {
        if(apiResponse.apiJsonData.length !== 0 && !apiResponse.isLoading) {
            return(
                <div id="search-results">
                    {imageList}
                </div>
            );
        }
        else if(apiResponse.apiJsonData.length === 0 && !apiResponse.isLoading) {
            // return <p id="no-results">No images are found.</p>;
            return <></>;
        }
        else if(apiResponse.isLoading) {
            return <p id="no-results">Images are loading... Please wait.</p>;
        }
    }

    return <>{getCurrentView()}</>;
}

export default SearchResults;