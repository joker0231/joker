function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }

  function listToArray(list) {
    let array=[];
    for(let i=list ; i ; i=i.rest){
        array.push(i.value);
    }
    return array;
  }

  function prepend(value, list) {
    return {value, rest: list};
  }

  console.log(arrayToList([10, 20]));
  console.log(listToArray(arrayToList([10, 20, 30])));