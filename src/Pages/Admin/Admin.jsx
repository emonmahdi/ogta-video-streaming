import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './admin.css'

const Admin = () => {
    return (
        <div className='admin'>
            <AdminSidebar />
            <div className="adminSideBarAndContent">
                <div className="contentContainerAdmin">
                    <div className="adminHome">
                        <h2 className='text-light p-3'>Admin Content with sidebar</h2>
                        <div className="dasboardChart">
                            <h4>Charts</h4>
                        </div>
                        <div className="dasboardChart">
                            <h4>Videos </h4>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Admin;