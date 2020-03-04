(function() {
    var Receipt;
  
    Receipt = (function() {
      function Receipt(shopId, client) {
        this.shopId = shopId;
        this.client = client;
      }
  
      Receipt.prototype.findAllShopReceipts = function(cb) {
        return this.client.get("/shops/" + this.shopId + "/receipts", function(err, status, body, headers) {
          if (err) {
            return cb(err);
          }
          if (status !== 200) {
            return cb(new Error('Get shop receipts error'));
          } else {
            return cb(null, body, headers);
          }
        });
      };
  
      Receipt.prototype.findAllShopReceiptsByStatus = function(orderStatus, cb) {
        return this.client.get("/shops/" + this.shopId + "/receipts/" + orderStatus, function(err, status, body, headers) {
          if (err) {
            return cb(err);
          }
          if (status !== 200) {
            return cb(new Error('Get shop receipts by status error'));
          } else {
            return cb(null, body, headers);
          }
        });
      };
  
      return Receipt;
  
    })();
  
    module.exports = Receipt;
  
  }).call(this);