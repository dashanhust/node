// index.js

const request = require('request');
const path = require('path');
const config = require('./config');
const analyze = require('./analyze');
const fs = require('fs');


const imgExtReg = new RegExp(/^[a-zA-Z]+$/);
const otherUrlReg = new RegExp('^//(.*)');

function start() {
    request(config.url, function (err, res, body) {
        console.log('start');
        if (!err && res) {
            console.log('start downloading img ...');
            analyze.findImg(body, downLoad);
        } else {
            console.error('error: ', err);
            console.error('res: ', res);
        }
    }); 
}

function downLoad(imgUrl, i) {
    let ext = imgUrl.split('.').pop();
    if (!imgExtReg.test(ext)) {
        ext = 'jpg';
    }
    if (imgUrl.match(otherUrlReg)) {
        imgUrl = 'https:' + imgUrl;
    }
    console.log('download img url: ', imgUrl);
    request(imgUrl).
        pipe(fs.createWriteStream(path.join(config.imgDir, i + '.' + ext), 
            {
                'encoding': 'utf8'
            })
        );
    console.log('complete img: ', i);
}

start();
