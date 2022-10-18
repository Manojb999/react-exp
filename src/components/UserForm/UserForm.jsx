
import { useState} from "react";




function UserForm(prop){
   
    var userDetails = {}

    const [firstname , setfirstname] = useState('');
    const [lastname , setlastname] = useState('');
    const [contactNumber , setcontactNumber] = useState('');
    const [City , setCity] = useState('');
    const [Gender , setGender] = useState('');
    const [dob , setdob] = useState('');
    
    const handlefirstnameChange =(e)=>{
        setfirstname(e.target.value);
    }
    const handlelastnameChange =(e)=>{
        setlastname(e.target.value);
    }

    const handlecontactNumberChange =(e)=>{
        setcontactNumber(e.target.value);
    }
    const handleCityChange =(e)=>{
        setCity(e.target.value);
    }

    const handleGenderChange =(e)=>{
        setGender(e.target.value);
    }

    const handledobChange =(e)=>{
        setdob(e.target.value);
    }

    const handleSubmit=(e)=>{

        userDetails = {
            userfirstname : firstname,
            userlastname : lastname,
            usercontactNumber : contactNumber,
            userGender : Gender,
            userCity : City,
            userdob : dob,
        }

        try {
            console.log(userDetails)
        

        prop.userdetailsG(userDetails)
               
        } catch (error) {
            console.log(error);
        }        
        e.preventDefault();
    }
    return(
            <div>
                <h1>User Details</h1>
                <form onSubmit={(e) => {handleSubmit(e)}}>
                <label> First Name : 
                    <input             
                        type='text'
                        value={firstname}
                        onChange={(e) => {handlefirstnameChange(e)}}
                    />
                </label><br/>
                <label> Last Name : 
                    <input             
                        type='text'
                        value={lastname}
                        onChange={(e) => {handlelastnameChange(e)}}
                    />
                </label><br/>
                <label> Contact Number: 
                    <input             
                        type='number'
                        value={contactNumber}
                        onChange={(e) => {handlecontactNumberChange(e)}}
                    />
                </label><br/>
                <label> City : 
                    <select value={City} onChange={(e) => {handleCityChange(e)}}>
                        <option value="">---SELECT---</option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                    </select>
                </label><br/>
                <label> Gender :
                    <div onChange={(e) => {handleGenderChange(e)}}>
                        <input type="radio" value="Male" name="gender" /> Male
                        <input type="radio" value="Female" name="gender" /> Female
                        <input type="radio" value="Other" name="gender" /> Other
                    </div>
                </label><br/>

                <label>DOB:

                    <input 
                        type="date"
                        value={dob}
                        onChange={(e) => {handledobChange(e)}}
                    />
                    
                </label><br/>
                <input type="submit" value="Submit"/>
            </form> 
        </div>
    );

}

export default UserForm;