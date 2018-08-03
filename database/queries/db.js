const _ = require('lodash');
const Artist = require('../seeds/artist');

const artists = _.times(40, () => Artist());

module.exports = artists;
