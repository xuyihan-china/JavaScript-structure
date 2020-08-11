/*
 * @Author: your name
 * @Date: 2020-08-10 11:49:38
 * @LastEditTime: 2020-08-11 13:38:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \数据结构和算法\hashMap.js
 */
function hasFunc(str,size){
    //长度为size的数组中
    //定义hashcode变量
    var hashCode =0
    //霍纳算法 设置code值
    //charCode 编码 计算出 字符串的Unicode编码
    for(var i=0 ;i<str.length;i++){
        //选择质数 让其随机分布
        hashCode =37*hashCode+str.charCodeAt(i)
    }
    var index = hashCode %size
    return index
}
console.log(hasFunc('cats',7))
console.log(hasFunc('cuts',7))
console.log(hasFunc('dfts',7))
console.log(hasFunc('cdts',7))