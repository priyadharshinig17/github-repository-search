import React from 'react';
import { shallow, mount, render } from 'enzyme';

import RepoList from './RepoList';
import RepoListHeader from './RepoListHeader';
import RepoRow from './RepoRow';

describe('RepoList', () => {
    var repos = [
        {
            "name": "some-repository",
            "html_url": "https://some-url.com",
            "description": "Some description goes here.",
            "pushed_at": "2016-12-16T19:48:55Z"
        },
        {
            "name": "some-other-repository",
            "html_url": "https://some-other-url.com",
            "description": "Some other description goes here.",
            "pushed_at": "2015-12-16T19:48:55Z"
        },
    ];

    it('renders without crashing when list is empty', () => {
        shallow(<RepoList />);
    });

    it('renders the right number of rows', () => {
        const wrapper = shallow(<RepoList repos={repos} />);
        const rows = wrapper.find(RepoRow);

        expect(rows.length).toBe(2);
    });

    it('renders the rows properly', () => {
        const wrapper = shallow(<RepoList repos={repos} />);

        expect(wrapper.find(RepoRow).first()).toHaveProp('repo', repos[0]);
        expect(wrapper.find(RepoRow).last()).toHaveProp('repo', repos[1]);
    });

    it('contains the list header', () => {
        const wrapper = shallow(<RepoList repos={repos} top={42} />);

        expect(wrapper).toContainReact(<RepoListHeader repos={repos} top={42} />);
    });

});
