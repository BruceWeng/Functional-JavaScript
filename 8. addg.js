// Write a function addg that adds from many invocations, until it sees an empty invocation.
// 	addg() // undefined
// 	addg(2) () // 2
// 	addg(2) (7) () // 9
// 	addg(3) (0) (4) () // 7
// 	addg(1) (2) (4) (8) () // 15
function print(input) {
  console.log(input);
}

function addg(first) {
  if (first !== undefined) {
    return function more(next) {
      if (next === undefined) {
        return first;
      }

      first += next;
      return more;
    };
  }
}

	print(addg()); // undefined
	print(addg(2) ()); // 2
	print(addg(2) (7) ()); // 9
	print(addg(3) (0) (4) ()); // 7
	print(addg(1) (2) (4) (8) ()); // 15
