# 用户中心管理系统文档

> 做出一个简易的管理系统。
目标：完整了解做项目的思路，接触一些企业级的开发技术，让大家之后都能轻松做出管理系统！

# 1. 需求分析及功能介绍

## 1.1 需求分析

1. 提供简单的用户 注册/登陆/退出功能
2. 用户管理
   * 管理员
      * 用户管理界面：对其他用户可以进行查询或修改
   * 普通用户
      * 基本信息界面
3. 用户校验
   * 限制用户的加入(内部人员才能加入)

## 1.2 功能介绍

1. 提供内部成员的登录，便于操作自己的信息
2. 管理员用户可以对所有成员进行管理


# 2. 技术选型/技术栈

## 2.1 前端

三件套 + React + 组件库 Ant Design + Umi + Ant Design Pro（现成的管理系统）

## 2.2 后端

- java
- Spring（依赖注入框架，帮助你管理 Java 对象，集成一些其他的内容）
- SpringMVC 框架，提供接口访问、restful接口等能力）
- MyBatis（Java 操作数据库的框架，持久层框架，对 jdbc 的封装）
- MyBatis-Plus（对 mybatis 的增强，不用写 sql 也能实现增删改查）
- SpringBoot（**快速启动** / 快速集成项目。不用自己管理 spring 配置，不用自己整合各种框架）
- junit 单元测试库
- MySQL 数据库

部署：服务器 / 容器（平台）

## 2.3 库表设计

**用户表 user**

- id（主键）bigint
- username 昵称  varchar
- userAccount 登录账号 
- avatarUrl 头像 varchar
- gender 性别 tinyint
- userPassword 密码  varchar
- phone 电话 varchar
- email 邮箱 varchar
- userStatus 用户状态 int  0 - 正常 
- createTime 创建时间（数据插入时间）datetime
- updateTime 更新时间（数据更新时间）datetime
- isDelete 是否删除 0 1（逻辑删除）tinyint
- userRole 用户角色 0 - 普通用户 1 - 管理员

# 4. 前端开发

## 4.1 项目初始化 

**创建 Ant Design Pro 前端项目**

1. 创建项目
   * 进入D:\CODE\klc\usercenter>路径，执行  `yarn create umi myapp `命令创建项目
2. 安装依赖，根据package.json里的dependencies 安装依赖，cd ./myapp 对应命令是 `yarn`
3. 开启Umi UI , `yarn add @umijs/preset-ui -D`
4. 项目瘦身
   1. 在package.json找到 i18n-remove，执行 i18n-remove 脚本

## 4.2 权限管理

**Ant Design Pro（Umi 框架）权限管理**

- app.tsx：项目全局入口文件，定义了整个项目中使用的公共数据（比如用户信息）
- access.ts：控制用户的访问权限

获取初始状态流程：首次访问页面（刷新页面），进入 app.tsx，执行 getInitialState 方法，该方法的返回值就是全局可用的状态值。

## 4.3 组件使用

**ProComponents 高级表单**

1. 通过 columns 定义表格有哪些列
2. columns 属性
   - dataIndex 对应返回数据对象的属性
   - title 表格列名
   - copyable 是否允许复制
   - ellipsis 是否允许缩略
   - valueType：用于声明这一列的类型（dateTime、select）

## 4.4 框架关系

* Ant Design 组件库 => 基于 React 实现

* Ant Design Procomponents => 基于 Ant Design 实现

* Ant Design Pro 后台管理系统 => 基于 Ant Design + React + Ant Design Procomponents + 其他的库实现

## 4.5 前后端交互

前端需要向后端发送请求才能获取数据 / 执行操作。

怎么发请求：前端使用 ajax 来请求后端

**前端请求库及封装关系**

- axios 封装了 ajax

- request 是 ant design 项目又封装了一次

追踪 request 源码：用到了 umi 的插件、requestConfig 配置文件

# 5. 后端开发

## 5.1 基础内容介绍

**3 种初始化 Java 项目的方式**

1. GitHub 搜现成的代码
2. SpringBoot 官方的模板生成器（https://start.spring.io/）
3. 直接在 IDEA 开发工具中生成  ✔

如果要引入 java 的包，可以去 maven 中心仓库寻找（http://mvnrepository.com/）

**自动生成器的使用**

MyBatisX 插件，自动根据数据库生成，从而提高开发效率：

- domain：实体对象
- mapper：操作数据库的对象
- mapper.xml：定义了 mapper 对象和数据库的关联，可以在里面自己写 SQL
- service：包含常用的增删改查
- serviceImpl：具体实现 service

**tips:**

1. 序列化的用法
2. 以debug模式启动，调试接口函数
3. 开启mybatis-plus的逻辑删除，默认会将删除转换成更新，isDelete字段来屏蔽查询
4. 用户管理接口鉴权
5. 不要过渡设计
6. 前端通过路由代理，解决跨域访问问题
7. 前后端都需要做数据校验，避免不了其他方式侵入
8. 写代码流程
   1. 先做设计
   2. 代码实现
   3. 持续优化！！！（复用代码、提取公共逻辑 / 常量）


## 5.2 详细设计

### 5.2.1 用户注册

1. 用户在前端输入账户和密码、以及校验码
2. 校验用户的账户、密码、校验密码，是否符合要求
   1. 非空
   2. 账户长度 **不小于** 4 位
   3. 密码就 **不小于** 8 位
   4. 账户不能重复
   5. 账户不包含特殊字符
   6. 密码和校验密码相同
3. 对密码进行**加密存储**
4. 向数据库插入用户数据

### 5.2.2 用户登录

**接口设计**

接受参数：用户账户、密码

请求类型：POST 

请求体：JSON 格式的数据

> 请求参数很长时不建议用 get

返回值：用户信息（ **脱敏** ）

**登录逻辑**

1. 校验用户账户和密码是否合法
   1. 非空
   2. 账户长度不小于 4 位
   3. 密码就不小于 8 位
   4. 账户不包含特殊字符

2. 校验密码是否输入正确，与数据库中的加密密码作对比

3. 用户信息脱敏，隐藏敏感信息，防止数据库中的字段泄露

4. 记录用户的登录态（session），将其存到服务器上（用后端 SpringBoot 框架封装的服务器 tomcat 去记录）

   cookie

5. 返回脱敏后的用户信息


## 5.3 功能实现

1. 控制层 Controller 封装请求

application.yml 指定接口全局路径前缀：

```
servlet:
  context-path: /api
```

2. 控制器注解：

``` 
@RestController 适用于编写 restful 风格的 api，返回值默认为 json 类型
```

3. 校验逻辑代码位置

- controller 层倾向于对请求参数本身的校验，不涉及业务逻辑本身（越少越好）
- service 层是对业务逻辑的校验（有可能被 controller 之外的类调用）


4. 用户管理

接口设计关键：必须鉴权！！！

1. 查询用户（允许根据用户名查询）
2. 删除用户

## 5.4 后端优化

### 通用返回对象

目的：给对象补充一些信息，告诉前端这个请求在业务层面上是成功还是失败

200、404、500、502、503

```json
{
    "name": "kkkk"
}

↓

// 成功
{
    "code": 0 // 业务状态码
    "data": {
        "name": "yupi"
    },
	"message": "ok"
}

// 错误
{
    "code": 50001 // 业务状态码
    "data": null
	 "message": "用户操作异常、xxx"
}
```

自定义错误码，返回类支持返回正常和错误

### 封装全局异常处理器

#### 实现

1. 定义业务异常类

   1. 相对于 java 的异常类，支持更多字段
   2. 自定义构造函数，更灵活 / 快捷的设置字段
2. 编写全局异常处理器（利用 Spring AOP，在调用方法前后进行额外的处理）

#### 作用

1. 捕获代码中所有的异常，内部消化，让前端得到更详细的业务报错 / 信息
2. 同时屏蔽掉项目框架本身的异常（不暴露服务器内部状态）
3. 集中处理，比如记录日志

### 全局响应处理

应用场景：需要对接口的 **通用响应** 进行统一处理，比如从 response 中取出 data；或者根据 code 去集中处理错误，比如用户未登录、没权限之类的。

优势：不用在每个接口请求中都去写相同的逻辑

实现：参考你用的请求封装工具的官方文档，比如 umi-request（https://github.com/umijs/umi-request#interceptor、https://blog.csdn.net/huantai3334/article/details/116780020）。如果你用 **axios**，参考 axios 的文档。

创建新的文件，在该文件中配置一个全局请求类。在发送请求时，使用我们自己的定义的全局请求类。


## 项目优化点

1. 功能扩充
   1. 管理员创建用户、修改用户信息、删除用户
   2. 上传头像
   3. 按照更多的条件去查询用户
   4. 更改权限
2. 修改 Bug
3. 项目登录改为分布式 session（单点登录 - redis）
4. 通用性
   1. set-cookie domain 域名更通用，比如改为 *.xxx.com
   2. 把用户管理系统 => 用户中心（之后所有的服务都请求这个后端）
5. 后台添加全局请求拦截器（统一去判断用户权限、统一记录请求日志）
