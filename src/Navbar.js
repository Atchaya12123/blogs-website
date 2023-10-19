import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Atchaya Blog</h1>
            <div classname="links"></div>
               <Link to="/">Home</Link>

               <Link to="/create" style={{
                color: "white",
                backgroundColor: '#f1356d',
                borderRadius: '8px'
               }}>New Blog</Link>
                 

        </nav>

     );
}
 
export default Navbar ;