var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(kittens, NewKitten) {
  kittens.push(NewKitten)
  return [NewKitten, ...kittens];
}
