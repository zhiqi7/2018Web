var now = new Date(Date.now());
var born = new Date("11/13/1994");
var survive = now-born;
var surSenconds = survive/1000;//存在的秒
var surMinutes = surSenconds/60;//存在的分钟数
var surHours = surMinutes/60;//存在的小时数
var surDays = surHours/24;//存在的天数
var surYears = surDays/365;
alert(Math.floor(surSenconds));
