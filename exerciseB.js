const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const csvPath = path.join(__dirname, 'input_countries.csv');
const outputPath = path.join(__dirname, 'canada.txt');

fs.writeFileSync(outputPath, 'country,year,population\n');

fs.createReadStream(csvPath)
    .pipe(csv())
    .on('data', (row) => {
        if (row.country.trim().toLowerCase() === 'canada') {
            fs.appendFileSync(
                outputPath,
                `${row.country},${row.year},${row.population}\n`
            );
        }
    })
    .on('end', () => {
        console.log('canada.txt created');
    })
    .on('error', (err) => {
        console.error(err);
    });
