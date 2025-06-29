#  Farmers Marketplace - 后端服务

这是一个基于 Node.js + Express 搭建的用户认证模块，属于 Farmers Marketplace 项目。当前实现的功能包括：

- 用户注册
- 用户登录（返回 JWT token）
- 获取当前用户信息（受保护）
- 更新用户资料（受保护）

---

##  技术栈

- Express.js
- MySQL
- JWT 身份验证
- bcrypt 密码加密
- dotenv 环境变量配置

---

##  项目结构
.
├── config/ # 数据库配置
├── controllers/ # 控制器（业务逻辑）
├── middleware/ # 中间件（认证等）
├── models/ # 数据模型（可选）
├── routes/ # 路由定义
├── server.js # 应用入口
├── .env.example # 环境变量示例
├── .gitignore
└── README.md
---

##  快速开始

1. 克隆项目：

```bash
git clone https://github.com/ZLADIMIY/cake-user-backend.git
cd farmers-backend
```
2. 安装依赖：
```
npm install
```
3. 新建 .env 文件（参照 .env.example）：：
```
cp .env.example .env
```
4.启动服务器： ：
```
node server.js
```
