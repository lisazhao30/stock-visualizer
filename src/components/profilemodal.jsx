import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/profilemodal.scss';
import CloseIcon from '@mui/icons-material/Close';

const ProfileModal = ({...props}) => {
    //destructure props
    const { APIKey, url, showModal, setShowModal, searchedItem } = props;
    const [companyInfo, setCompanyInfo] = useState([]);
    
    const getStockInfo = async () => {
        try {
            const response = await axios.get(`${url}/profile/${searchedItem}?apikey=${APIKey}`);
            setCompanyInfo(response["data"][0]);
        }
        catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getStockInfo();
    }, [])

    return (( showModal ? (
        <div className="ModalWrapper" data-testid="testShowModal">
            <div className="BackgroundWrapper">
                <button className="CloseButton" onClick={() => setShowModal(false)}>
                    <CloseIcon />
                </button>
                <div className="TitleWrapper">
                    <img src={companyInfo.image} />
                    <div className="StockTitle">
                        <h2>{companyInfo.companyName}</h2>
                    </div>
                </div>
                <div className="StockDescription">
                    <h3>Current Stock Price: {companyInfo.price}</h3>
                    <p>{companyInfo.description}</p>
                </div>
            </div>
        </div>
    ) : null ))
}

export default ProfileModal