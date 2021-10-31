const products = [
  {
    product_name: 'burnt almond',
    category_id: 1,
    product_inventory: 50,
    product_price: 20.25,
    product_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image_url: 'https://houseofnasheats.com/wp-content/uploads/2018/10/Burnt-Almond-Cake-3.jpg'
  },
  {
    product_name: 'berry boston',
    category_id: 1,
    product_inventory: 50,
    product_price: 19.75,
    product_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo donec enim. Est ultricies integer quis auctor elit sed vulputate mi. Condimentum id venenatis a condimentum vitae. Magna eget est lorem ipsum.',
    image_url: 'https://images.squarespace-cdn.com/content/v1/57f7c21be3df28e37ffbbc26/1593006171961-F4P8FZIH2KJI6IUL2LSM/BerryCake-8952_WEB.jpg?format=1000w'
  },
  {
    product_name: 'checkerboard',
    category_id: 1,
    product_inventory: 50,
    product_price: 15.95,
    product_description: ' Euismod in pellentesque massa placerat duis ultricies. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. In nibh mauris cursus mattis. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Et pharetra pharetra massa massa ultricies mi quis. Sed viverra ipsum nunc aliquet bibendum enim. Ut eu sem integer vitae justo eget. ',
    image_url: 'https://kitchencookbook.net/wp-content/uploads/2018/11/kitchen-819x1024.jpg'
  },
  {
    product_name: 'Gracie Special',
    category_id: 1,
    product_inventory: 50,
    product_price: 18.00,
    product_description: ' Ante in nibh mauris cursus mattis. At erat pellentesque adipiscing commodo elit at imperdiet dui. Amet luctus venenatis lectus magna fringilla urna. Ultrices dui sapien eget mi proin sed libero enim. Mattis aliquam faucibus purus in massa. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Ut sem viverra aliquet eget sit amet tellus cras adipiscing.',
    image_url: 'https://lh3.googleusercontent.com/proxy/kj18u90aZmWLvJNrEelOWFkbRwyqO0QRVtBhlFyR6XmH0zH3f8v835Lh6ernTzbCNWlMqRlqG-8Y33_gprGhovgZshSGX_yfUv5dEe9hlecuUkMnW4WHKHBVLfnUEzLzlYLRxtLhbTGh9ydgHc4'
  },
  {
    product_name: 'chocolate chip cookie',
    category_id: 2,
    product_inventory: 50,
    product_price: 0.30,
    product_description: 'Amet aliquam id diam maecenas ultricies. Lorem sed risus ultricies tristique nulla aliquet. Porttitor eget dolor morbi non arcu risus quis varius. Quisque sagittis purus sit amet. In pellentesque massa placerat duis ultricies. Mollis nunc sed id semper.',
    image_url: 'https://handletheheat.com/wp-content/uploads/2013/10/Soft-Chocolate-Chip-Cookies-SQUARE.jpg'
  },
  {
    product_name: 'chocolate vanilla swirl cookie',
    category_id: 2,
    product_inventory: 50,
    product_price: 0.6,
    product_description: 'Lorem donec massa sapien faucibus et molestie. Ornare arcu dui vivamus arcu felis bibendum ut. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Magna sit amet purus gravida quis. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. ',
    image_url: 'https://images.squarespace-cdn.com/content/v1/539cc58be4b03916d1da4907/1479182669253-6EE4CT461HN4TFJTGJER/Chocolate+Vanilla+Pinwheel+Cookies+%28Gluten-free+and+Paleo%29'
  },
  {
    product_name: 'cinnamon walnut cookie',
    category_id: 2,
    product_inventory: 50,
    product_price: 0.3,
    product_description: 'Volutpat odio facilisis mauris sit amet massa. Quis hendrerit dolor magna eget est lorem ipsum. Nunc faucibus a pellentesque sit amet. Neque viverra justo nec ultrices dui. Et malesuada fames ac turpis egestas integer eget. Augue ut lectus arcu bibendum at varius vel. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Tincidunt arcu non sodales neque sodales.',
    image_url: 'https://outsidethecerealbox.files.wordpress.com/2017/03/img_8804.jpg?w=870'
  },
  {
    product_name: 'date bars',
    category_id: 2,
    product_inventory: 50,
    product_price: 0.3,
    product_description: 'Consectetur adipiscing elit pellentesque habitant morbi. Lacus vestibulum sed arcu non odio euismod lacinia. Id consectetur purus ut faucibus pulvinar elementum integer. Eget aliquet nibh praesent tristique magna sit amet purus. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. ',
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILexuLTynpISqI8DsRsuzG0WXQ3z4qbTskDKYfvtWJNu7_1L_p45GpYSoKcSLSUlK9vA&usqp=CAU'
  },
  {
    product_name: 'lacey special cupcake',
    category_id: 3,
    product_inventory: 50,
    product_price: 1.9,
    product_description: 'Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Mauris sit amet massa vitae tortor condimentum lacinia. In pellentesque massa placerat duis ultricies lacus. Egestas sed tempus urna et pharetra pharetra. Sollicitudin ac orci phasellus egestas tellus. Eu turpis egestas pretium aenean. Habitant morbi tristique senectus et netus. Arcu vitae elementum curabitur vitae nunc sed. ',
    image_url: 'https://i.pinimg.com/originals/4e/4b/50/4e4b50acc696e6f364867e5a2113de28.jpg'
  },
  {
    product_name: 'burnt almond cupcake',
    category_id: 3,
    product_inventory: 50,
    product_price: 1.2,
    product_description: 'Vitae justo eget magna fermentum iaculis eu non diam. At volutpat diam ut venenatis tellus in metus vulputate. Elit pellentesque habitant morbi tristique senectus et netus. Porttitor massa id neque aliquam vestibulum morbi blandit cursus.',
    image_url: 'https://www.cutesycupcakes.com/wp-content/uploads/2018/11/burntalmond.jpg'
  },
  {
    product_name: 'white cupcake',
    category_id: 3,
    product_inventory: 50,
    product_price: 1.5,
    product_description: 'Cras semper auctor neque vitae tempus quam pellentesque nec. Bibendum enim facilisis gravida neque convallis a cras semper. Lacinia quis vel eros donec ac odio tempor orci. Justo laoreet sit amet cursus sit. Fusce id velit ut tortor pretium. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Turpis tincidunt id aliquet risus feugiat. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum.',
    image_url: 'https://atablefullofjoy.com/wp-content/uploads/2018/07/White-Cupcake-Recipe-2-2.jpg'
  },
  {
    product_name: 'unicorn cupcake',
    category_id: 3,
    product_inventory: 50,
    product_price: 2,
    product_description: 'Proin libero nunc consequat interdum varius sit. Id porta nibh venenatis cras sed felis eget velit. Pharetra massa massa ultricies mi quis hendrerit dolor. Sed odio morbi quis commodo odio aenean. Et ligula ullamcorper malesuada proin. Facilisi nullam vehicula ipsum a arcu cursus vitae. Urna duis convallis convallis tellus id interdum velit. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Gravida cum sociis natoque penatibus et. Bibendum at varius vel pharetra vel. Diam donec adipiscing tristique risus nec. Sem integer vitae justo eget magna fermentum iaculis eu.',
    image_url: 'https://i.pinimg.com/736x/7a/5d/16/7a5d16606b68a8ab07a66e06f3265667.jpg'
  },
]
const categories = [
  {
    category_name: 'cakes'
  },
  {
    category_name: 'cookies'
  },
  {
    category_name: 'cupcakes'
  },
]
const reviews = [
  {
    review_rating: 5,
    review_name: 'Julia',
    review_title: 'this cake is super good!',
    review_details: 'Donec adipiscing tristique risus nec. Orci a scelerisque purus semper eget. Euismod elementum nisi quis eleifend quam adipiscing vitae. Quisque egestas diam in arcu cursus. Ut tellus elementum sagittis vitae et leo duis ut. Dignissim suspendisse in est ante.',
    product_id: 1,
    review_date: '2021-10-31'
  },
  {
    review_rating: 4,
    review_name: 'Jenny',
    review_title: 'Highly recommend!',
    review_details: 'Donec adipiscing tristique risus nec. Orci a scelerisque purus semper eget. Euismod elementum nisi quis eleifend quam adipiscing vitae. Quisque egestas diam in arcu cursus. Ut tellus elementum sagittis vitae et leo duis ut. Dignissim suspendisse in est ante.',
    product_id: 2,
    review_date: '2021-10-31'
  },
  {
    review_rating: 5,
    review_name: 'Sanoo KS',
    review_title: 'my favorite ever',
    review_details: 'Donec adipiscing tristique risus nec. Orci a scelerisque purus semper eget. Euismod elementum nisi quis eleifend quam adipiscing vitae. Quisque egestas diam in arcu cursus. Ut tellus elementum sagittis vitae et leo duis ut. Dignissim suspendisse in est ante.',
    product_id: 3,
    review_date: '2021-10-31'
  },
  {
    review_rating: 5,
    review_name: 'Van Nguyen',
    review_title: 'soooo good!',
    review_details: 'Donec adipiscing tristique risus nec. Orci a scelerisque purus semper eget. Euismod elementum nisi quis eleifend quam adipiscing vitae. Quisque egestas diam in arcu cursus. Ut tellus elementum sagittis vitae et leo duis ut. Dignissim suspendisse in est ante.',
    product_id: 4,
    review_date: '2021-10-31'
  },
  {
    review_rating: 5,
    review_name: 'Joshua K',
    review_title: 'soooo good!',
    review_details: 'Donec adipiscing tristique risus nec. Orci a scelerisque purus semper eget. Euismod elementum nisi quis eleifend quam adipiscing vitae. Quisque egestas diam in arcu cursus. Ut tellus elementum sagittis vitae et leo duis ut. Dignissim suspendisse in est ante.',
    product_id: 5,
    review_date: '2021-10-31'
  },
  {
    review_rating: 5,
    review_name: 'Taylot Swift',
    review_title: 'never had anything good like this!',
    review_details: 'Donec adipiscing tristique risus nec. Orci a scelerisque purus semper eget. Euismod elementum nisi quis eleifend quam adipiscing vitae. Quisque egestas diam in arcu cursus. Ut tellus elementum sagittis vitae et leo duis ut. Dignissim suspendisse in est ante.',
    product_id: 6,
    review_date: '2021-10-31'
  },
  {
    review_rating: 5,
    review_name: 'Marco',
    review_title: 'definitely will come back again and again',
    review_details: 'Donec adipiscing tristique risus nec. Orci a scelerisque purus semper eget. Euismod elementum nisi quis eleifend quam adipiscing vitae. Quisque egestas diam in arcu cursus. Ut tellus elementum sagittis vitae et leo duis ut. Dignissim suspendisse in est ante.',
    product_id: 7,
    review_date: '2021-10-31'
  },
  {
    review_rating: 5,
    review_name: 'Amy Lam',
    review_title: 'soooo good!',
    review_details: 'Donec adipiscing tristique risus nec. Orci a scelerisque purus semper eget. Euismod elementum nisi quis eleifend quam adipiscing vitae. Quisque egestas diam in arcu cursus. Ut tellus elementum sagittis vitae et leo duis ut. Dignissim suspendisse in est ante.',
    product_id: 8,
    review_date: '2021-10-31'
  },
  {
    review_rating: 5,
    review_name: 'Linda Blinders',
    review_title: 'bought a bunch for my family party',
    review_details: 'Donec adipiscing tristique risus nec. Orci a scelerisque purus semper eget. Euismod elementum nisi quis eleifend quam adipiscing vitae. Quisque egestas diam in arcu cursus. Ut tellus elementum sagittis vitae et leo duis ut. Dignissim suspendisse in est ante.',
    product_id: 9,
    review_date: '2021-10-31'
  },
  {
    review_rating: 5,
    review_name: 'Jack M.P',
    review_title: 'got addicted to it',
    review_details: 'Donec adipiscing tristique risus nec. Orci a scelerisque purus semper eget. Euismod elementum nisi quis eleifend quam adipiscing vitae. Quisque egestas diam in arcu cursus. Ut tellus elementum sagittis vitae et leo duis ut. Dignissim suspendisse in est ante.',
    product_id: 10,
    review_date: '2021-10-31'
  },
  {
    review_rating: 5,
    review_name: 'Haruko',
    review_title: 'super creamy. taste just right',
    review_details: 'Donec adipiscing tristique risus nec. Orci a scelerisque purus semper eget. Euismod elementum nisi quis eleifend quam adipiscing vitae. Quisque egestas diam in arcu cursus. Ut tellus elementum sagittis vitae et leo duis ut. Dignissim suspendisse in est ante.',
    product_id: 11,
    review_date: '2021-10-31'
  },
  {
    review_rating: 5,
    review_name: 'Ellie',
    review_title: 'never been happier',
    review_details: 'Donec adipiscing tristique risus nec. Orci a scelerisque purus semper eget. Euismod elementum nisi quis eleifend quam adipiscing vitae. Quisque egestas diam in arcu cursus. Ut tellus elementum sagittis vitae et leo duis ut. Dignissim suspendisse in est ante.',
    product_id: 12,
    review_date: '2021-10-31'
  },
]


exports.seed = async function (knex) {
  await knex('products').insert(products)
  await knex('categories').insert(categories)
  await knex('reviews').insert(reviews)
};
