import { Outlet , Link  } from 'react-router-dom';


const Home = () =>{    
    return (
      <div>
        <Link to="/UserForm" >
            <button>Enter User Details</button>
        </Link>
        <Link to="/DisplayForm" >
            <button>Display User Details</button>
        </Link>
        <Link to="/fetchAPIs" >
            <button>Fetch APIs</button>
        </Link>
        <Outlet/>
      </div>
     
    )
}

export default Home;