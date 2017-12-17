/**
 * 获得AJAX对象
 * 属性
 * onreadystatechange; 绑定一个事件 处理函数，该函数用来处理 readystatechange事件
 * ajax对象的readyState属性发生改变比如从0-1就会产生readyStatechange事件
 * responseText或得服务器返回的文本数据
 * responseXML或得服务器返回的xml
 * status或得 状态吗
 * readState
 *
 * 发送get请求 xmlHttpRequest.open('get','url',true); true 表示异步请求(ajax对象发送请求用户可以对当前页面进行操作) fales 同步请求
 *
 * 发送求情xmlHttpRequest.send(null);
 */
function  getXmlHttpRequest() {
    var xmlHttp;
    if (window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHttp");
    }

    alert(xmlHttp);
}