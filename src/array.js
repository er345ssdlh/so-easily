// 一维数组转多维
exports.sortArr = function (data) {
    var listArr = [];
    data.forEach(function (el) {
      for (var i = 0; i < listArr.length; i++) {
        // 对比相同的字段key，相同放入对应的数组
        if (listArr[i].title == el.title) {
          listArr[i].listInfo.push({
            name: el.name,
            age: el.age,
          });
          return;
        }
      }
      // 第一次对比没有参照，放入参照
      listArr.push({
        title: el.title,
        listInfo: [{
            name: el.name,
            age: el.age,
        }]
      });
    });
    return listArr;
}