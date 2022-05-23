import React, { useState, useEffect } from 'react'
import UserInfo from '../../components/UserInfo/UserInfo';
import { filmAttributes } from '../../constants/constants';
import './Profile.css'

const profileTabs = [
    {
        id: 0,
        text: 'Понравились'
    },
    {
        id: 1,
        text: 'Не Понравились'
    },
    {
        id: 2,
        text: 'Сериалы'
    },
    {
        id: 3,
        text: 'Комментарии'
    },
    {
        id: 4,
        text: 'Сейчас смотрю'
    },
]




const ProfileScreen = () => {

    const [user, setUser] = useState();
    const [currentTab, setCurrentTab] = useState(0);

    const currentTabStyle = (id) => {
        return {backgroundColor: id === currentTab ? '#02b875' : 'transparent', borderTopLeftRadius: 10, borderTopRightRadius: 10}
    }
    
    const onTabClick = (id) => {
        setCurrentTab(id)
    }

    const fetchData = () => {
        fetch('https://randomuser.me/api?results=1')
            .then((res) => res.json())
            .then(data => {
                
                setUser(data.results[0])
                console.log('data', data.results[0])
            })
   
    }

    useEffect(() => {
       fetchData();
       }, []); 

    return (
        <div>
            <div className='Profile-main'>
                <UserInfo user={user}/> 
            </div>
            <div className='profile-content'>
            {
                profileTabs.map((tab) => {
                    return <div style={currentTabStyle(tab.id)} className="tab-style" onClick={() => onTabClick(tab.id)}><span>{tab.text}</span></div>;
                })
            } 
            </div>
            <div className='Profile-last'>
            {
                filmAttributes.map((film) => {
                    const {Title, Country, Images} = film 
                    return (
                        <div className='film-item'>
                            <div> <img src={Images[0]}/></div>
                            <div>title: {Title} {Country}
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ProfileScreen;

// (tab) => {}
// function func() {

// }

// const func = () => {

// }