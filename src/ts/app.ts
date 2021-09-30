import Buyable from "./domain/Buyable";
import Movie from "./domain/Movie";

const avengers: Buyable = new Movie(1, 'Мстители', 'The Avengers', 2012, 'США', ['фантастика', 'боевик', 'фентези', 'приключения'], '137 мин.', 200, 'Avengers \"Assemble!\"');

console.log(avengers);
