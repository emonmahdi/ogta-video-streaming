import React from 'react';
import './passwordSetting.css'

const PasswordSetting = () => {
    return (
         <form className='passwordSetting'> 
            <div className="row"> 
                <div className="col-md-12">  
                    <div>
                        <label htmlFor="password1">Current Password</label>
                        <input className='form-control' type="password" />
                    </div> 
                    <div>
                        <label htmlFor="password2">New Password</label>
                        <input className='form-control' type="password" />
                    </div>
                    <div>
                        <label htmlFor="password3">Confirm Password</label>
                        <input className='form-control' type="password" />
                    </div>
                    <hr />
                    <button className='btn btn-primary'>Save</button>
                </div>
            </div>
         </form>
    );
};

export default PasswordSetting;