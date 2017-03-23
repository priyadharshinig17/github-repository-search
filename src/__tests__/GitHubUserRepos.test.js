import React from 'react';
import { shallow } from 'enzyme';

import GitHubUserRepos from '../GitHubUserRepos';

it('renders without crashing', () => {
  shallow(<GitHubUserRepos />);
});
