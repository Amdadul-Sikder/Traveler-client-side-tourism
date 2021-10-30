import React from 'react';
import "./UserProfile.css"

const UserProfile = () => {
    return (
        <div id="user-profile">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 gx-0">
                        <div className="dashboard">
                            <ul>
                                <li>My Orders</li>
                                <li>Manage All Orders</li>
                                <li>Add A New Service</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9"></div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;