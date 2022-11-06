package com.klc.usercenter.model.domain.request;

import lombok.Data;

import java.io.Serializable;

/**
 *  用户注册请求体
 */
@Data
public class UserRegisterRequest implements Serializable {

    private static final long serialVersionUID = -1796340682878515389L;

    String userAccount;
    String userPassword;
    String checkPassword;
    String planetCode;
}
