function removeChar(str){
//
    var arr=str.split("");
    arr.shift();
    arr.pop();
    console.log(arr.join(""));//-> string
//
    console.log(str.slice(1, -1));
//
    console.log(str.substring(1,str.length-1));
//
    console.log(str.replace(/^.|.$/g,""));
//
    console.log(str.substr(1,str.length-2));
//
    var newStr=str.split("");//-> Array
    newStr.splice(0,1);//splice(要删除的下标，要删除的项数)，删掉第一个
    newStr.splice(newStr.length-1,newStr.length);//删掉最后一个
    console.log(newStr.join(""));//-> String
}
removeChar('eloquent');//'loquen'
/**removeChar notes
 * 移除字符串的第一个和最后一个
 * 注意点:字符串方法运用和数组方法的运用；字符串转换为数组，数组转换为字符串；
 * 数组方法
 *     pop():从数组尾部删除一个元素，在原数组上操作，返回被删除的那个元素；
 *     shift():从数组头部删除一个元素，在原数组上操作，返回被删除的那个元素；
 *     join():用指定的分隔符分割数组并转换为字符串；
 *     slice(start, end):从已有数组中选取部分元素构成新数组；不改变原数组；
 *     splice():插入、删除、替换 一个数组的元素，在原数组上修改并且还会返回被处理的内容；前两个参数用于定位，后面参数插入;
 *         ↓→删除任意数量的项：a要删除的开始下标，b要删除的项数
 *         ↓→在指定位置插入指定的项：a起始下标，b 0（不删除任何项）或者项数，c要插入的项
 *         ↓→替换任意数量的项：a起始下标，b要删除的项数 ,c要插入的项
 * 字符串方法
 *     split():根据指定分隔符将字符串分割为多个字串，并返回为数组；
 *  slice(start, end):根据下标截取字串；参数1为指定字符串的开始位置；参数二为可选，无则默认为开始位置到结束，为负数则从数组尾开始算
 *     →substring(from[, to]):根据下标截取子串；同上，但是参数为负数时转换为0
 *     substr(start[, length]):根据长度截取子串；参数2为返回的字符个数；参数1为负数则与字符串长度相加，参数2为负数则转换为0；
 *     replace(regexp[, replacement])：替换一个与正则表达式相匹配的子串；
 */