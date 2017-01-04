// Write a function liftg that will take a binary function and apply it to many invocations.
// 	liftg(mul) () // undefined
// 	liftg(mul) (3) () // 3
// 	liftg(mul) (3) (0) (4) () // 0
// 	liftg(mul)(1) (2) (4) (8)() // 64

function print(input) {
  console.log(input);
}

function mul(first, second) {
  return first * second;
}

function liftg(binary) {
  return function (first) {
    if (first !== undefined) {
      return function more(next) {
        if (next === undefined) {
          return first;
        }

        first = binary(first, next);
        return more;
      };
    }
  };
}

	print(liftg(mul) ()); // undefined
	print(liftg(mul) (3) ()); // 3
	print(liftg(mul) (3) (0) (4) ()); // 0
	print(liftg(mul) (1) (2) (4) (8)()); // 64
