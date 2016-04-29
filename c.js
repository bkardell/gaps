define(['a', 'b'], function(a, b) {
  console.log('loaded a %o and b %o!', a, b);
  return { value: "c", a: a, b: b };
})
