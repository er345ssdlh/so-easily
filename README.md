<!--  用于留言日期计算 -->
setTimeFun()
console.log(setTimeFun('2019-01-01 10:02:12'))
<!-- 用于点赞计算 -->
numberW()
console.log(numberW(2098190))
 <!-- 千分位分割 -->
rendererZhMoney()
console.log(rendererZhMoney(12312312.12))
<!-- 一维数组转多维 -->
sortArr()
var arr = [
    {title:'one',name:'张三',age:12},
    {title:'one',name:'张思',age:13},
    {title:'one',name:'张新',age:13},
    {title:'one',name:'张新',age:16},
    {title:'two',name:'李思',age:13},
    {title:'two',name:'李思',age:13},
    {title:'two',name:'李思',age:13},
    {title:'three',name:'刘新',age:13},
    {title:'three',name:'刘成',age:13}
]
console.log(sortArr(arr))