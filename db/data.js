'use strict';

const items = [
  {
    title: 'Bless This Home Wreath',
    price: 50.00,
    img: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/48420174_966823120372003_6861683268698243072_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=beeae140dc07685009d3df0c0dc6d69a&oe=5C95B68F',
    theme: 'Home-Goods',
    productType: 'Wreath',
    season: 'All',
    quantity: 1
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    title: 'Christmas Wreath with Owls',
    price: 75.00,
    img: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/48378930_959185737802408_5790299295844401152_n.jpg?_nc_cat=106&_nc_ht=scontent-iad3-1.xx&oh=78dd860232a7581d14d83a9fd9c84204&oe=5CC2B59C',
    theme: 'Christmas',
    productType: 'Wreath',
    season: 'Winter',
    quantity: 1
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    title: 'Red Valentine\'s Heart Shaped Wreath',
    price: 50.00,
    img: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/48397104_959156221138693_7433275980514328576_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=1e03f1aa19db0c27f5a78168b9628dfe&oe=5CD09D5F',
    theme: 'Valentines',
    productType: 'Wreath',
    season: 'Winter',
    quantity: 1
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    title: 'Angel Wreath',
    price: 50.00,
    img: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/48421922_959156234472025_2582049882118291456_n.jpg?_nc_cat=102&_nc_ht=scontent-iad3-1.xx&oh=8700a15d7dbcf772e1cbd2eb43f6183d&oe=5CCEC70C',
    theme: 'Home-Goods',
    productType: 'Wreath',
    season: 'All',
    quantity: 1
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    title: 'Eagles #1 Fan Wreath',
    price: 45.00,
    img: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/49645476_976264082761240_6236605861721014272_n.jpg?_nc_cat=107&_nc_ht=scontent-iad3-1.xx&oh=f1376b424e65667eb5fd84556f6a934a&oe=5C8C7E48',
    theme: 'Sports',
    productType: 'Wreath',
    season: 'Fall',
    quantity: 1
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    title: 'Santa Clause Wreath',
    price: 60.00,
    img: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/47579649_950817541972561_1867278512730144768_n.jpg?_nc_cat=101&_nc_ht=scontent-iad3-1.xx&oh=0219a7021028ff6f78b9baefb64aa52c&oe=5CC80444',
    theme: 'Christmas',
    productType: 'Wreath',
    season: 'Winter',
    quantity: 1
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    title: 'Tis the Season Wreath',
    price: 45.00,
    img: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/47235525_950817515305897_6733271365819826176_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=baed08508be5eb5baf88e2e40e0ef76b&oe=5CCC5F84',
    theme: 'Christmas',
    productType: 'Wreath',
    season: 'Winter',
    quantity: 1
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    title: 'USA Fan Blade',
    price: 30.00,
    img: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/50022176_973430923044556_1473470354314756096_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=5873729035de6498a611d19e158cbe85&oe=5CC4B035',
    theme: 'America',
    productType: 'Wall-Decoration',
    season: 'Summer',
    quantity: 3
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    title: 'God Bless America Wreath',
    price: 55.00,
    img: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/49351464_973430776377904_5558808306711003136_n.jpg?_nc_cat=102&_nc_ht=scontent-iad3-1.xx&oh=4cf878a37736c8bf9534016218b4935d&oe=5CC0C991',
    theme: 'America',
    productType: 'Wreath',
    season: 'Summer',
    quantity: 1
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  }

];

module.exports = { items };