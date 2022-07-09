import React from 'react';
import './profileSetting.css'

const ProfileSetting = () => {
    return (
        <div className='profileSetting'>
            <form>
                <div className='row'>
                    <div className="col-md-6">
                        <div>
                            <label htmlFor="firstname">First Name: </label>
                            <input className='form-control' type="text" placeholder='First Name' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <label htmlFor="lasttname">Last Name: </label>
                            <input className='form-control' type="text" placeholder='Last Name' />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div>
                            <label htmlFor="about">About: </label>
                            <input className='form-control' type="text" placeholder='About' />
                        </div>
                    </div>
                    <hr />
                    <div className="col-md-12">
                        <div>
                            <label htmlFor="about">Facebook: </label>
                            <input className='form-control' type="text" placeholder='User name' />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div>
                            <label htmlFor="about">Google: </label>
                            <input className='form-control' type="text" placeholder='User name' />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div>
                            <label htmlFor="about">Twitter: </label>
                            <input className='form-control' type="text" placeholder='User name' />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div>
                            <label htmlFor="about">Instagram: </label>
                            <input className='form-control' type="text" placeholder='User name' />
                        </div>
                    </div>
                    <div className="col-md-12 mt-3" >
                        <div>
                            <label htmlFor="email">Favourite category: </label> 
                            <select name="country" id="">
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="United State">United State</option>
                            </select>
                        </div>
                    </div>
                    <hr />
                    <button className='btn btn-primary'> Save</button>
                </div>
            </form>
        </div>
    );
};

export default ProfileSetting;