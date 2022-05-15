import ProfileModal from '../components/profilemodal';
import axios from 'axios';
import request from "supertest";
import { render } from '@testing-library/react';

describe('Search Function Testing', () => {
    test('Show Profile Modal', () => {
        const { queryByTestId } = render( <ProfileModal /> ) //to pass props in, do propName={true/false}
        //getByTestId gets test id from data-testid
        //queryByTestId instead of getByTestId because query includes null
        const div = queryByTestId("testShowModal")
        expect(div).toBeTruthy();
    })
})

describe('Search Function Testing', () => {
    test('API', async () => {
        const response = await axios.get('https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=5879623d3df37784d9669108e4669e11');
        expect(response["data"]).toHaveLength(1)
    })
})