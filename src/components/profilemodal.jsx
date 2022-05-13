import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/profilemodal.scss';
import CloseIcon from '@mui/icons-material/Close';

const ProfileModal = ({...props}) => {
    //destructure props
    const { APIKey, url, showModal, setShowModal, searchedItem } = props;
    console.log(searchedItem);
    const [companyInfo, setCompanyInfo] = useState({});
    //pass togglemodal prop from App.js
    // const toggleModal = () => {
    //     AppProps.setShowModal(false);
    // }
    // console.log(url)
    
    const getStockInfo = async () => {
        try {
            const response = await axios.get(`${url}/profile/${searchedItem.toUpperCase()}?apikey=${APIKey}`);
            setCompanyInfo(response);
        }
        catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        getStockInfo();
    }, [])

    // console.log(companyInfo)

    return (( showModal ? (
        <div className="ModalWrapper">
            <div className="BackgroundWrapper">
                <button className="CloseButton" onClick={() => setShowModal(false)}>
                    <CloseIcon />
                </button>
                <div className="TitleWrapper">
                    <img src={"stockImage"} />
                    <div className="StockTitle">
                        <h2>{"stockTitle"}</h2>
                    </div>
                </div>
                <div className="StockDescription">
                    <h3>Current Stock Price: {"currentStockPrice"}</h3>
                    <p>{"stockDescription"}</p>
                </div>
            </div>
        </div>
    ) : null ))
}

export default ProfileModal