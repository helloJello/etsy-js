class Receipt

  constructor: (@shopId, @client) ->

  # Retrieves a set of Receipt objects associated to a Shop
  # '/shops/:shop_id/receipts' GET
  findAllShopReceipts: (cb) ->
    @client.get "/shops/#{@shopId}/receipts", (err, status, body, headers) ->
      return cb(err) if err
      if status isnt 200
        cb(new Error('Get shop receipts error'))
      else
        cb null, body, headers

  # Retrieves a set of Receipt objects associated to a Shop based on the status
  # '/shops/:shop_id/receipts/:status' GET
  # orderStatus = open | unshipped | unpaid | completed | processing | all
  findAllShopReceiptsByStatus: (orderStatus, cb) ->
    @client.get "/shops/#{@shopId}/receipts/#{orderStatus}", (err, status, body, headers) ->
      return cb(err) if err
      if status isnt 200
        cb(new Error('Get shop receipts by status error'))
      else
        cb null, body, headers

module.exports = Receipt