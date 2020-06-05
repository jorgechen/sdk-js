"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DELIMITER = '-';
const REGEX_SUFFIX_INDEX = /\b\d+$/;
exports.generateIndexedName = ({ existing = [], name }) => {
    if (!existing.includes(name)) {
        return name;
    }
    let max = 0;
    existing.forEach(str => {
        const matches = str.match(REGEX_SUFFIX_INDEX);
        if (matches) {
            const number = parseInt(matches[0]);
            if (number > max) {
                max = number;
            }
        }
    });
    return `${name ? name + DELIMITER : ''}${max + 1}`;
};
