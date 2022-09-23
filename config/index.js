export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxdb4f86efce0a7640",
    // 公众号appSecret
    appSecret: "730d9b6db60e369ee6bcca5cb1f3904c",
    // 模板消息id
    templateId: "	MZp2D_u5cfkd1BlKD-c8y057kz7nUvuNfg29TyPZHt4",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oLsOs51EOMDystbV55dnRFSWNZMo","oLsOs5zJo3aCfTQXAzFEl2Z4RBUU"],
     
    // 信息配置
    ewai: "   ",
    // 所在省份
    province: "陕西",
    // 所在城市
    city: "延安",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "汤汤", "year": "2004", "date": "12-08", "type": 'new'},
      {"name": "小欧", "year": "2001", "date": "11-19", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-08-04",
    // 相遇
    
 //{{date.DATA}}  
//城市：{{city.DATA}}  
//天气：{{weather.DATA}}  
//最低气温: {{min_temperature.DATA}}  
//最高气温: {{max_temperature.DATA}}  
// 
 //{{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
