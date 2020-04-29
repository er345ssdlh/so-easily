// 用于留言日期计算
exports.setTimeFun = function (dateStr) {
    let timeDat = dateStr.replace(/(-)/g, '/')
    let date = Date.parse(timeDat);
    let ts = new Date() - date;
    ts /= 1000;
    if (ts < 0) ts = 1;
    if (ts < 60) {
        return Math.round(ts) + '秒前';
    } else {
            ts /= 60;
            if (ts < 60) {
            return Math.round(ts) + '分钟前';
            } else {
            ts /= 60;
            if (ts < 24) {
                return Math.round(ts) + '小时前';
            } else {
                ts /= 24;
                if (ts < 30) {
                    return Math.round(ts) + '天前';
                } else {
                    ts/=30
                    if(ts < 12) {
                        return Math.round(ts) + '月前';
                    } else {
                        ts/=12
                        return Math.round(ts) + '年前';
                    }
                }
            }
        }
    }
}