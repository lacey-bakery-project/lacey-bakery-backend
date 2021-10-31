const products = [
  {
    product_name: 'burnt almond',
    category_id: 1,
    product_inventory: 50,
    product_price: 20.25,
    product_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image_url: 'https://houseofnasheats.com/wp-content/uploads/2018/10/Burnt-Almond-Cake-3.jpg'
  },
  {
    product_name: 'berry boston',
    category_id: 1,
    product_inventory: 50,
    product_price: 19.75,
    product_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image_url: 'https://images.squarespace-cdn.com/content/v1/57f7c21be3df28e37ffbbc26/1593006171961-F4P8FZIH2KJI6IUL2LSM/BerryCake-8952_WEB.jpg?format=1000w'
  },
  {
    product_name: 'checkerboard',
    category_id: 1,
    product_inventory: 50,
    product_price: 15.95,
    product_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image_url: 'https://kitchencookbook.net/wp-content/uploads/2018/11/kitchen-819x1024.jpg'
  },
  {
    product_name: 'Gracie Special',
    category_id: 1,
    product_inventory: 50,
    product_price: 18.00,
    product_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image_url: 'https://lh3.googleusercontent.com/proxy/kj18u90aZmWLvJNrEelOWFkbRwyqO0QRVtBhlFyR6XmH0zH3f8v835Lh6ernTzbCNWlMqRlqG-8Y33_gprGhovgZshSGX_yfUv5dEe9hlecuUkMnW4WHKHBVLfnUEzLzlYLRxtLhbTGh9ydgHc4'
  },
  {
    product_name: 'chocolate chip cookie',
    category_id: 2,
    product_inventory: 50,
    product_price: 0.30,
    product_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image_url: 'https://handletheheat.com/wp-content/uploads/2013/10/Soft-Chocolate-Chip-Cookies-SQUARE.jpg'
  },
  {
    product_name: 'chocolate vanilla swirl cookie',
    category_id: 2,
    product_inventory: 50,
    product_price: 0.6,
    product_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image_url: 'https://images.squarespace-cdn.com/content/v1/539cc58be4b03916d1da4907/1479182669253-6EE4CT461HN4TFJTGJER/Chocolate+Vanilla+Pinwheel+Cookies+%28Gluten-free+and+Paleo%29'
  },
  {
    product_name: 'cinnamon walnut cookie',
    category_id: 2,
    product_inventory: 50,
    product_price: 0.3,
    product_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image_url: 'https://outsidethecerealbox.files.wordpress.com/2017/03/img_8804.jpg?w=870'
  },
  {
    product_name: 'date bars',
    category_id: 2,
    product_inventory: 50,
    product_price: 0.3,
    product_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILexuLTynpISqI8DsRsuzG0WXQ3z4qbTskDKYfvtWJNu7_1L_p45GpYSoKcSLSUlK9vA&usqp=CAU'
  },
  {
    product_name: 'lacey special cupcake',
    category_id: 3,
    product_inventory: 50,
    product_price: 1.9,
    product_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
    product_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image_url: 'https://atablefullofjoy.com/wp-content/uploads/2018/07/White-Cupcake-Recipe-2-2.jpg'
  },
  {
    product_name: 'unicorn cupcake',
    category_id: 3,
    product_inventory: 50,
    product_price: 2,
    product_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
    review_details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    product_id: 1,
    review_date: '2021-10-31'
  },
  {
    review_rating: 4,
    review_name: 'Jenny',
    review_title: 'Highly recommend!',
    review_details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    product_id: 2,
    review_date: '2021-10-31'
  },
  {
    review_rating: 5,
    review_name: 'Sanoo KS',
    review_title: 'my favorite ever',
    review_details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    product_id: 3,
    review_date: '2021-10-31'
  },
  {
    review_rating: 5,
    review_name: 'Van Nguyen',
    review_title: 'soooo good!',
    review_details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    product_id: 4,
    review_date: '2021-10-31'
  },
  {
    review_rating: 5,
    review_name: 'Joshua K',
    review_title: 'soooo good!',
    review_details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    product_id: 5,
    review_date: '2021-10-31'
  },
  {
    review_rating: 5,
    review_name: 'Taylot Swift',
    review_title: 'never had anything good like this!',
    review_details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    product_id: 6,
    review_date: '2021-10-31'
  },
  {
    review_rating: 5,
    review_name: 'Marco',
    review_title: 'definitely will come back again and again',
    review_details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    product_id: 7,
    review_date: '2021-10-31'
  },
  {
    review_rating: 5,
    review_name: 'Amy Lam',
    review_title: 'soooo good!',
    review_details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    product_id: 8,
    review_date: '2021-10-31'
  },
  {
    review_rating: 5,
    review_name: 'Linda Blinders',
    review_title: 'bought a bunch for my family party',
    review_details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    product_id: 9,
    review_date: '2021-10-31'
  },
  {
    review_rating: 5,
    review_name: 'Jack M.P',
    review_title: 'got addicted to it',
    review_details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    product_id: 10,
    review_date: '2021-10-31'
  },
  {
    review_rating: 5,
    review_name: 'Haruko',
    review_title: 'super creamy. taste just right',
    review_details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    product_id: 11,
    review_date: '2021-10-31'
  },
  {
    review_rating: 5,
    review_name: 'Ellie',
    review_title: 'never been happier',
    review_details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    product_id: 12,
    review_date: '2021-10-31'
  },
]


exports.seed = async function (knex) {
  await knex('categories').insert(categories)
  await knex('products').insert(products)
  await knex('reviews').insert(reviews)
};
