const deleteAllXDuplicate = (numbers) => {
    const sorter = (a, b) => a - b
    let elMap = {}
    let sorted = []

    for (let index = 0; index < numbers.length; index++) elMap[numbers[index]] = []
    for (el in elMap) numbers.forEach((n, index) => n === Number(el) && elMap[el].push(index))
    for (el in elMap) elMap[el].length >= 2 && elMap[el].forEach(e => sorted.push(e))

    sorted.sort(sorter).reverse().forEach(i => numbers.splice(i, 1))

    return numbers
}