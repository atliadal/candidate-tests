import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter : new Adapter()})

/*
*
* Tests, add the two listed test and minimum 3 more
* -------------------------------------
* - 'should display an input'
* - 'should display a button'
* - *
* - *
* - *
* -------------------------------------
*
* */

describe('App tests', () => {
    it('should display an input', () => {
        const component = shallow(<App />);
        expect(component.find('input')).toHaveLength(1)
    });

    it('should display a button', () => {
        const component = shallow(<App  />);
        expect(component.find('button')).toHaveLength(1)
    });

    it('is possible to focus the input box', () => {
        const component = shallow(<App />)
        let inputBox = component.find('input')
        expect(inputBox.simulate('focus')).toBeTruthy()
        
        /* 
        *  Or maybe if we wanted to type something, it should something like:
        *  let userText = "Is any god reading this?"
        *  inputBox.simulate('change', {target: {value: {text}} })
        *  expect(inputBox.text()).toEqual(userText)
        */
    });

    it('should display correct text on button', () => {
        const component = shallow(<App  />);
        let button = component.find('button')
        let buttonText = "Ask to the Gods of the Internet!"

        expect(button.text()).toEqual(buttonText)
    });    

    it('<h1> appears when button is clicked', () => {
        const component = shallow(<App  />);
        let button = component.find('button');

        button.simulate('click');
        component.update();

        let h1 = component.find('h1');

        expect(h1).toBeTruthy();
    });

    it('<img> appears when button is clicked', () => {
        const component = shallow(<App  />);
        let button = component.find('button');

        button.simulate('click');
        component.update();

        let img = component.find('img');

        expect(img).toBeTruthy(); 
    });

    it('verifies the correct content loads', () => {
        // Verify that a "Yes" OR "No" image will appear if the <h1> 
        // is "YES" OR "NO" respectively
        const component = shallow(<App  />);
        let button = component.find('button');

        button.simulate('click');
        component.update();

        let img = component.find('img > alt');
        let h1 = component.find('h1');
         
        expect(img.text).toEqual(h1.text);
    });
});