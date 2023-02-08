# H5Data Snippet

## Features

- SchemaPage页面代码块
- 小表单代码块
- 待开发...

## 创建项目

https://code.visualstudio.com/api/get-started/your-first-extension

### 安装脚手架


```shell
npm install -g yo generator-code
```

### 脚手架生成项目

```shell
yo code
```

![](https://cdn.jsdelivr.net/gh/lzy940610/assets/img/202301060950180.webp)


### 测试插件是否生效

进入项目后按下 `F5` 启动插件 会弹出来一个插件调试面板

再通过 `⇧⌘P` 唤起命令行面板 执行插件提供的能力

![](https://cdn.jsdelivr.net/gh/lzy940610/assets/img/202301060954452.webp)

## 开发/调试

[开发插件文档](https://code.visualstudio.com/api/get-started/your-first-extension#developing-the-extension)

1. 在`extension.ts` 文件中 将 "Hello World from HelloWorld!" 修改为 "Hello VS Code"
2. 进入插件调试窗口 在命令行面板中搜索 `reload` 找到执行 `Developer:Reload Window` 重载窗口
3. 再次运行 `Hello World` 指令 看提示文案是否改变

![](https://cdn.jsdelivr.net/gh/lzy940610/assets/img/202301061005625.webp)


[调试文档](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)

<video loop="" muted="" playsinline="" controls="" title="Reload VS Code extension video">
  <source src="https://code.visualstudio.com/api/get-started/your-first-extension/reload.mp4" type="video/mp4">
</video>

### 插件剖析 Extension Anatomy

However, let's focus on `package.json` and `extension.ts`, which are essential to understanding the `Hello World` extension


####  [Extension Manifest](https://code.visualstudio.com/api/get-started/extension-anatomy#extension-manifest)

Each VS Code extension must have a `package.json` as its [Extension Manifest](https://code.visualstudio.com/api/references/extension-manifest).

Here are some most important fields

-   `name` and `publisher`: VS Code uses `<publisher>.<name>` as a unique ID for the extension. For example, the Hello World sample has the ID `vscode-samples.helloworld-sample`. VS Code uses the ID to uniquely identify your extension.
-   `main`: The extension entry point.
-   `activationEvents` and `contributes`: [Activation Events](https://code.visualstudio.com/api/references/activation-events) and [Contribution Points](https://code.visualstudio.com/api/references/contribution-points).
-   `engines.vscode`: This specifies the minimum version of VS Code API that the extension depends on.


#### [Extension Entry File](https://code.visualstudio.com/api/get-started/extension-anatomy#extension-entry-file)


The extension entry file exports two functions, `activate` and `deactivate`. `activate` is executed when your registered **Activation Event** happens. `deactivate` gives you a chance to clean up before your extension becomes deactivated

### Wrapping Up



### 用户体验指南 UX Guidelines

https://code.visualstudio.com/api/ux-guidelines/overview

### 语言插件开发

[文档](https://code.visualstudio.com/api/language-extensions/snippet-guide)

使用 `yo code` 新建一个 `New COde Snippets` 快速生成一个项目脚手架

![](https://cdn.jsdelivr.net/gh/lzy940610/assets/img/202301071554471.webp)




## 构建打包

[构建打包插件文档](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions)

当你想本地打包或者单独分发而不是上架插件市场的时候


[vsce](https://github.com/microsoft/vscode-vsce), short for "Visual Studio Code Extensions", is a command-line tool for packaging, publishing and managing VS Code extensions

```shell
npm install -g @vscode/vsce
```

For extension authors, they can run `vsce package` in extension root folder to create such VSIX files.

For users who receive such a VSIX file, they can install the extension with `code --install-extension my-extension-0.0.1.vsix`.

```shell
vsce package
```

构建成功 ✅ 产出一份vsix文件产物

![](https://cdn.jsdelivr.net/gh/lzy940610/assets/img/202301072045672.webp)

#### 本地安装插件

```shell
code --install-extension my-extension-0.0.1.vsix
```


![](https://cdn.jsdelivr.net/gh/lzy940610/assets/img/202301072049109.webp)



![](https://cdn.jsdelivr.net/gh/lzy940610/assets/img/202301072106456.webp)

代码块生效了

![](https://cdn.jsdelivr.net/gh/lzy940610/assets/img/202301072107399.webp)

#### 应用市场下载安装


##### 预发布

For extensions to publish a pre-release version, a `pre-release` flag needs to be passed in the package and publish step

```shell
vsce package --pre-release
vsce publish --pre-release
```

##### 正式发布


```shell
vsce package
vsce publish
```

应用市场发布完成 ✅

![](https://cdn.jsdelivr.net/gh/lzy940610/assets/img/202301072109228.webp)

##### 插件升级版本

[文档](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#autoincrementing-the-extension-version)

You can auto-increment an extension's version number when you publish by specifying the [SemVer](https://semver.org/) compatible number to increment: `major`, `minor`, or `patch`

```shell
# Patch 
vsce publish patch
# Feature 
vsce publish minor
# Breaking Change 
vsce publish major
```

### 创建Azure Devops 账号 管理插件

[获取个人Token文档](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#get-a-personal-access-token)

[创建账号地址](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/create-organization?view=azure-devops)

Token: `hit5ovvf7kmahtzbduwoat7dkpwhj5uawm7khbzzqqicokj22cvq`

![](https://cdn.jsdelivr.net/gh/lzy940610/assets/img/202301071720583.webp)

#### 创建发布者

A **publisher** is an identity who can publish extensions to the Visual Studio Code Marketplace. Every extension needs to include a `publisher` name in its [`package.json` file](https://code.visualstudio.com/api/references/extension-manifest).

You can create a new publisher through the Visual Studio Marketplace publisher [management page](https://marketplace.visualstudio.com/manage). You need to login in with the same Microsoft account you used to create the [Personal Access Token](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#get-a-personal-access-token) in the previous section.

创建好了 https://marketplace.visualstudio.com/manage/publishers/lzy940610

![](https://cdn.jsdelivr.net/gh/lzy940610/assets/img/202301071740937.webp)

登陆成功

```
vsce login <publisher name>
```

![](https://cdn.jsdelivr.net/gh/lzy940610/assets/img/202301071741381.webp)

## 测试 & 发布

[测试插件文档](https://code.visualstudio.com/api/working-with-extensions/testing-extension)

因为我这里是纯代码片段没有啥逻辑 就不用写 集成测试和单元测试了 
如果是包含逻辑的插件肯定还是要写单元测试的

[发布插件文档](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)

Once you have made a high-quality extension, you can publish it to the [VS Code Extension Marketplace](https://marketplace.visualstudio.com/vscode) so others can find, download, and use your extension. Alternatively, you can [package](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions) an extension into the installable VSIX format and share it with other users

### 新发布流程

```shell
# step1: 手动升级插件版本
npm version patch|minor|major
# step2：手动构建打包插件
vsce package
# step3: 手动发布插件
vsce publish
```

	如果不然这个顺序的话发布实际还是拿的老的构建产物

![](https://cdn.jsdelivr.net/gh/lzy940610/assets/img/202301072148439.webp)

## 更新插件

## [References](https://code.visualstudio.com/api/references/extension-manifest#references-articles)

### [Extension manifest](https://code.visualstudio.com/api/references/extension-manifest)



