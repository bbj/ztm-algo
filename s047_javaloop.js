const nemo = ['nemo'];
const large = new Array(1000000).fill('foo');
large[499999] = 'nemo';
function findNemo(array) {
  let t0 = performance.now();
  for (let i=0; i<array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      let t1 = performance.now();
      console.log('it took: '+(t1-t0)+'ms.');
      break; //optimisation
    }
  }
}

findNemo(large); // O(n) --> Linear Time

const findNemo2 = array => {
  array.forEach(fish => {
    if (fish === 'nemo') {
      console.log('Found NEMO!');
    }
  })
}
findNemo2(large); // O(n) --> Linear Time