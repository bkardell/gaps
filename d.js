define(['a', 'b'], function(a, b) {
  console.log('loaded a %o and b %o!', a, b);
  return { value: "d", a: a, b: b };
})
