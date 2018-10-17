// Reverse
function reverseSTR(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
reverseSTR('abcda');

//ucFirst
function ucFirst(str) {
	if (!str) return str;
	return str[0].toUpperCase() + str.slice(1);
	}
console.log(ucFirst('adsad'))

