var now = new Date(Date.now());
var born = new Date("11/13/1994");
var survive = now-born;
surSenconds = survive/1000;//存在的秒
surMinutes = surSenconds/60;//存在的分钟数
surHours = surMinutes/60;//存在的小时数
surDays = surHours/24;//存在的天数
alert(surSenconds);
alert(surMinutes);
alert(surHours);
alert(surDays);