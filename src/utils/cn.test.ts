import {cn} from './cn'

describe('test cn function', () => {
    it('should merge multiple class names into a single string', () => {
        expect(cn('test', 'class', 'blue')).toBe('test class blue');
    });

    it('should ignore falsy values', () => {
        expect(cn('test', undefined, 'class', null, 'blue', false)).toBe('test class blue');
    });

    it('should return empty string when no valid class names provided', () => {
        expect(cn(undefined, null, false)).toBe('');
    });

    it('should handle empty strings', () => {
        expect(cn('test', '', 'blue')).toBe('test blue');
    });

    it('should handle single class name', () => {
        expect(cn('test')).toBe('test');
    });

    it('should handle no arguments', () => {
        expect(cn()).toBe('');
    });

    it('should preserve whitespace in class names', () => {
        expect(cn('test blue', 'blue')).toBe('test blue blue');
    });
})