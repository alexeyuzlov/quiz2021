import {checkAge, sum} from "./utils";

describe('Utils', () => {
    it('should correct sum', () => {
        expect(sum(1,2)).toBe(3);
    });

    it('should correct get age from date', () => {
        expect(checkAge(new Date('12/12/1990'))).toBe(30);
    })
})
