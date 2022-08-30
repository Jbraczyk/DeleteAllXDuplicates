const deleteAllXDuplicate = array => {
    const sorter = (a, b) => a - b
    let elMap = {}
    let sorted = []
    
    for (let index = 0; index < array.length; index++) elMap[array[index]] = []
    for (el in elMap) array.forEach((n, index) => n === Number(el) && elMap[el].push(index))
    for (el in elMap) elMap[el].length >= 2 && elMap[el].forEach(e => sorted.push(e))
    
    sorted.sort(sorter).reverse().forEach(i => array.splice(i, 1))
    
    return array
}

const deleteAllXDuplicateOn2n = array => array.filter(x => array.indexOf(x) === array.lastIndexOf(x))