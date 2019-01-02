* [SVG](#SVG)
  * [入门](#入门-感性的相识)
    * [HTML标签使用](#HTML标签使用)
    * [HTML中引用](#HTML中引用)
  * [深入](#深入-理性的相知)
  
# SVG
> &emsp;&emsp;SVG 是一种基于 XML 语法的图像格式，全称是可缩放矢量图（Scalable Vector Graphics）。jpg、png、gif等图像格式都是基于像素处理的，SVG 则是属于对图像的形状描述，所以它本质上是文本文件，体积较小，且不管放大多少倍都不会失真。<br/>
> &emsp;&emsp;SVG也提供了一些元素，用于定义圆形、矩形、简单或复杂的曲线，以及其他形状。一个简单的SVG文档由`<svg>`根元素和基本的形状元素构成。另外还有一个g元素，它用来把若干个基本形状编成一个组。<br/>

&emsp;
## 入门-感性的相识
#### HTML标签使用
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

效果：
<p align="center">
<img src="https://github.com/jimwong666/GithubFile/blob/master/shareWork/20190110-canvas%26svg/svg/images/img_1.png" alt="img_1">
<p/>
<br/>


**注意：**<br/>
&emsp;&emsp; **1.** SVG的元素和属性必须按标准格式书写，因为XML是区分大小写的（这一点和html不同）<br/>
&emsp;&emsp; **2.** SVG里的属性值必须用引号引起来，就算是数值也必须这样做。
<p/>
<br/>

-------------------------------------------------------------------------
#### HTML中引用
```html
    <object data="image.svg" type="image/svg+xml" />
```
```html
    <iframe src="image.svg"></iframe>
```
```html
    <image src="image.svg"></image>
```
而此时“image.svg”是什么文件(xml)呢？其实和原来的文件很像~
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
喏~! 就是这个~ 最上面多了两行奇怪的东西

-------------------------------------------------------------------------
## 深入-理性的相知
#### 坐标定位
> &emsp;&emsp;SVG使用的坐标系统或者说网格系统，和Canvas用的差不多（所有计算机绘图都差不多）。这种坐标系统是：以页面的左上角为(0,0)坐标原点，坐标以像素为单位，x轴正方向是向右，y轴正方向是向下。【注意】这和我们小时候所学的坐标系是不一样的。但是在HTML文档中，元素都是用这种方式定位的。

示意图：
<p align="center">
<img src="https://github.com/jimwong666/GithubFile/blob/master/shareWork/20190110-canvas%26svg/svg/images/img_2.png" alt="img_2">
<p/>
<br/>

所以我们定义一个矩形
```html
    <rect x="0" y="0" width="100" height="100" />
```
