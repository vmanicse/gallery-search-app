import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import './LoadingScreen.css';

function LoadingScreen() {

    function getPlaceholders() {
        return(
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                width: "85%",
                margin: "auto"
            }}>
                <div className="skeleton">
                    <Skeleton count={10} baseColor="#c0c9cf" height="10px" />
                </div>
                <div className="skeleton">
                    <Skeleton count={10} baseColor="#c0c9cf" height="10px" />
                </div>
                <div className="skeleton">
                    <Skeleton count={10} baseColor="#c0c9cf" height="10px" />
                </div>
            </div>
        );
    }

    return <>{getPlaceholders()}</>;
}

export default LoadingScreen;