import axios from 'axios';
import { useEffect, useState } from 'react';
import '../APIs/API.css'
function APIs()
{

    var [data,setData] = useState([]);
    useEffect(() =>
    {
        fetchdata();
        // postData();
    },[]);


    const fetchdata = async () =>  {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setData(resp.data)
    }


    const postData = async () => {
        const resp = await axios.post('https://reqres.in/api/users',{
            "name": "morpheus",
            "job": "leader"
        })

        console.log(resp.data)
    }

    return (
        <div className="grid baap">
            {data.slice(0,12).map((post) => {
                const {id, title, body} = post;
                return(
                    <div className="card" key={id}>
                        <p>{title}</p>
                        <p>{body}</p>
                    </div>
                );
            })}
            <div>

                <button onClick={postData}>Post Data</button>

            </div>
        </div>
        
        
    );
}

export default APIs;