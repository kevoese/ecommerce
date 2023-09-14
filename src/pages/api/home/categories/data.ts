// generate a 10 different categories object with 5 sub-categories and  5 brands
const categories = [
  {
    id: 1,
    name: 'Movies',
    icon: 'https://publicpayfiimages.s3.amazonaws.com/banner/real-estate.svg',
    subCategories: [
      {
        id: 11,
        name: 'K-Drama',
        brands: [
          {
            id: 3,
            name: 'K-Studio',
          },
          {
            id: 4,
            name: 'Pa-vilion',
          },
          {
            id: 5,
            name: 'Kim-Studio',
          },
        ],
      },
      {
        id: 12,
        name: 'Action',
        brands: [
          {
            id: 123,
            name: 'Marvel',

          },
          {
            id: 124,
            name: 'DC',

          },
          {
            id: 125,
            name: 'Universal',

          },
          {
            id: 126,
            name: 'Pixar',

          },
          {
            id: 127,
            name: 'Star Wars',

          },
        ],
      },
      {
        id: 13,
        name: 'Comedy',
        brands: [
          {
            id: 131,
            name: 'Marvel',

          },
          {
            id: 132,
            name: 'DC',

          },
          {
            id: 133,
            name: 'Pixar',

          },
          {
            id: 134,
            name: 'Star Wars',
          },
        ],
      },
      {
        id: 14,
        name: 'Drama',
        brands: [
          {
            id: 141,
            name: 'Marvel',

          },
          {
            id: 142,
            name: 'DC',

          },
          {
            id: 143,
            name: 'Universal',
          },
          {
            id: 144,
            name: 'Pixar',

          },
          {
            id: 145,
            name: 'Star Wars',

          },
        ],
      },
      {
        id: 15,
        name: 'Thriller',
        brands: [
          {
            id: 151,
            name: 'Marvel',

          },
          {
            id: 152,
            name: 'DC',

          },
          {
            id: 153,
            name: 'Universal',

          },
          {
            id: 154,
            name: 'Pixar',

          },
          {
            id: 155,
            name: 'Star Wars',
          },
        ],
      },
      {
        id: 9,
        name: 'Animation',
      },
    ],
  },
  {
    id: 26,
    name: 'Technology',
    icon: 'https://publicpayfiimages.s3.amazonaws.com/banner/technology.svg',
    subCategories: [
      {
        id: 27,
        name: 'Mobile',
        brands: [
          {
            id: 28,
            name: 'Apple',

          },
          {
            id: 29,
            name: 'Samsung',

          },
          {
            id: 30,
            name: 'Xiaomi',

          },
          {
            id: 31,
            name: 'Huawei',

          },
          {
            id: 32,
            name: 'Nokia',

          },
        ],
      },
      {
        id: 33,
        name: 'TV',
        brands: [
          {
            id: 34,
            name: 'Sony',

          },
          {
            id: 35,
            name: 'Samsung',

          },
          {
            id: 36,
            name: 'LG',

          },
          {
            id: 37,
            name: 'Panasonic',

          },
          {
            id: 38,
            name: 'Toshiba',

          },
        ],
      },
      {
        id: 39,
        name: 'Laptops',
        brands: [
          {
            id: 390,
            name: 'Apple',

          },
          {
            id: 391,
            name: 'Dell',

          },
          {
            id: 392,
            name: 'HP',

          },
          {
            id: 393,
            name: 'Lenovo',

          },
          {
            id: 394,
            name: 'Asus',
          },
        ],
      },
      {
        id: 45,
        name: 'Camera',
        brands: [
          {
            id: 456,
            name: 'Canon',

          },
          {
            id: 457,
            name: 'Nikon',

          },
          {
            id: 458,
            name: 'Sony',

          },
          {
            id: 459,
            name: 'Panasonic',

          },
          {
            id: 450,
            name: 'Fujifilm',

          },
        ],
      },
      {
        id: 51,
        name: 'Gaming',
        brands: [
          {
            id: 512,
            name: 'PlayStation',

          },
          {
            id: 513,
            name: 'Xbox',

          },
          {
            id: 514,
            name: 'Nintendo',

          },
        ],
      },
    ],
  },
  {
    id: 55,
    name: 'Luxury Food',
    icon: 'https://publicpayfiimages.s3.amazonaws.com/banner/_drink.svg',
    subCategories: [
      {
        id: 56,
        name: 'Bakery',
        brands: [
          {
            id: 57,
            name: 'Pizza Hut',
          },
          {
            id: 58,
            name: 'McDonalds',
          },
          {
            id: 59,
            name: 'Burger Kings',
          },
          {
            id: 60,
            name: 'Bread Basket',
          },
        ],
      },
      {
        id: 60,
        name: 'Fast Food',
        brands: [
          {
            id: 61,
            name: 'Chicken Republic',
          },
          {
            id: 62,
            name: 'Bukka Hut',
          },
          {
            id: 63,
            name: 'Sweet Sensation',
          },
        ],
      },
      {
        id: 64,
        name: 'Ice Cream',
        brands: [
          {
            id: 65,
            name: 'Baskin Robbins',
          },
          {
            id: 66,
            name: 'Cold Stone',
          },
        ],
      },
      {
        id: 68,
        name: 'Sea Food',
        brands: [
          {
            id: 69,
            name: 'SPAR Supermarket',
          },
          {
            id: 70,
            name: 'SuperSaver',
          },
          {
            id: 71,
            name: 'SeaPlus Supermarket',
          },
        ],
      },
      {
        id: 72,
        name: 'Vegetables',
        brands: [
          {
            id: 73,
            name: 'SPAR Supermarket',
          },
          {
            id: 74,
            name: 'Veggies Republic',
          },
          {
            id: 75,
            name: 'Tantalizers',
          },
        ],
      },
    ],
  },
];

export const categoryAds = [
  {
    category: '- Hand Wash -',
    image: 'https://source.unsplash.com/featured/?handwash',
    info: 'Clean Hands',
    details: 'Clean Bacteria',
  },
  {
    category: '- Drink -',
    image: 'https://source.unsplash.com/featured/?wine',
    info: 'New Taste',
    details: 'New Experience',
  },
];

export default categories;
