import React, {Component} from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PanelContent} from "../../components/PanelContent.js";
import { shallowToJson } from 'enzyme-to-json';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
// Fail tests on any warning
console.error = message => {
    throw new Error(message);
};

describe('PanelContent', () => {
    it('should render correctly', () => {
        const contact = {name: "mockName"};
        const output = shallow(
            <PanelContent title="Personal Information" contact={contact} />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});