import { Link } from "react-router-dom";


function Error(){
    return ( 
        <div>
            <Link to={`/`}><h1>Error</h1></Link>
        </div>
     );
}

export default Error