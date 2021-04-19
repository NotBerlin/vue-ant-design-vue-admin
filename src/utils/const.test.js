// { 
//     setOut: '8:26', // 离开家等时间
//     enteringStation: '8:31',  // 进入地铁站使劲啊
//     waitingSubway: '>1',  // 等待地铁时间
//     outStation: '8:41',  // 出地铁站时间
//     time: '8:49',  // 打卡时间
//     actualTime: '8:52',  // 实际到达时间
// }

const weather = {
    smallRain: '小雨', // 不影响出行
    middleRain: '中雨', // 需要打伞，可以顶雨骑行
    bigRain: '大雨', // 不能骑行
    overcast: '阴', // 
    sun: '晴', // 
}

const travel = {
    bicycle: '自行车',
    none: '步行'
}

export const work = [
    { 
        setOut: '8:26', 
        enteringStation: '8:31', 
        outStation: '8:41', 
        actualTime: '8:52', 
        time: '8:49', 
        waitingSubway: '>1' ,
        home: 'xx',
        workPlace: 'xxx',
        weather: weather.middleRain,
        step2Travel: travel.bicycle,
    }
]