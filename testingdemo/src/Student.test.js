import React from "react";
import Enzyme,{shallow} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Student from "./Student";
Enzyme.configure({adapter:new Adapter()})
describe('test suite for student',()=>{
    it('should render button',()=>{
   const wrapper=shallow(<Student/>)
  
    })
})