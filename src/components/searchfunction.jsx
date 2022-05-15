import { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ProfileModal from './profilemodal';
import Graph from './graph';
import '../css/searchfunction.scss';

const SearchFunction = () => {
    const APIKey = '5879623d3df37784d9669108e4669e11';
    const url = 'https://financialmodelingprep.com/api/v3';
    const [searchedItem, setSearchedItem] = useState("");
    const [showButton, setShowButton] = useState(false)
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(true);
    }

    const props = { APIKey, url, showModal, setShowModal, searchedItem}

    return (
        <div className="Wrapper">
            <div className="SearchWrapper">
                <TextField placeholder="Enter stock symbol name" onChange={(e) => setSearchedItem(e.target.value)} sx={{
                    'width': '30vw'
                }}/>
                <SearchIcon onClick={() => setShowButton(true)} sx={{
                    '&:hover': {
                        'cursor': 'pointer',
                        'transform': 'scale(1.1)'
                    }
                }} />
            </div>
            <div className="button">
                <Button variant="contained" disabled={showButton === false} data-testid="testButtonLength" onClick={() => toggleModal()}
                sx={{
                    backgroundColor: "#4bc0c0"
                }}>
                    Show Profile
                </Button>
            </div>
            {/* to only show the profile modal and pass props in after searching, do {boolean is true && modal} */}
                {showButton && <ProfileModal data-testid="testShow" {...props} />}
                {showButton && <Graph {...props} />}
        </div>
    )
}

export default SearchFunction