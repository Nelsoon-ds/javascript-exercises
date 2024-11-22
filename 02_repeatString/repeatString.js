const repeatString = function (string, num)
{
    var repeatedString = '';
while (num > 0) {
    repeatedString+= string;
    num --;
}
return repeatedString

}
// Do not edit below this line
module.exports = repeatString;
