import './register.css'; 
import { useEffect, useState } from "react";
import   {Link, useNavigate} from  'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [user, setUser] = useState({user_name:'', email:'', password:'', rePassword:''});
    const {user_name, email, password, rePassword} = user;

    const navigate = useNavigate()

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        if(password === rePassword){
            axios.post('http://ogtabackend.edulector.com/api/create/', user)
            .then(res => console.log(res.data))
            navigate('/login')
        }

    }



    return ( 
        <div className='ogtaRegister'>
                <form className='registerForm' onSubmit={handleSubmit}>
                   <h2 className='mb-5 mt-3'>Sign Up! OGTA</h2>
                  
                   <div> 
                        <input type="email" id='email' placeholder='User Email' className='input' onChange={handleChange} name='email' required />
                    </div>
                    <div> 
                        <input type="text" id='username' placeholder='User Name' className='input' onChange={handleChange} name='user_name' required />
                    </div>
                   <div> 
                        <input type="password" id='password' placeholder='Password' className='input' onChange={handleChange} name='password' required />
                    </div>
                   <div> 
                        <input type="password" id='password' placeholder='Confirm Password' className='input' onChange={handleChange} name='rePassword' required />
                    </div>
                   {/* <div> 
                         <select name="gender" id="gender" onChange={handleChange}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                         </select>
                    </div> */}
                    <div>
                        <button type="submit"  className='regBtn'>Sign Up!</button> 
                    </div>
                    <div className='mt-3'> 
                        <span className='sortText'><input type="checkbox" className='checkBox' /> By creating your account, you agree to our Terms of use and Privacy Policy</span>
                    </div>
                    <hr />
                    <div className='text-center'>
                        <p>Already have an account <Link to='/login'>Login! </Link> </p>
                    </div>
                </form>
        </div>
          
    );
};

export default Register;