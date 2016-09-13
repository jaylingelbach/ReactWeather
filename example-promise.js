// function getTempCallback(location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('St.Louis', function(err, temp){
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('sucess', temp)
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject) {
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('St. Louis').then(function success(temp) {
//     console.log('promise success', temp);
// }, function(err) {
//     console.log('promise error', err);
// })

// Challenge Area

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number'){
    resolve(a + b);
  } else {
      reject('One or both inputs need to be numbers');
    }
  });
}

addPromise(2, 3).then(function success(sum) {
  console.log('Success: ', sum);
}, function (err) {
  console.log('Error: ', err);
});

addPromise('jay', 9).then(function (sum) {
  console.log('This should not show up ');
}, function (err) {
  console.log('This should appear ', err);
});
