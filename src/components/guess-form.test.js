import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Renders the guess text box', () => {
        const wrapper = shallow(<GuessForm />);
        expect(wrapper.hasClass('text'));
    });

    it('Renders the guess button', () => {
        const wrapper = shallow(<GuessForm />);
        expect(wrapper.hasClass('button'));
    });
});
