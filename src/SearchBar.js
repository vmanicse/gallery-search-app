import React, { useRef, useContext, useEffect } from "react";
import './SearchBar.css';
import ApiServices from "./ApiServices";
import ApiResponseContext from "./ApiResponseContext";

function SearchBar() {
    const searchRef = useRef();
    const apiResponse = useContext(ApiResponseContext);

    useEffect(() => {
        searchApi("landscape");
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    function search(e) {
        if(e.keyCode === 13) {
            if(searchRef.current.value !== "") {
                searchApi(searchRef.current.value);
            }
        }
    }

    const searchApi = async (keyword) => {
        searchRef.current.blur();
        apiResponse.setLoading(true);
        const res = await ApiServices().getImagesApi(keyword);
        apiResponse.getApiJsonData(res.data);
        apiResponse.setLoading(false);
    } 
    
    return(
        <>
            <div id="searchbar">
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                <input type="search" ref={searchRef} onKeyUp={(e) => search(e)} placeholder="Search images by keywords"/>
                <div id="search-info"><small>Press ENTER to search</small></div>
            </div>
        </>
    );
}

export default SearchBar;