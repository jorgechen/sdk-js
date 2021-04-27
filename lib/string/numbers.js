"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumeric = (input) => {
    if (typeof input == 'number')
        return true;
    if (typeof input != 'string')
        return false;
    return !isNaN(input) &&
        !isNaN(parseFloat(input));
};
function stringifyPlacing(n) {
    if (typeof n !== 'number') {
        return n;
    }
    n = (n | 0);
    const lastDigit = n % 10;
    let suffix;
    switch (lastDigit) {
        case 1:
            suffix = 'st';
            break;
        case 2:
            suffix = 'nd';
            break;
        case 3:
            suffix = 'rd';
            break;
        default:
            suffix = 'th';
            break;
    }
    return n + suffix;
}
exports.stringifyPlacing = stringifyPlacing;
