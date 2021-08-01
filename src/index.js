module.exports = function check(str, bracketsConfig) {

	let arrStr = str.split('');
	let arrOpenBr = [];
	let result = true;

	arrStr.forEach(element => {
		bracketsConfig.forEach(item => {
			if (element === item[0] && element === item[1]) {
				if (element === arrOpenBr[arrOpenBr.length - 1]) {
					arrOpenBr.pop()
				}
				else {
					arrOpenBr.push(element);
				}
			} else if (element === item[0]) {
				arrOpenBr.push(element);
			} else if (element === item[1]) {
				if (item[0] === arrOpenBr[arrOpenBr.length - 1] && arrOpenBr[0] !== undefined) {
					arrOpenBr.pop()
				} else result = false
			}
		});
	})
	if (arrOpenBr.length === 0 && result)
		return true
	return false
}
