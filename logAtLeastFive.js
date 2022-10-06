function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
// The Big O of this function is O(n) because the value of n increases with the maximum value

// logAtLeast5(5);

function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
logAtMost5(3);
// The Big O notation is O(1) i.e constant because the value of n is dependent on the minimum value and does not increase beyond five
