# SVG
> &emsp;&emsp;SVG 是一种基于 XML 语法的图像格式，全称是可缩放矢量图（Scalable Vector Graphics）。jpg、png、gif等图像格式都是基于像素处理的，SVG 则是属于对图像的形状描述，所以它本质上是文本文件，体积较小，且不管放大多少倍都不会失真。<br/>
> &emsp;&emsp;SVG也提供了一些元素，用于定义圆形、矩形、简单或复杂的曲线，以及其他形状。一个简单的SVG文档由`<svg>`根元素和基本的形状元素构成。另外还有一个g元素，它用来把若干个基本形状编成一个组。<br/>

&emsp;
## 入门
#### 在HTML文件中直接使用：
```html

    <svg version="1.1"
        baseProfile="full"
	    width="300" height="200"
	    xmlns="http://www.w3.org/2000/svg">

        <rect width="100%" height="100%" fill="red" />

        <circle cx="150" cy="100" r="80" fill="green" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

    </svg>
```
![demo_1](https://github.com/jimwong666/GithubFile/blob/master/shareWork/20190110-canvas%26svg/svg/images/demo_1.png)

**注意：**<br/>
&emsp;&emsp; **1.** SVG的元素和属性必须按标准格式书写，因为XML是区分大小写的（这一点和html不同）<br/>
&emsp;&emsp; **2.** SVG里的属性值必须用引号引起来，就算是数值也必须这样做。<br/>

-------------------------------------------------------------------------
#### 在HTML文件中引用：
```html
    <object data="image.svg" type="image/svg+xml" />
```
```html
    <iframe src="image.svg"></iframe>
```
```html
    <image src="image.svg"></image>
```
而此时“image.svg”是什么文件呢？其实和原来的文件很像~
```xml
    <?xml version="1.0" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg version="1.1"
	    baseProfile="full"
	    width="300" height="200"
	    xmlns="http://www.w3.org/2000/svg">

	    <rect width="100%" height="100%" fill="red" />

	    <circle cx="150" cy="100" r="80" fill="green" />

	    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

    </svg>
```
喏~ 就是这个~

-------------------------------------------------------------------------