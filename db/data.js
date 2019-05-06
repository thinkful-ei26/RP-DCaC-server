'use strict';

const items = [
  {
    title: 'Bless This Home Wreath',
    price: 50.00,
    img: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/51258205_996738087380506_7015521970674466816_n.jpg?_nc_cat=109&_nc_ht=scontent-iad3-1.xx&oh=10842b41c86f870d9c27a4f5df27c7b2&oe=5D68C656',
    theme: 'Home-Goods',
    productType: 'Wreath',
    season: 'All',
    quantity: 1
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    title: 'Christmas Wreath with Owls',
    price: 75.00,
    img: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/20246239_598790460508606_6401912912829199644_n.jpg?_nc_cat=101&_nc_ht=scontent-iad3-1.xx&oh=8e2534d84960d062319d6caf00ae7d4c&oe=5D2ADD0B',
    theme: 'Christmas',
    productType: 'Wreath',
    season: 'Winter',
    quantity: 1
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    title: 'Red Valentine\'s Heart Shaped Wreath',
    price: 50.00,
    img: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/15965439_460560917664895_7763135984157432598_n.jpg?_nc_cat=110&_nc_ht=scontent-iad3-1.xx&oh=d296ae8fefd531b9c4d3315ea24e036e&oe=5D2B1EFA',
    theme: 'Valentines',
    productType: 'Wreath',
    season: 'Winter',
    quantity: 1
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    title: 'Angel Wreath',
    price: 50.00,
    img: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/15965483_460368421017478_3622915937295732809_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=ff2e5e551b681496b532fa9c261d726d&oe=5D64EFEE',
    theme: 'Home-Goods',
    productType: 'Wreath',
    season: 'All',
    quantity: 1
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    title: 'Eagles #1 Fan Wreath',
    price: 45.00,
    img: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/53701900_1017907525263562_3058039525323309056_n.jpg?_nc_cat=107&_nc_ht=scontent-iad3-1.xx&oh=b006edf013419635dced1a43801ee0ee&oe=5D639232',
    theme: 'Sports',
    productType: 'Wreath',
    season: 'Fall',
    quantity: 1
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    title: 'Santa Clause Wreath',
    price: 58.00,
    img: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/23316330_654496311604687_1595956147782003490_n.jpg?_nc_cat=104&_nc_ht=scontent-iad3-1.xx&oh=5e9cd4b310b6b4e09d3b980bde567b64&oe=5D62F5A7',
    theme: 'Christmas',
    productType: 'Wreath',
    season: 'Winter',
    quantity: 1
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    title: 'Tis the Season Wreath',
    price: 54.00,
    img: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/42984072_903546910032958_2466703321293914112_n.jpg?_nc_cat=102&_nc_ht=scontent-iad3-1.xx&oh=b0a2f0e0d02939cc380324f7e7f6d51d&oe=5D63DF95',
    theme: 'Christmas',
    productType: 'Wreath',
    season: 'Winter',
    quantity: 1
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    title: 'USA Fan Blade',
    price: 26.00,
    img: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/29512179_738910279829956_405853368427216896_n.jpg?_nc_cat=101&_nc_ht=scontent-iad3-1.xx&oh=1ee9b3ab4b2eecf9bb40343d5d1c2a70&oe=5D70A576',
    theme: 'America',
    productType: 'Wall-Decoration',
    season: 'Summer',
    quantity: 3
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    title: 'God Bless America Wreath',
    price: 55.00,
    img: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/35489513_797213743999609_5190927762054971392_n.jpg?_nc_cat=104&_nc_ht=scontent-iad3-1.xx&oh=9a3186ddf32d64dcb34a4ca4393a08d7&oe=5D5A75FA',
    theme: 'America',
    productType: 'Wreath',
    season: 'Summer',
    quantity: 1
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  }

];

module.exports = { items };