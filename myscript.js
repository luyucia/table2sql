

var table = $("table")
var columns = new Array()
var datas = new Array()

table.find("th").each(function(i){
    columns.push($(this).text())
})

table.find("tbody tr").each(function(i){
    tmparr = new Array()
    $(this).find("td").each(function(j){
        tmparr.push($(this).text())
    })
    if (tmparr.length>0) {
        datas.push(tmparr)
    }
})
// build sql
var columstr = columns.join("`,`")
var sql = "insert into test (`"+columstr+"`) values "
var first = true
for (var i = 0; i < datas.length; i++) {
    if(first==false){
        sql+=","
    }
    sql+="('"+datas[i].join("','")+"')"
    first = false
}
sql+=";"
// console.log(sql)
// 传递数据给插件
chrome.extension.sendRequest({data: sql}, function(response) {
    // 忽略返回值
  // console.log(response.farewell);
});
