import { useParams } from "react-router-dom";


const Details = () => {
    const {id} = useParams()
    return (
        <div className="text-center">
            <h1>this is details page</h1>
            <p>{id}</p>
        </div>
    );
};

export default Details;