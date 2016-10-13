# vue-note

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Setting Up the Project
```sh
$ npm install -g vue-cli
$ vue init Ivanwangcy/Vue2-Webpack-SPA-template vue-note
```
## 笔记功能
### 笔记列表页面
- 可以切换 `list/tile` 显示模式；
- 有新增笔记按钮，新增笔记跳至笔记编辑页面；
- 有搜索功能，搜索笔记，更新当前列表；
- 按照置顶和修改日期排序；
- 显示日期，上次修改天数；
- 有回到顶部按钮；
### 编辑笔记页面
- 返回到列表页按钮, 如果有内容保存笔记，空则不保存笔记；
- 删除笔记功能，删除当前笔记后，回到笔记列表页；
- 笔记插入图片功能；
- 当前行列表项切换功能；
- 笔记置顶功能；
