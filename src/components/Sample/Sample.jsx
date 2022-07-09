import React from 'react';
import { AuthUser } from '../../Pages/Auth/AuthUser/AuthUser';

const Sample = () => {
    const {user} = AuthUser();
    console.log(user)
    return (
        <div className='pt-5 text-center'>
            <h3>This is User sample form</h3>
            <form>
                <div className='mb-3'>
                    <label htmlFor="name">Name</label>
                    <input type="text" value={user.user_name} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="email">Email: </label>
                    <input type="email" value={user?.email} />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default Sample;