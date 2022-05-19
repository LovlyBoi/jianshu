# 陋书

## 启动项目

### 环境搭建

先将项目 clone 至本地，然后看一看有没有安装 Node 。

```shell
node --version
```

如果没有安装，那么请先安装 [Node.js](http://nodejs.cn/download/)。

确保有 Node 环境后，进入项目根目录，执行以下语句来安装项目依赖：

```shell
npm install
```

### dev环境启动

在根目录下执行以下语句，以启动开发服务器：

```shell
npm run serve
```

### 生产环境构建

在根目录下执行以下语句，以构建生产环境的 dist 文件：

```shell
npm run build
```

