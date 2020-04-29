// 用于点赞计算
exports.numberW = function(num){
    let numbers
    if(!num){
        numbers = 0
    }else if(num>=10000){
        numbers = (num/10000).toFixed(1) + 'W'
    }else{
        numbers = num
    }
    return numbers
}
// 千分位分割
exports.rendererZhMoney = function (num){
    num=num.toString().split(".");  // 分隔小数点
    var arr=num[0].split("").reverse();  // 转换成字符数组并且倒序排列
    var res=[];
    for(var i=0,len=arr.length;i<len;i++){
      if(i%3===0&&i!==0){
         res.push(",");   // 添加分隔符
      }
      res.push(arr[i]);
    }
    res.reverse(); // 再次倒序成为正确的顺序
    if(num[1]){  // 如果有小数的话添加小数部分
      res=res.join("").concat("."+num[1]);
    }else{
      res=res.join("");
    }
    return res;
}
// 获取指定范围内的随机数
exports.ranDomNumber = function(num){
  let randomNum
  if(typeof num == "number"){
    randomNum = Math.floor(Math.random() * num + 1)
  }else if(typeof num == "string" && !!Number(num)){
    randomNum = Math.floor(Math.random() * Number(num) + 1)
  }
  return randomNum
}