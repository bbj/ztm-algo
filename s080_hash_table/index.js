class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  //_ means private in ES6
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++){
        //charCodeAt == UTF-16 code (0...65536=2^15); 'a'.charCodeAt()==97
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  /**
   * 
   * @param {*} key 
   * @returns null if nothing found
   */
  get(key) {
    if (typeof key !== 'string') return null;
    let address = this._hash(key);
    const content = this.data[address];
    if (!content) return null;
    //loop at this address and compare every key to param
    for (let i = 0; i < content.length; i++) {
      const elem = content[i];
      if (elem[0] === key) return elem[1]; 
    }
    return null;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {//no collision
      this.data[address] = [];
    }
    this.data[address].push([key, value]);      

    console.log(this.data); //[ <3 empty items>, [ [ 'grapes', 10000 ] ], [ [ 'apples', 40 ] ] ]
    console.log(JSON.stringify(this.data)); //[null,null,null,[["grapes",10000]],[["apples",40]]] empty items> ]
  }
}

const myHashTable = new HashTable(5);
//console.log(myHashTable._hash('grapes')); //23

myHashTable.set('grapes', 10000);
myHashTable.set('apples', 40);
myHashTable.set('apples', 40);

console.log("myHashTable.get('grapes')="+myHashTable.get('grapes'));
console.log("myHashTable.get(undefined)="+myHashTable.get(0));
// myHashTable.set('apples', 9)
// myHashTable.get('apples')