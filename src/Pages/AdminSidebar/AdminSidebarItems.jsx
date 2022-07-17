import React from 'react';
import sidebarItems from '../../data/sidebarItems.json'
import AdminSidebar from './AdminSidebar';


const AdminSidebarItems = (item) => {
    return (
        <div className="sidebarItemsAdminbar">
            <h1>This is sidebar items </h1>
        {/* { sidebarItems.map((item, index) =>  <AdminSidebar key={index} item={item} /> ) } */}
      </div>
    );
};

export default AdminSidebarItems;