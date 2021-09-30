import Buyable from '../domain/Buyable';
import Movie from '../domain/Movie'
import Cart from '../service/Cart'

test('Sum', () => {
  const cart = new Cart();
  cart.add(new Movie(1, 'Мстители', 'The Avengers', 2012, 'США', ['фантастика', 'боевик', 'фентези', 'приключения'], '137 мин.', 200));
  cart.add(new Movie(2, 'Фантом', 'The phantom', 2015, 'США', ['ужасы'], '120 мин.', 150)); 

  expect(cart.getSum()).toBe(350);
});

test('Sum with discount', () => {
  const cart = new Cart();
  cart.add(new Movie(1, 'Мстители', 'The Avengers', 2012, 'США', ['фантастика', 'боевик', 'фентези', 'приключения'], '137 мин.', 200));
  cart.add(new Movie(2, 'Фантом', 'The phantom', 2015, 'США', ['ужасы'], '120 мин.', 150)); 

  expect(cart.getDiscount(10)).toBe(315);
});

test('deletion', () => {
  const cart = new Cart();
  cart.add(new Movie(1, 'Мстители', 'The Avengers', 2012, 'США', ['фантастика', 'боевик', 'фентези', 'приключения'], '137 мин.', 200));
  cart.add(new Movie(2, 'Фантом', 'The phantom', 2015, 'США', ['ужасы'], '120 мин.', 150));
  cart.removeItem(1);


  expect(cart).toEqual({'_items':[{
    id:2, 
    nameTranslation: 'Фантом',
    nameOrigin: 'The phantom',
    yearRelease: 2015,
    country: 'США',
    genre: ['ужасы'],
    time: '120 мин.',
    price: 150,
    tagline: undefined, 
  }]});
});

test('addition', () => {
  const cart = new Cart();
  cart.add(new Movie(2, 'Фантом', 'The phantom', 2015, 'США', ['ужасы'], '120 мин.', 150));


  expect(cart.items).toEqual([{
    id:2, 
    nameTranslation: 'Фантом',
    nameOrigin: 'The phantom',
    yearRelease: 2015,
    country: 'США',
    genre: ['ужасы'],
    time: '120 мин.',
    price: 150,
    tagline: undefined, 
  }]);
});

