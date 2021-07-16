const uniqid = require('uniqid');

const state = {
  categories: [
    {
      id: 0,
      category: 'nature',
      cards: [
        {
          id: uniqid(),
          imageSRC: 'http://localhost:5000/assets/category/nature/forest.jpg',
          name: 'Forest',
          translate: 'Лес',
          audioSRC: 'http://localhost:5000/assets/audio/forest.mp3',
        },
        {
          id: uniqid(),
          imageSRC: 'http://localhost:5000/assets/category/nature/lake.jpg',
          name: 'Lake',
          translate: 'Озеро',
          audioSRC: 'http://localhost:5000/assets/audio/lake.mp3',
        },
        {
          id: uniqid(),
          imageSRC: 'http://localhost:5000/assets/category/nature/cloud.jpeg',
          name: 'Cloud',
          translate: 'Облако',
          audioSRC: 'http://localhost:5000/assets/audio/cloud.mp3',
        },
        {
          id: uniqid(),
          imageSRC: 'http://localhost:5000/assets/category/nature/Grass.jpg',
          name: 'Grass',
          translate: 'Трава',
          audioSRC: 'http://localhost:5000/assets/audio/grass.mp3',
        },
        {
          id: uniqid(),
          imageSRC: 'http://localhost:5000/assets/category/nature/mountain.jpg',
          name: 'Mountain',
          translate: 'Гора',
          audioSRC: 'http://localhost:5000/assets/audio/mountain.mp3',
        },
        {
          id: uniqid(),
          imageSRC: 'http://localhost:5000/assets/category/nature/ocean.jpg',
          name: 'Ocean',
          translate: 'Океан',
          audioSRC: 'http://localhost:5000/assets/audio/ocean.mp3',
        },
        {
          id: uniqid(),
          imageSRC: 'http://localhost:5000/assets/category/nature/sand.jpg',
          name: 'Sand',
          translate: 'Песок',
          audioSRC: 'http://localhost:5000/assets/audio/sand.mp3',
        },
        {
          id: uniqid(),
          imageSRC: 'http://localhost:5000/assets/category/nature/sunset.jpg',
          name: 'Sunset',
          translate: 'Закат',
          audioSRC: 'http://localhost:5000/assets/audio/sunset.mp3',
        },
      ],
    },
    {
      id: 1,
      category: 'animals',
      cards: [
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/animals/cat.jpg',
          name: 'Cat',
          translate: 'Кошка',
          audioSRC: 'http://localhost:5000/assets/audio/cat.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/animals/parrot.jpg',
          name: 'Parrot',
          translate: 'Попугай',
          audioSRC: 'http://localhost:5000/assets/audio/parrot.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/animals/cow.jpg',
          name: 'Cow',
          translate: 'Корова',
          audioSRC: 'http://localhost:5000/assets/audio/cow.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/animals/horse.jpg',
          name: 'Horse',
          translate: 'Лошадь',
          audioSRC: 'http://localhost:5000/assets/audio/horse.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/animals/dog.jpg',
          name: 'Dog',
          translate: 'Собака',
          audioSRC: 'http://localhost:5000/assets/audio/dog.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/animals/pig.jpg',
          name: 'Pig',
          translate: 'Свинья',
          audioSRC: 'http://localhost:5000/assets/audio/pig.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/animals/tiger.jpg',
          name: 'Tiger',
          translate: 'Тигр',
          audioSRC: 'http://localhost:5000/assets/audio/tiger.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/animals/panda.jpg',
          name: 'Panda',
          translate: 'Панда',
          audioSRC: 'http://localhost:5000/assets/audio/panda.mp3',
        },
      ],
    },
    {
      id: 2,
      category: 'sport',
      cards: [
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/sport/boxing.jpg',
          name: 'Boxing',
          translate: 'Бокс',
          audioSRC: 'http://localhost:5000/assets/audio/boxing.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/sport/esports.jpg',
          name: 'Esports',
          translate: 'Кибер спорт',
          audioSRC: 'http://localhost:5000/assets/audio/esports.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/sport/football.jpg',
          name: 'Football',
          translate: 'Футбол',
          audioSRC: 'http://localhost:5000/assets/audio/football.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/sport/formula1.jpg',
          name: 'Formula 1',
          translate: 'Формула 1',
          audioSRC: 'http://localhost:5000/assets/audio/formula1.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/sport/hockey.jpg',
          name: 'Hockey',
          translate: 'Хоккей',
          audioSRC: 'http://localhost:5000/assets/audio/hockey.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/sport/powerlifting.jpg',
          name: 'Powerlifting',
          translate: 'Пауэрлифтинг',
          audioSRC: 'http://localhost:5000/assets/audio/powerlifting.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/sport/weightlift.jpg',
          name: 'Weightlift',
          translate: 'Тяжелая атлетика',
          audioSRC: 'http://localhost:5000/assets/audio/powerlifting.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/sport/running.jpg',
          name: 'Running',
          translate: 'Бег',
          audioSRC: 'http://localhost:5000/assets/audio/running.mp3',
        },
      ],
    },
    {
      id: 3,
      category: 'food',
      cards: [
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/food/barbecue.jpg',
          name: 'barbecue',
          translate: 'шашлык',
          audioSRC: 'http://localhost:5000/assets/audio/barbecue.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/food/borscht.jpeg',
          name: 'borscht',
          translate: 'Борщ',
          audioSRC: 'http://localhost:5000/assets/audio/borscht.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/food/cake.jpg',
          name: 'cake',
          translate: 'торт',
          audioSRC: 'http://localhost:5000/assets/audio/cake.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/food/cookie.jpg',
          name: 'cookie',
          translate: 'печенье',
          audioSRC: 'http://localhost:5000/assets/audio/cookie.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/food/lasagna.jpg',
          name: 'lasagna',
          translate: 'лазанья',
          audioSRC: 'http://localhost:5000/assets/audio/lasagna.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/food/waffle.jpg',
          name: 'waffle',
          translate: 'вафля',
          audioSRC: 'http://localhost:5000/assets/audio/waffle.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/food/watermelon.jpg',
          name: 'watermelon',
          translate: 'арбуз',
          audioSRC: 'http://localhost:5000/assets/audio/watermelon.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/food/melon.jpg',
          name: 'melon',
          translate: 'дыня',
          audioSRC: 'http://localhost:5000/assets/audio/melon.mp3',
        },
      ],
    },
    {
      id: 4,
      category: 'gadgets',
      cards: [
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/gadgets/speakers.jpg',
          name: 'Speakers',
          translate: 'Колонки',
          audioSRC: 'http://localhost:5000/assets/audio/speakers.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/gadgets/headphone.jpg',
          name: 'headphone',
          translate: 'наушники',
          audioSRC: 'http://localhost:5000/assets/audio/headphone.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/gadgets/pc.jpg',
          name: 'computer',
          translate: 'компьютер',
          audioSRC: 'http://localhost:5000/assets/audio/computer.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/gadgets/tablet.jpg',
          name: 'tablet',
          translate: 'планшет',
          audioSRC: 'http://localhost:5000/assets/audio/tablet.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/gadgets/phone.jpg',
          name: 'phone',
          translate: 'телефон',
          audioSRC: 'http://localhost:5000/assets/audio/phone.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/gadgets/conditioner.jpg',
          name: 'conditioner',
          translate: 'кондиционер',
          audioSRC: 'http://localhost:5000/assets/audio/conditioner.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/gadgets/smartwatch.png',
          name: 'smartwatch',
          translate: 'умные часы',
          audioSRC: 'http://localhost:5000/assets/audio/smartwatch.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/gadgets/tv.jpg',
          name: 'tv',
          translate: 'телевизор',
          audioSRC: 'http://localhost:5000/assets/audio/tv.mp3',
        },
      ],
    },
    {
      id: 5,
      category: 'space',
      cards: [
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/space/space.jpg',
          name: 'space',
          translate: 'космос',
          audioSRC: 'http://localhost:5000/assets/audio/space.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/space/black_hole.jpg',
          name: 'black_hole',
          translate: 'черная дыра',
          audioSRC: 'http://localhost:5000/assets/audio/black_hole.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/space/earth.jpg',
          name: 'earth',
          translate: 'земля',
          audioSRC: 'http://localhost:5000/assets/audio/earth.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/space/mars.jpg',
          name: 'mars',
          translate: 'марс',
          audioSRC: 'http://localhost:5000/assets/audio/mars.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/space/milky_way.jpg',
          name: 'milky_way',
          translate: 'млечный путь',
          audioSRC: 'http://localhost:5000/assets/audio/milky_way.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/space/starfall.jpg',
          name: 'starfall',
          translate: 'звездопад',
          audioSRC: 'http://localhost:5000/assets/audio/starfall.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/space/stars.jpg',
          name: 'stars',
          translate: 'звезды',
          audioSRC: 'http://localhost:5000/assets/audio/stars.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/space/sun.jpg',
          name: 'sun',
          translate: 'солнце',
          audioSRC: 'http://localhost:5000/assets/audio/sun.mp3',
        },
      ],
    },
    {
      id: 6,
      category: 'genres of music',
      cards: [
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/music/dubstep.jpg',
          name: 'Dubstep',
          translate: 'Даб степ',
          audioSRC: 'http://localhost:5000/assets/audio/dubstep.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/music/hip-hop.jpg',
          name: 'Hip hop',
          translate: 'Хип хоп',
          audioSRC: 'http://localhost:5000/assets/audio/hip_hop.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/music/jazz.jpg',
          name: 'Jazz',
          translate: 'Джаз',
          audioSRC: 'http://localhost:5000/assets/audio/jazz.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/music/r&b.jpg',
          name: 'R & B',
          translate: 'Эр эн би)',
          audioSRC: 'http://localhost:5000/assets/audio/r&b.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/music/rap.jpg',
          name: 'Rap',
          translate: 'Рэп',
          audioSRC: 'http://localhost:5000/assets/audio/rap.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/music/reggae.jpg',
          name: 'Reggae',
          translate: 'Регги',
          audioSRC: 'http://localhost:5000/assets/audio/reggae.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/music/rock.jpg',
          name: 'Rock',
          translate: 'рок',
          audioSRC: 'http://localhost:5000/assets/audio/rock.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/music/trash.jpg',
          name: 'Trash',
          translate: 'Треш',
          audioSRC: 'http://localhost:5000/assets/audio/trash.mp3',
        },
      ],
    },
    {
      id: 7,
      category: 'movies',
      cards: [
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/movies/harry-potter.jpg',
          name: 'Harry Potter',
          translate: 'Гарри Поттер',
          audioSRC: 'http://localhost:5000/assets/audio/harry_potter.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/movies/cars.jpg',
          name: 'Cars',
          translate: 'Тачки',
          audioSRC: 'http://localhost:5000/assets/audio/cars.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/movies/clockwork-orange.jpg',
          name: 'A clockwork orange',
          translate: 'Заводной апельсин',
          audioSRC: 'http://localhost:5000/assets/audio/clockwork_orange.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/movies/friends.jpg',
          name: 'Friends',
          translate: 'Друзья',
          audioSRC: 'http://localhost:5000/assets/audio/friends.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/movies/hannibal.jpg',
          name: 'Hannibal',
          translate: 'Ганибал',
          audioSRC: 'http://localhost:5000/assets/audio/hannibal.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/movies/joker.jpg',
          name: 'Joker',
          translate: 'Шутник',
          audioSRC: 'http://localhost:5000/assets/audio/joker.mp3',
        },
        {
          id: uniqid(),

          imageSRC: 'http://localhost:5000/assets/category/movies/seven.jpg',
          name: 'Seven',
          translate: 'Семь',
          audioSRC: 'http://localhost:5000/assets/audio/seven.mp3',
        },
        {
          id: uniqid(),
          imageSRC: 'http://localhost:5000/assets/category/movies/taxi-driver.jpg',
          name: 'Cabbie',
          translate: 'Таксист',
          audioSRC: 'http://localhost:5000/assets/audio/cabbie.mp3',
        },
      ],
    },
  ],
};

export default state;
