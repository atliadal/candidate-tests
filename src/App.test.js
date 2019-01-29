import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
import App from './App';

/*
*
* Missing tests
* -------------------------------------
* - 'should display an input'
* - 'should display a button'
* -------------------------------------
*
* Please add any other test that you think could be missing to adequately test the App
*
* */

describe('tests for the App.js', () => {
  
    it('should render an input box', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('input').exists()).toBe(true);
    });
  
    it('should render a button', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('button').exists()).toBe(true);
    });

    
    // it('should verify the presence of image on clicking the button', () => {
    //   const wrapper = shallow(<App />);
    //   wrapper.find('button').simulate('click');
    //   expect(wrapper.find('image').exists()).toBe(true);
    // });
    
  });
