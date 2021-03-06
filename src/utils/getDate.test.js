import React from 'react'
import {getDate} from './getDate';

describe('getDate function', () => {
	it('timestamp are null', () => {
		const result = getDate(null);
		expect(result).toBeUndefined();
    });
    
    it('timestamp is invalid - object', () => {
		const result = getDate({});
		expect(result).toBeUndefined();
    });
    
    it('timestamp is invalid - string', () => {
        const result = getDate({});
		expect(result).toBeUndefined();
    });
    

	it('valid date', () => {
		const result = getDate(1584627450000);

        expect(result).toBe("19 марта, чт, 2020 год");
	});
});