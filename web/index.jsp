<%--
  Created by IntelliJ IDEA.
  User: LDZ
  Date: 2017/10/22
  Time: 21:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>$Title$</title>
    <script type="text/javascript">
        function T1(){
            alert("helio");
        }
        function t2(){
            alert("<\/script>");
        }
        function t3(){
            var a = 10;
            var b = "10";
            if(a == b){
                alert("equest");
            }
            if (a === b){
                alert("same");
            }
        }
        function  t4() {
           var s = document.getElementById("txtString");
           var s2 = s.value;
/*           var index = s2.indexOf("js");
           while (index >- 1){
              s2 = s2.replace("js","*");
              index = s2.indexOf("js");
           }*/
          //使用正则表达式
            s.value = s2.replace(/js/gi,"*");
        }
        function  t5(type) {
            var s = document.getElementById("txtString").value;
            var array = s.split(",");
            switch (type)
            {
                case 1:
                    array.reverse();
                    break;
                case 2:
                    array.sort();
                    break;
                case 3:
                    //自定义排序规则
                    array.sort(sortFunc);
            }
            alert(array.join("|"));

        }
        function sortFunc(a,b) {
            return a-b;
        }
        function getRandom() {
            var min = 0;
            var max = 9;
            var s ="";
            for(var i = 0;i<4;i++){
                var random = Math.random();
                var n = Math.floor(random * max);
              alert(n)
            }
        }
        function valiData() {
            var txtName = document.getElementById("txtName").value;
            var reg = /^[a-z]{3,5}$/;
            if (reg.test(txtName)){
                alert("验证通过")
            }else {
                alert("验证不通过")
            }
            
        }
        function testMethod() {
            if(arguments.length==1){
                var data = arguments[0];
                    data = parseInt(data);
                    alert(data);
            }else if(arguments.length==2){
                alert(arguments[0]*arguments[1]);
            }
            //确认方法
           // window.confirm();
            //打开新窗口 open(url,name,config)   open(url,name)打开一次
           // window.open();
        }
        function testDocument() {
            var p1 = document.getElementById("p1");;
            p1.style.color = "red";
            p1.innerHTML = "123";
        }
        function validName() {
            var name = document.getElementById("username").value;
            var r = /^[a-z]{3,5}$/;
            if (r.test(name)){
                document.getElementById("userInfo").className = "success";
            }else {
                document.getElementById("userInfo").className = "fail";
            }
            return r.test(name);
        }
        function validAge() {
            var age = document.getElementById("age").value;
            var r = /^[0-9]{1,3}$/;
            if (r.test(age)){
                document.getElementById("ageInfo").className = "success";
            }else {
                document.getElementById("ageInfo").className = "fail";
            }
            return r.test(age);
        }
        function valiDatas() {
            var r1 = validName();
            var r2 = validAge();
            return r1&&r2;
        }

        function add(obj) {
            //得到td
            var tdobj = obj.parentNode;
            var data;
            //得到td下的所有子元素找到文本框

            for(var i = 0;i<tdobj.childNodes.length;i++){
                var childNode = tdobj.childNodes[i];
                if(childNode.nodeName=="INPUT"&&childNode.type=="text"){
                    //得到旧数据病显示
                    data = parseInt(childNode.value);
                    data++;
                    childNode.value = data;

                }
            }
            total();
        }
        function total() {
            //得到table
            var shoppingCart = document.getElementById("shoppingCart");
            //找到table下的所有tr
            var rows = shoppingCart.getElementsByTagName("tr");
            var total=0;
            //循环tr
            for(var i = 1;i<rows.length;i++){
                //找到tr下的第二个td的值
                var price = rows[i].getElementsByTagName("td")[0].innerHTML;
                //找到第二个td下的第二个input
                var count = rows[i].getElementsByTagName("td")[1].getElementsByTagName("input")[1].value;
             /*   var totalPrice = */
                //
                var sum = parseFloat(price) * parseFloat(count);
                rows[i].getElementsByTagName("td")[2].innerHTML = sum.toFixed(2);
                total += sum;
            }

            document.getElementById("totalPrice").innerHTML = total.toFixed(2);
        }
        function reduce(obj) {
            //得到td
            var tdobj = obj.parentNode;
            //得到td下的所有子元素找到文本框
            for(var i = 0;i<tdobj.childNodes.length;i++){
                var childNode = tdobj.childNodes[i];
                if(childNode.nodeName=="INPUT"&&childNode.type=="text"){
                    //得到旧数据病显示
                    var data = parseInt(childNode.value);
                    if(data>0){
                        data--;
                    }
                    childNode.value = data;
                }
            }
            total()
        }
    </script>

    <style>
        span.success{
          color: green;
        }
      span.fail{
        color: red;
      }

    </style>
  </head>
  <body>
  <input type="button" onclick="T1();" value="t1" >
  <input type="button" onclick="t2();" value="t2" >
  <input type="button" onclick="t3();" value="t3" >
  失去焦点事件
  <input type="text" onblur="t4();" value="t3" id="txtString">
  <input type="button" onclick="t5(1);" value="反转" >
  <input type="button" onclick="t5(2);" value="排序" >

  <input type="button" onclick="t5(3);" value="自定义规则排序" >
  <input type="button" onclick="getRandom();" value="求随机数" >
  输入验证:<input type="text" onblur="valiData();" id="txtName" >
  <input type="button" onclick="testMethod(3);" value="重载" >
  <input type="button" onclick="testDocument();" value="重载" >
  <p id="p1">Hello world</p>

<form>

  name：<input type="text" name="username" id="username" onblur="validName();">
      <span id="userInfo">请输入3-5个字母</span>
  age:<input type="text" id="age" onblur="validAge()"><span id="ageInfo">输入1-3个数字</span>
  <input type="submit" onclick="return valiDatas();" value="保存">
</form>

  $END$
  </body>

<table border="1" id="shoppingCart">
  <tr>
    <td>价格</td>
    <td>数量</td>
    <td>小计</td>
  </tr>
  <tr>
    <td>10.00</td>
    <td>
      <input type="button" value="+" onclick="add(this);">
      <input type="text" value="1">
      <input type="button" value="-" onclick="reduce(this);">
    </td>
    <td>
    </td>
  </tr>
  <tr>
    <td>20.00</td>
    <td>
      <input type="button" value="+" onclick="add(this);">
      <input type="text" value="1">
      <input type="button" value="-" onclick="reduce(this);">
    </td>
    <td>
    </td>
  </tr>
  <span id="totalPrice"></span>

</table>
</html>
