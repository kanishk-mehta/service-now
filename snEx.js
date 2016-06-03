'use strict';
const SnowQuery         = require('./service-now');
const fs                = require('fs');

var Snow = new SnowQuery('https://demo003.service-now.com/');

Snow.setAuth('itil', 'itil');

Snow.getRecords({table: 'incident', query: {number: 'INC0010274'} }, (err, data) => {
    console.log(data)
});