import React from 'react';
import './style.css';
const UserInfo = (props) => {
    const {user} = props;
    return <div className="user-section">
                {user && (
                    <div className="user-info">
                        <div className='user-avatar'> 
                        <img className='user-img' style={{height: 176, width: 176 }} src={user.picture.large} />
                    </div>
                    <div>
                        <p className='firstName'>{user.name.first}<span className='span'>    #12345</span></p>
                        <p className='last-name'><span className='span'>LastName:  </span>{user.name.last}</p>
                        <p className='phone'><span className='span'>Registered: </span>{user.phone}</p>
                        <p className='email'><span className='span'>E-mail: </span>{user.email}</p>
                    </div>
                    </div>
                )}
            </div>

}

export default UserInfo;