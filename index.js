var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(kittens, NewKitten) {
  return [NewKitten, ...kittens];
}
