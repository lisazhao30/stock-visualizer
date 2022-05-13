import { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import ProfileModal from './profilemodal';
import Graph from './graph';
//import { styled } from '@mui/material/styles';
import '../css/searchfunction.scss';

const SearchFunction = () => {
    const APIKey = '5e0db82a6df4ba9be281b7eaef28032b';
    const url = 'https://financialmodelingprep.com/api/v3';
    const [entireSymbolList, setEntireSymbolList] = useState({});
    const [searchedItem, setSearchedItem] = useState("");
    const [showModal, setShowModal] = useState(false);
    let error = "";

    const toggleModal = () => {
        setShowModal(true);
    }

    const getSymbolList = async () => {
        try {
            const response = await axios.get(`${url}/profile/AAPL?apikey=${APIKey}`);
            setEntireSymbolList(response);
        }
        catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        getSymbolList();
    }, [])

    const props = { APIKey, url, showModal, setShowModal, searchedItem}

    return (
        <div className="Wrapper">
            <div className="SearchWrapper">
                <TextField onChange={(e) => setSearchedItem(e.target.value)} sx={{
                    'width': '30vw'
                }}/>
                <SearchIcon sx={{
                    '&:hover': {
                        'cursor': 'pointer',
                        'transform': 'scale(1.1)'
                    }
                }} />
            </div>
            <div className="button">
                <button onClick={() => toggleModal()}>
                    Show Profile
                </button>
            </div>
            <ProfileModal {...props} />
        </div>
    )
}

export default SearchFunction