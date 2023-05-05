import { CircularProgress } from "react-loading-indicators";

/**
 * Spinner Component
 * @returns 
 */
const Spinner = () => {
    
    return (
        <div className="text-center">
            <CircularProgress 
                variant="dotted" 
                color="#316acc" 
                size="large" 
                text="" 
                textColor="" 
            />
        </div>
    );
};

export default Spinner;