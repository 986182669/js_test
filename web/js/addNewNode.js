function addNewNode() {
    //xxx.appendChild();给某个父节点追加（追加到最后一个元素）一个子节点
    //xxx.insertBefore(插入的子节点,插入到牟恩元素之前);//给某个父节点插入一个子元素插入到某个子节点之前
    //或得form表单
    var formObj = document.getElementById("form1");
    //创建input
    var txtObj = document.createElement("input");
    //设置属性
    txtObj.type = "text";
    txtObj.value = "mary";
   //追加到form表单的最后
    formObj.appendChild(txtObj);

    var aObj = document.createElement("a");
    aObj.href = "a.html";
    aObj.innerHTML = "click me";
    formObj.appendChild(aObj);

    //新建一个input按钮 点击按钮弹出hello将按钮添加到form表单的第一个元素前面
    var butObj = document.createElement("input");
    butObj.type = "button";
    butObj.value="new Button"
    butObj.onclick = function () {
        alert("Hello");
    };
    //添加到form表单第一个元素前面
    formObj.insertBefore(butObj,document.getElementsByTagName("form")[0].childNodes[0]);
}
var cities = new Array();
cities[0] = ["请选择"];
cities[1] = ["钟楼","小寨","会展中心","长安"];
cities[2] = ["纺织厂","后卫寨","二院"];
function showCities() {

    var selObj = document.getElementById("sel2");
    //或得索引
    var index = document.getElementById("sel1").selectedIndex;
    //删除第二个选项框里的所有元素
    while (selObj.childNodes.length>0){
        //firstChild第一个子节点
        selObj.removeChild(selObj.firstChild);
    }
    //根据索引找到城市数据
    var arry = cities[index];
    //循环城市数据穿件option元素写入文本
    for(var i = 0;i<arry.length;i++){
        var newNode = document.createElement("option");
        newNode.innerHTML = arry[i];
        selObj.appendChild(newNode);
    }
}
function modiTable() {
    var txtName = document.getElementById("txtName").value;
    var price = document.getElementById("price").value;
    var table = document.getElementById("table1");
    var row = table.insertRow(table.rows.length);
    row.rowSpan = 2;
    var cell = row.insertCell(0);
    cell.colSpan = 2;
    var cell2 = row.insertCell(1);
    cell.innerHTML = txtName;
    cell2.innerHTML = price;
}
/*window.onload = function () {

    var but1 = document.getElementById("but1");
    but1.onclick = function () {
        var table = document.getElementById("table1");
        var row = table.insertRow(0);
        var cell = row.insertCell(0);
        cell.innerHTML = "10";
        var cell2 = row.insertCell(1);
        cell2.innerHTML = "aaaa";
    }
}*/
function testLoction() {
    /**
     * window.screen 封装了屏幕相关信息 值能读取
     * var a = screen.width;
     *
     * history 封装了历史访问记录
     * history.back()返回
     * history.forward()前进
     * history.go(n)
     *
     * location 地址栏
     * location.href = "url";会保留访问历史记录
     * location.replace("url");不会保留
     *
     * navigator 浏览器软件的相关信息
     */
    //会保留访问历史记录
    //location.href = "index.jsp";
    //不会保留历史记录
    location.replace("index.jsp");
}
//便利navigator对象中的所有属性
function testNavigator() {
    var s = "";
    //p代表属性名
    //navigator[p]等同于navigator.p
    for (var p in navigator) {
        s += p + ":" + navigator[p] + "\n";
    }
    alert(s);
}
/**
 * 事件的类别
 * 鼠标事件
 *  onclick/ondblclick/conmouseover/onmouseout
 *  键盘事件：
 *  onkeydown/onkeyup
 *  状态改变事件
 *  onblur/onfocus/onchange/onload/onsubmit
 *
 *  事件可以被取消
 *  onXXX = "return false"//取消某事件
 *
 *  事件的定义
 *  <标签里 onxxx="代码" 静态 卸载html里
 *
 *  事件的冒泡机制:
 *
 *  event对象
 *  在ie/chrome 里使用event
 *  在firefox里不能直接所使用的event
 *
 *  获等event 对象
 *  firefox:只能在html页面或得,而不能在js中直接使用
 *  其他浏览器 ：既可以在js中 也可以在html中或得
 *
 *  获得引发事件的对象
 *  firefox :target
 *  其他的:srcElement
 *
 *  兼顾兼容问题：
 *  在html上使用event关键字或得事件对象，传入js代码里，使用target||srcElement得到引发事件的对象
 */

function testEvent(e) {
    //其他浏览器
   // alert(event.srcElement.nodeName);
    //火狐浏览器
  /* alert(e.target.nodeName);*/
  var obj = e.target || e.srcElement;
  alert(obj.nodeName);

}

function cal(e) {
    var obj = e.target || e.srcElement;
    if(obj.nodeName=="INPUT" && obj.type=="button"){
        if(obj.value=="="){
            var s = document.getElementById("textName").value;
            var data = eval(s);
            document.getElementById("textName").value = data;
        }else {
            document.getElementById("textName").value += obj.value;

        }

    }

}
function testObject() {
    //创建对象封装数据和行为
    var obj = new Object();
    obj.name = "mary";
    obj.age = 18;
    obj.sing = function () {
        alert("Hello")
    }

    //测试
    alert(obj.name);
    alert(obj.age);
    obj.sing();
}
//测试自定义对象
function testOwnObject(){
    var p1 = new student("mary",18);
    var p2 = new student("john",20);
    p1.introduceSelf();
    p2.introduceSelf();
}
//自定义对象
function student(name,age) {
    this.name = name;
    this.age = age;
    //自我介绍
    this.introduceSelf = function () {
        alert("i am name "+this.name+",i am age "+this.age+" years old ")
    }
}

/**
 * 使用json(javascript Object notation) 方式封装常用语数据交互
 */
function testJSON(){
    var s =
        {
            "name":"mary",
            "age":18,
            "isGraduated":true
        };
    alert(s.name);
    alert(s.age);
    alert(s.isGraduated);
}

function addProduct(){
    var t1 = document.getElementById("tables");
    var textId = document.createElement("input");
    var textName = document.createElement("input");
    var textPrice = document.createElement("input");
    var row = t1.insertRow(t1.rows.length);
    var cell = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    alert(textId);
    textId.type = "text";
    textName.type = "text";
    textPrice.type = "text";
  /*  cell.innerHTML = textId;
    cell2.innerHTML = textId;
    cell3.innerHTML = textId;*/
    cell.appendChild(textId)
    cell2.appendChild(textName);
    cell3.appendChild(textPrice);

}
function testSave() {
    alert("111111111111111111");
    var array = new Array();
    var tables = document.getElementById("tables");
    alert(tables.childElementCount);
    alert(inputs.length+"-------------------");
    for(var i = 0;i<inputs.length;i++){
        alert(inputs[i]);
    }

    /* for(var i = 1;i<table1.childNodes.length;i++){

 var j = 0;
 for(var index = 0;i<trNodes.childNodes.length;i++){
     var product = trNodes.childNodes[index].childNodes[0].value;
     array[j] = {
         "productID":product,
         "productName":product,
         "productPrice":product
     };
 }
 j++;
}*/
    /* alert(array[0].productID);*/
}










