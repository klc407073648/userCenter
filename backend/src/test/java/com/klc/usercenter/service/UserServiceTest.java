package com.klc.usercenter.service;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Date;

import com.klc.usercenter.model.domain.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;


@SpringBootTest
class UserServiceTest {

    @Resource
    private UserService userService;
    @Test
    public void testAddUser(){
        User user = new User();
        user.setId(0L);
        user.setUsername("");
        user.setUserAccount("");
        user.setAvatarUrl("");
        user.setGender(0);
        user.setUserPassword("");
        user.setPhone("");
        user.setEmail("");
        user.setUserStatus(0);
        user.setCreateTime(new Date());
        user.setUpdateTime(new Date());
        user.setIdDelete(0);

        boolean res=userService.save(user);
        System.out.println(user.getId());
        Assertions.assertTrue(res);



    }

    @Test
    public void testDigest() throws NoSuchAlgorithmException {

    }

    @Test
    void userRegister() {
        String userAccount = "test";
        String userPassword = "";
        String checkPassword = "123456";
        String planetCode = "1";
        long result =userService.userRegister(userAccount,userPassword,checkPassword,planetCode);
        //非空
        Assertions.assertEquals(-1,result);
        //账号长度不小于4位
        userAccount = "11";
        userPassword = "12345678";
        result =userService.userRegister(userAccount,userPassword,checkPassword,planetCode);
        Assertions.assertEquals(-1,result);
        //账号不能重复
        userAccount = "kkkk";
        result =userService.userRegister(userAccount,userPassword,checkPassword,planetCode);
        Assertions.assertEquals(-1,result);
        //密码和校验密码相同
        userPassword = "12345678";
        checkPassword = "123456789";
        result =userService.userRegister(userAccount,userPassword,checkPassword,planetCode);
        Assertions.assertEquals(-1,result);

        userAccount = "test1111";
        userPassword = "12345678";
        checkPassword = "12345678";
        result =userService.userRegister(userAccount,userPassword,checkPassword,planetCode);
        Assertions.assertTrue(result < 0);

    }
}