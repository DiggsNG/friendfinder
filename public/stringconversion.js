var singleword = function (str) {
    var newStr = str.toLowerCase().replace(/\s/g,'')
    return newStr;
}
TA Solution (ES6);
const func = str => str.replace(/ /g, '').toLowerCase();