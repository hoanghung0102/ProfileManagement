Vue.filter('concat', function (value) {
  console.log(value)
  return value.split('').reverse().join('')
})
