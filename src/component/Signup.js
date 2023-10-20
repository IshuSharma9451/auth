import React, {useState} from "react";
import axios from "axios";




const Signup = () => {
   const [user, setUser] = useState({
    name:"", email: "", password: "", cpassword: ""
   })


   const {name, email, password, cpassword} = user;

   function handleInput(e){
         setUser({...user, [e.target.name]: e.target.value})
   }

   function handleSubmit(e){
       e.preventDefault();
       // validations: 
       if( !name || !email || !password || !cpassword){
           alert("All fields are required");
        }
        else if(password !== cpassword){
            alert("Passwords do not match");
        }
        else{

           axios.post("https://instagram-express-app.vercel.app/api/auth/signup" , {name,email,password})
           .then( response => console.log(response.data))

           .catch( err=> console.log(err))

        }
    }







    return(
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                 <input type="text"  placeholder="Enter your name" name = "name"
                    value={user.name} onChange={handleInput}
                 />
                 <input type="text"  placeholder="Enter your email" name = "email"
                    value={user.email} onChange={handleInput} 
                 />
                 <input type="text"  placeholder="Enter your password" name = "password"
                    value={user.password} onChange={handleInput}
                 />
                 <input type="text"  placeholder="Enter your confirm password" name = "cpassword"
                    value={user.cpassword} onChange={handleInput}
                 />
                 <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Signup;