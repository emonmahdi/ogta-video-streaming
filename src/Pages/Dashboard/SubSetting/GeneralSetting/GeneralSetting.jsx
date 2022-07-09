import React from 'react';
import { AuthUser } from '../../../Auth/AuthUser/AuthUser';
import './generalSetting.css'


const GeneralSetting = () => {
    const {user} = AuthUser();
    return (
        <form className='generalSetting'>
           <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <label htmlFor="username">User Name: </label>
                        <input value={user.user_name} type="text" className='form-control'   />
                    </div>
                </div>
                <div className="col-md-6">
                     <div>
                        <label htmlFor="email">User Email: </label>
                        <input value={user.email} type="email" className='form-control'  />
                    </div>
                </div>
                <div className="col-md-6 mt-3" >
                     <div>
                        <label htmlFor="email">Gender: </label> 
                        <select name="gender" id="">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-6 mt-3" >
                     <div>
                        <label htmlFor="email">Country: </label> 
                        <select name="country" id="">
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="United State">United State</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-6 mt-3" >
                     <div>
                        <label htmlFor="email">Age: </label> 
                        <select name="Age" id="">
                            <option value="20">20</option>
                            <option value="25">25</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-6 mt-3">
                     <div>
                        <label htmlFor="email">Donation Email: </label>
                        <input type="email" className='form-control' placeholder='Email' />
                    </div>
                </div>
                <hr />
                <button className='btn btn-primary'> Save</button>
            </div>
            </div> 
        </form>
    );
};

export default GeneralSetting;