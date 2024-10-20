# usercenter
记录学习鱼皮用户中心的内容
https://blog.csdn.net/qq_38340581/article/details/115540868

https://pro.ant.design/zh-CN/docs/getting-started

[**2022-03-04 星球直播笔记-用户中心（上）**](https://www.yuque.com/docs/share/95fef44f-c2bd-494c-96d8-26fd30e8ace2?#)

[用户中心项目整理](https://articles.zsxq.com/id_5f36h45rq0io.html)

[Ant Design Pro 前端使用](ttps://pro.ant.design/zh-CN/docs/getting-started)

[MyBatis-Plus 后端使用](https://baomidou.com/)

# 创建 Ant Design Pro 前端项目

1. 创建项目
   * 进入D:\CODE\klc\usercenter>路径，执行  `yarn create umi myapp `命令创建项目
2. 安装依赖，根据package.json里的dependencies 安装依赖，cd ./myapp 对应命令是 `yarn`
3. 开启Umi UI , `yarn add @umijs/preset-ui -D`
4. 项目瘦身
   1. 在package.json找到 i18n-remove，执行 i18n-remove 脚本

```
create table user
(
    username     varchar(256)                       null comment '用户昵称',
    id           bigint auto_increment comment 'id' primary key,
    userAccount  varchar(256)                       null comment '账号',
    avatarUrl    varchar(1024)                      null comment '用户头像',
    gender       tinyint                            null comment '性别',
    userPassword varchar(512)                       not null comment '密码',
    iphone       varchar(128)                       null comment '电话',
    email        varchar(512)                       null comment '邮箱',
    userStatus   int      default 0                 null comment '状态-0正常',
    createTime   datetime default CURRENT_TIMESTAMP null comment '创建时间',
    updateTime   datetime default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP(),
    idDelete     tinyint  default 0                 not null comment '是否删除'
)comment '用户';
```



# 问题记录

## 解决yarn create umi myapp 的问题

整体执行过程：

```
Microsoft Windows [版本 10.0.19044.1645]
(c) Microsoft Corporation。保留所有权利。

D:\CODE\klc\usercenter>yarn create umi myapp
yarn create v1.22.18
[1/4] Resolving packages...
warning create-umi > sylvanas > @umijs/fabric > stylelint > @stylelint/postcss-markdown@0.36.2: Use the original unforked package instead: postcss-markdown
warning create-umi > yeoman-environment > globby > fast-glob > micromatch > snapdragon > source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
warning create-umi > yeoman-environment > globby > fast-glob > micromatch > snapdragon > source-map-resolve > resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
warning create-umi > yeoman-environment > globby > fast-glob > micromatch > snapdragon > source-map-resolve > source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
warning create-umi > yeoman-environment > globby > fast-glob > micromatch > snapdragon > source-map-resolve > urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
[2/4] Fetching packages...
error @typescript-eslint/eslint-plugin@5.20.0: The engine "node" is incompatible with this module. Expected version "^12.22.0 || ^14.17.0 || >=16.0.0". Got "14.15.0"
error Found incompatible module.
info Visit https://yarnpkg.com/en/docs/cli/create for documentation about this command.

D:\CODE\klc\usercenter>yarn config set ignore-engines true
yarn config v1.22.18
success Set "ignore-engines" to "true".
Done in 0.05s.

D:\CODE\klc\usercenter>yarn create umi myapp
yarn create v1.22.18
[1/4] Resolving packages...
warning create-umi > sylvanas > @umijs/fabric > stylelint > @stylelint/postcss-markdown@0.36.2: Use the original unforked package instead: postcss-markdown
warning create-umi > yeoman-environment > globby > fast-glob > micromatch > snapdragon > source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
warning create-umi > yeoman-environment > globby > fast-glob > micromatch > snapdragon > source-map-resolve > resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
warning create-umi > yeoman-environment > globby > fast-glob > micromatch > snapdragon > source-map-resolve > urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
warning create-umi > yeoman-environment > globby > fast-glob > micromatch > snapdragon > source-map-resolve > source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Installed "create-umi@0.27.0" with binaries:
      - create-umi
文件名、目录名或卷标语法不正确。
error Command failed.
Exit code: 1
Command: D:\software\nodejs\node_cache\bin\create-umi
Arguments: myapp
Directory: D:\CODE\klc\usercenter
Output:

info Visit https://yarnpkg.com/en/docs/cli/create for documentation about this command.

D:\CODE\klc\usercenter>yarn global bin
D:\software\nodejs\node_cache\bin

D:\CODE\klc\usercenter>yarn global dir
C:\Users\Jason\AppData\Local\Yarn\Data\global

D:\CODE\klc\usercenter>yarn config set global-folder "D:\software\yarn\yarn_global"
yarn config v1.22.18
success Set "global-folder" to "D:\\software\\yarn\\yarn_global".
Done in 0.05s.

D:\CODE\klc\usercenter>yarn config set cache-folder "D:\software\yarn\yarn_cache"
yarn config v1.22.18
success Set "cache-folder" to "D:\\software\\yarn\\yarn_cache".
Done in 0.05s.

D:\CODE\klc\usercenter>yarn create umi myapp
yarn create v1.22.18
[1/4] Resolving packages...
warning create-umi > sylvanas > @umijs/fabric > stylelint > @stylelint/postcss-markdown@0.36.2: Use the original unforked package instead: postcss-markdown
warning create-umi > yeoman-environment > globby > fast-glob > micromatch > snapdragon > source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
warning create-umi > yeoman-environment > globby > fast-glob > micromatch > snapdragon > source-map-resolve > source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
warning create-umi > yeoman-environment > globby > fast-glob > micromatch > snapdragon > source-map-resolve > resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
warning create-umi > yeoman-environment > globby > fast-glob > micromatch > snapdragon > source-map-resolve > urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
[2/4] Fetching packages...
info There appears to be trouble with your network connection. Retrying...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Installed "create-umi@0.27.0" with binaries:
      - create-umi
? Select the boilerplate type ant-design-pro
? 🤓 Which language do you want to use? TypeScript
? 🚀 Do you need all the blocks or a simple scaffold? simple
Cloning into 'myapp'...
remote: Enumerating objects: 208, done.
remote: Counting objects: 100% (208/208), done.
remote: Compressing objects: 100% (185/185), done.
remote: Total 208 (delta 34), reused 98 (delta 18), pack-reused 0R
Receiving objects: 100% (208/208), 117.71 KiB | 1.96 MiB/s, done.
Resolving deltas: 100% (34/34), done.
> 🚚 clone success
> Clean up...
📋 Copied to clipboard, just use Ctrl+V
✨ File Generate Done
Done in 485.69s.

D:\CODE\klc\usercenter>cd myapp

```

主要逻辑：

1. yarn config set ignore-engines true 解决 The engine "node" is incompatible with this module

2. yarn config set global-folder "D:\software\yarn\yarn_global"
   yarn config set cache-folder "D:\software\yarn\yarn_cache"

   解决 文件名、目录名或卷标语法不正确。

3. 最终选择 `ant-design-pro`，`TypeScript`，`simple`

```
yarn create umi myapp
yarn config set ignore-engines true
yarn config set global-folder "D:\software\yarn\yarn_global"
yarn config set cache-folder "D:\software\yarn\yarn_cache"
yarn create umi myapp
? Select the boilerplate type ant-design-pro
? 🤓 Which language do you want to use? TypeScript
? 🚀 Do you need all the blocks or a simple scaffold? simple
```

##  yarn 安装 报错：“info There appears to be trouble with your network connection. Retrying...“ 解决方案

```
# 把资源地址设置成npm淘宝源
npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist

# 运行删除代理命令：
npm config rm proxy 
npm config rm https-proxy
```

 

# 部署项目

前后端部署：

```
# 前端
docker build -t user-center-frontend:v0.0.1 .
docker run -p 81:80 -d user-center-frontend:v0.0.1

# 后端
docker build -t user-center-backend:v0.0.1 .
docker run -p 8081:8080 -d user-center-backend:v0.0.1

# 注意事项
需要在前端的nginx里配置api的反向代理

docker run -it -d -p 8082:8082 -v /home/klc/backend/drogon/:/home/ --name drogon_test docker.io/drogonframework/drogon /bin/bash

```

最终部署脚本参考

build文件夹下build.sh脚本

# 学习记录

```
伙伴匹配系统7 ———— 加入RedisTemplateConfig类
引入一个库时，先写测试类**
```


注意 post get 请求时，RequestParam  RequestBody 区别

谷歌浏览器开发者工具只能看到[object Object]，不能看到具体内容
底部框有问题
14期视频1小时13分


yarn安装问题
```
执行yarn命令报错解决方案“error An unexpected error occurred: "https://registry.npm.taobao.org/”
因为yarn的源是

https://registry.npm.taobao.org
而npm的源是

https://registry.npm.org
查看npm的源

npm config get registry
修改npm源
方法一：

npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist
方法二：

yarn config set registry https://registry.npm.taobao.org/
yarn config set disturl https://npm.taobao.org/dist
yarn config set sass-binary-site https://npm.taobao.org/mirrors/node-sass
添加 yarn源

yarn add taobao https://registry.npm.taobao.org/
代理问题：

yarn config rm proxy
yarn config  rm https-proxy
```

