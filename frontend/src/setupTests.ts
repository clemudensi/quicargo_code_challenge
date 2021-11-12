/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-localstorage-mock';

import '@testing-library/jest-dom';
import { configure as rtlConfigure } from '@testing-library/react'

configure({ adapter: new Adapter() });
rtlConfigure({ testIdAttribute: 'data-test' });

/*global fail*/
process.on('unhandledRejection', (err) => {
    fail(err);
});