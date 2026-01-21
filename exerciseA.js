const fs = require('fs');

if (fs.existsSync('canada.txt')) {
    fs.unlinkSync('canada.txt');
    console.log('canada.txt deleted');
}

if (fs.existsSync('usa.txt')) {
    fs.unlinkSync('usa.txt');
    console.log('usa.txt deleted');
}
