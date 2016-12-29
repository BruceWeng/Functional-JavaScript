// Write a function addf that adds from two invocations.
// addf(3)(4) -> 7
function print(input) {
  console.log(input);
}

function addf(first) {
  return function(second) {
    return first + second;
  };
}

print(addf(3)(4));
