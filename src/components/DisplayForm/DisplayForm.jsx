

const DisplayForm = (prop) =>
{
    var userDetails = prop.userdetailsG;
    
    return(
        <div>
            <h1>Display Form</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Contact Number</th>
                        <th>City</th>
                        <th>Gender</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{userDetails.userfirstname}</td>
                        <td>{userDetails.userlastname}</td>
                        <td>{userDetails.usercontactNumber}</td>
                        <td>{userDetails.userCity}</td>
                        <td>{userDetails.userGender}</td>
                        <td>{userDetails.userdob}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
}

export default DisplayForm;