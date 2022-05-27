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
            <div className='profile-main'>
                <UserInfo user={user}/> 
            </div>
            <div className='profile-content'>
                {
                    profileTabs.map((tab) => {
                        return <div style={currentTabStyle(tab.id)} className="tab-style" onClick={() => onTabClick(tab.id)}><span>{tab.text}</span></div>;
                    })
                } 
            </div>
            <div className='profile-last'>
                {currentTab === 0 && <div className='tab-each'>
                    {
                        filmAttributes.map((film) => {
                            const {Title, Images, Year, Director, Genre, imdbRating} = film 
                            return (
                                <div className='film-item'>
                                    <div> <img src={Images[0]}/></div>
                                    <div className='opisanie'>
                                        <div style={{fontWeight: 'bold', fontSize: 20}}>{Title}</div>
                                        <div style={{color: 'gray'}}>{Year}, {Director}</div>
                                        <div style={{color: '#7cffcb'}}>{Genre}</div>
                                        <div><img src={require("../../assets/images/imdb.png")} style={{height: 15, width: 15 }} />{imdbRating}</div>
                                    </div>
                                </div>
                            )
                        })
                    }</div>}




                {currentTab === 1 && <div className='tab-each'>
                    {
                        filmAttributes.map((film) => {
                            const {Title, Images, Year, Director, Genre, imdbRating} = film 
                            return (
                                <div className='film-item'>
                                    <div> <img src={Images[1]}/></div>
                                    <div className='opisanie'>
                                        <div style={{fontWeight: 'bold', fontSize: 20}}>{Title}</div>
                                        <div style={{color: 'gray'}}>{Year}, {Director}</div>
                                        <div style={{color: '#7cffcb'}}>{Genre}</div>
                                        <div><img src={require("../../assets/images/imdb.png")} style={{height: 15, width: 15 }} />{imdbRating}</div>
                                    </div>
                                </div>
                            )
                        })
                    }</div>}
                {currentTab === 2 && <div className='tab-each'>
                    {
                        filmAttributes.map((film) => {
                            const {Title, Images, Year, Director, Genre, imdbRating} = film 
                            return (
                                <div className='film-item'>
                                    <div> <img src={Images[2]}/></div>
                                    <div className='opisanie'>
                                        <div style={{fontWeight: 'bold', fontSize: 20}}>{Title}</div>
                                        <div style={{color: 'gray'}}>{Year}, {Director}</div>
                                        <div style={{color: '#7cffcb'}}>{Genre}</div>
                                        <div><img src={require("../../assets/images/imdb.png")} style={{height: 15, width: 15 }} />{imdbRating}</div>
                                    </div>
                                </div>
                            )
                        })
                    }</div>}
                {currentTab === 3 && <div className='tab-each'>
                    {
                        filmAttributes.map((film) => {
                            const {Title, Images, Year, Director, Genre, imdbRating} = film 
                            return (
                                <div className='film-item'>
                                    <div> <img src={Images[3]}/></div>
                                    <div className='opisanie'>
                                        <div style={{fontWeight: 'bold', fontSize: 20}}>{Title}</div>
                                        <div style={{color: 'gray'}}>{Year}, {Director}</div>
                                        <div style={{color: '#7cffcb'}}>{Genre}</div>
                                        <div><img src={require("../../assets/images/imdb.png")} style={{height: 15, width: 15}} />{imdbRating}</div>
                                    </div>
                                </div>
                            )
                        })
                    }</div>}
                {currentTab === 4 && <div className='tab-each'>
                    {
                        filmAttributes.map((film) => {
                            const {Title, Images, Year, Director, Genre, imdbRating} = film 
                            return (
                                <div className='film-item'>
                                    <div> <img src={Images[4]}/></div>
                                    <div className='opisanie'>
                                        <div style={{fontWeight: 'bold', fontSize: 20}}>{Title}</div>
                                        <div style={{color: 'gray'}}>{Year}, {Director}</div>
                                        <div style={{color: '#7cffcb'}}>{Genre}</div>
                                        <div><img src={require("../../assets/images/imdb.png")} style={{height: 15, width: 15 }} />{imdbRating}</div>
                                    </div>
                                </div>
                            )
                        })
                    }</div>}
            
            </div>
        </div>
    )
}   

export default ProfileScreen;
