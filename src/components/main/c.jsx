import About from "./about/c";
import Contact from "./contact/c";


function Main({db}) {
    return ( 
        <div>
            <About db={db}/>
            <Contact db={db}/>
        </div>
     );
}

export default Main;