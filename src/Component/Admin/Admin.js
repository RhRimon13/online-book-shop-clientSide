import React from 'react';
import AdminHeader from '../Header/AdminHeader';
import maintenance from '../image/icons/Maintenance Illustrations.png'

const Admin = () => {
    const photoStyle = {
        height: '625px',
        width: '100%'
    }
    return (
        <div>
            <AdminHeader />
            <h1 className="text-center">Welcome to Our Admin Page!</h1>
            <img style={photoStyle} src={maintenance} alt="" />
        </div>
    );
};

export default Admin;