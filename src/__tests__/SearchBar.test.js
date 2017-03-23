import React from 'react';
import { shallow, mount } from 'enzyme';

import SearchBar from '../SearchBar';
import { Button, ControlLabel, FormControl } from 'react-bootstrap';

describe('SearchBar', () => {

    it('renders without crashing', () => {
        shallow(<SearchBar />);
    });

    it('contains a GO button', () => {
        const wrapper = shallow(<SearchBar />);

        expect(wrapper).toContainReact(<Button type="submit" bsStyle="primary">GO</Button>);
    });

    it('contains a label for the input field', () => {
        const wrapper = mount(<SearchBar />);

        expect(wrapper.find(ControlLabel)).toHaveText('GitHub Username');
    });

    it('contains an input field to search for username', () => {
        const wrapper = shallow(<SearchBar searchText={'someone'} />);
        const formControl = wrapper.find(FormControl);

        expect(formControl).toHaveProp('placeholder', 'Enter username here');
        expect(formControl).toHaveProp('type', 'text');
        expect(formControl).toHaveProp('value', 'someone');
    });

});
