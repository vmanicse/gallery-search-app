import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

function LoadingScreen() {

    function getPlaceholders() {
        return(
            <div style={{display:"flex", justifyContent: "space-around", flexWrap:"wrap", width:"85%", margin:"auto"}}>
                <div style={{width:"33%", margin:"auto"}}>
                    <Skeleton count={10} baseColor="#c0c9cf" height="10px" />
                </div>
                <div style={{width:"33%", margin:"auto"}}>
                    <Skeleton count={10} baseColor="#c0c9cf" height="10px" />
                </div>
                <div style={{width:"33%", margin:"auto"}}>
                    <Skeleton count={10} baseColor="#c0c9cf" height="10px" />
                </div>
            </div>
        );
    }

    return <>{getPlaceholders()}</>;
}

export default LoadingScreen;