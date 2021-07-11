(function (window) {
  console.log('IIFE, SIAF');

  window.myName = 'Maria';
})(window);

console.log(window.myName);

// (function (top) {
//   console.log('IIFE, SIAF');

//   top.myName = 'Dragos';
// })(top || global);

// console.log((top || global).myName);
