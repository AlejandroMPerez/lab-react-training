import React from "react";

function Rating (prop) {

    let newRating = Math.ceil(prop.children)

    switch (newRating) {
        case 0:
            // eslint-disable-next-line no-unused-expressions
            '☆ ☆ ☆ ☆ ☆';
            break;
        case 1:
            // eslint-disable-next-line no-unused-expressions
            '★ ☆ ☆ ☆ ☆';
            break;
        case 2:
            // eslint-disable-next-line no-unused-expressions
            '★ ★ ☆ ☆ ☆';
            break;
        case 3:
            // eslint-disable-next-line no-unused-expressions
            '★ ★ ★ ☆ ☆';
            break;
        case 4:
            // eslint-disable-next-line no-unused-expressions
            '★ ★ ★ ★ ☆';
            break;
        default:
            // eslint-disable-next-line no-unused-expressions
            '★ ★ ★ ★ ★';
            break;
    }

    return <h1>{newRating}</h1>

}

export default Rating;