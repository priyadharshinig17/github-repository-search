import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from '../SearchBar';
import { Button } from 'react-bootstrap';

describe('SearchBar', () => {

    it('renders without crashing', () => {
        shallow(<SearchBar />);
    });

    it('contains a GO button', () => {
        const wrapper = shallow(<SearchBar />);
        
        expect(wrapper).toContainReact(<Button type="submit" bsStyle="primary">GO</Button>);
    })
});
