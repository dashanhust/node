// analyze.js

const cheerio = require('cheerio');

function findImg (dom, callback) {
    let $ = cheerio.load(dom);
    $('img').each(function (i, elem) {
        let imgSrc = $(this).attr('src');
        if (imgSrc) {
            callback(imgSrc, i);
        }
    });
}

module.exports.findImg = findImg;
