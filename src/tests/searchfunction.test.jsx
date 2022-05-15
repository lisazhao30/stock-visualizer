import SearchFunction from '../components/searchfunction';
import { render } from '@testing-library/react';

//unable to test because of chart.js
describe('Search Function Testing', () => {
    test('Button Test', () => {
        const { getByTestId } = render( <SearchFunction /> ) //to pass props in, do propName={true/false}
        //getByTestId gets test id from data-testid
        //queryByTestId instead of getByTestId because query includes null
        const div = getByTestId("testButtonLength")
        expect(div).toHaveLength(1);
    })
})
