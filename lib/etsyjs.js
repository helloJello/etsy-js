(function() {
  var etsyjs;

  etsyjs = module.exports = {
    client: require('./etsyjs/client'),
    shop: require('./etsyjs/shop'),
    category: require('./etsyjs/category'),
    user: require('./etsyjs/user'),
    me: require('./etsyjs/me'),
    receipt: require('./etsyjs/receipt'),
    search: require('./etsyjs/search'),
    listing: require('./etsyjs/listing'),
    address: require('./etsyjs/address')
  };

}).call(this);
