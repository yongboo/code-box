## my wheels

### 平时积攒的wheels

1. 本项目使用parcel进行打包、本地部署，请确定本地已经全局安装了parcel
```bash
npm install -g parcel-bundler
```

2. Parcel 可以使用任何类型的文件作为入口，但是最好还是使用 HTML 或 JavaScript 文件。如果在 HTML 中使用相对路径引入主要的 JavaScript 文件，Parcel 也将会对它进行处理将其替换为相对于输出文件的 URL 地址

3. Parcel 内置了一个当你改变文件时能够自动重新构建应用的开发服务器，而且为了实现快速开发，该开发服务器支持热模块替换。只需要在入口文件指出：
```bash
parcel index.html
或
parcel src/html/index.html
```

4. 现在在浏览器中打开 http://localhost:1234/。你也可以使用 -p <port number> 选项覆盖默认的端口。

