const nemo = ['nemo'];
const large = new Array(1000000).fill('foo');
large[999999] = 'nemo';
function findNemo(array) {
  let t0 = performance.now();
  for (let i=0; i<array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      let t1 = performance.now();
      console.log('findNemo it took: '+(t1-t0)+'ms.');
      break; //optimisation
    }
  }
}

findNemo(large); // O(n) --> Linear Time

const findNemo2 = array => {
  let t0 = performance.now();
  array.forEach(fish => {
    if (fish === 'nemo') {
      console.log('Found NEMO!');
      let t1 = performance.now();
      console.log('findNemo2 took: '+(t1-t0)+'ms.');
    }
  })
}
findNemo2(large); // O(n) --> Linear Time

const findNemo3 = array => {
  let t0 = performance.now();
  for (let fish of array) {
    if (fish === 'nemo') {
      console.log('Found NEMO!');
      let t1 = performance.now();
      console.log('findNemo3 took: '+(t1-t0)+'ms.');
      break;
    }
  }
}
findNemo3(large); // O(n) --> Linear Time