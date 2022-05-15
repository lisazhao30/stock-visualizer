import axios from 'axios';

describe('Search Function Testing', () => {
    test('API', async () => {
        const response = await axios.get('https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=5879623d3df37784d9669108e4669e11');
        expect(response.data.historical).toHaveLength(1260);
    })
})