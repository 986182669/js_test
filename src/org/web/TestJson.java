package org.web;

import net.sf.json.JSONObject;
import org.apache.commons.lang.exception.NestableRuntimeException;

public class TestJson {
    public static void main(String[] args) {

     /*   User user = new User();
        user.setAge(18);
        user.setName("张三");
        user.setSex("男");*/
        String str = "{'name':'张三','age':18,'sex':'男'}";
        //创见JSON对象
        //JSONObject obj = new JSONObject();
//        JSONObject jobj = JSONObject.fromObject(user);
        JSONObject jsonObj = JSONObject.fromObject(str);
        User u = (User) jsonObj.toBean(jsonObj,User.class);
        System.out.println(u.getName()+u.getAge()+u.getSex());

    }
}
