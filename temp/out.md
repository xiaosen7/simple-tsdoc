
### install


description：组件注册入口


kind：Function


parameters：

- app(App, necessary) 

旭雯


examples：
参数: val 指定数组数据


parameters：

- val(any[], necessary) 


### arrInSort


description：随机排列数组里的元素


kind：Function


author：黄旭雯


examples：
e.g. 函数参数：array 数组
```ts
arrInSort([1,2,3,4,5,6]) => [4,3,2,6,1,5]
```


parameters：

- arr(any[], necessary) 


### blobToText


description：将 Blob 对象按照一定的编码格式转换为文本字符串


kind：Function


author：王首人


parameters：

- blob(Blob, necessary) 


- encoding(string, optional) @author 王首人



### calcDaysBetweenTwoDate


description：计算两个日期之间间隔多少天


kind：Function


author：王首人


parameters：

- date1(Date, necessary) 


- date2(Date, necessary) @author 王首人



### floor


description：随机浮点数 默认左闭右开 范围0-1


kind：Function


author：黄旭雯


examples：
e.g. 函数参数：min 取值范围最小值; max 取值范围最大值; left 是否取到最小值: 1为取到, 0为取不到; right 是否取到最大值: 1为取到, 0为取不到
```ts
floor(0,1,1,0) 返回的数字在 [ 0, 1 ) 范围内
```


parameters：

- min(number, optional) 


- max(number, optional) 


- left(number, optional) 


- right(number, optional) 


### getDaysAgo


description：获得基于多少天前的日期对象


kind：Function


author：王首人


parameters：

- days(number, necessary) 


- current(Date, optional) 默认当前时间的日期对象  @author 王首人



### getLastMonth


description：获取上一个月份的日期对象


kind：Function


author：王首人


parameters：

- { current }({
    current?: Date;
}, optional) 


### getLastYear


description：获取去年时间点的日期对象


kind：Function


author：王首人

### getWeekly


description：获取星期几


kind：Function


author：黄旭雯


examples：
e.g. 函数参数：val: 时间
```ts
getWeekly('2022-12-21') => '星期三'
```


parameters：

- val(string, necessary) 


### getYesterday


description：获取昨天时间点的日期对象


kind：Function


author：王首人

### htmlStringToElement


description：将 html 字符串转为 htmlElement


kind：Function


parameters：

- html(string, necessary) 


### HXRequest


description：封装一个请求类,通过传入一个config生成对应的请求实例


kind：Class


author：何源


#### (constructor)


description：Constructs a new instance of the `HXRequest` class


kind：Constructor


author：何源


examples：
```ts
  const requestInstace = new HXRequest({
  baseUrl:'demo/',
  timeout: 10000,
  header: { id: 'demoId' },
  interceptorHooks:{
  requestInterceptor: (config: AxiosRequestConfig) => {
    // do something...
    return config
  },
  requestInterceptorCatch: (err: any) => err,
  responseInterceptor: (res: AxiosResponse) => res,
  responseInterceptorCatch: (err: any) => err,
  ...
  })
```


parameters：
- config 请求信息


#### createCancelToken


kind：Property


author：何源


examples：
requestInstence.get({ url: 'xxx, params, cancelToken: HXRequest.createCancelToken((cancel) => { this.needCancels.push(cancel) })


parameters：
- cancelFn 取消上一次请求


return：new axios.CancelToken(cancelFn)


#### delete


description：封装的 delete 方法


kind：Method


parameters：

- config(HXRequestConfig, necessary) 



#### get


description：封装的 get 方法


kind：Method


parameters：

- config(HXRequestConfig, necessary) 



#### instence


kind：Property


#### interceptorHooks


kind：Property


#### patch


description：封装的 patch 方法


kind：Method


parameters：

- config(HXRequestConfig, necessary) 



#### post


description：封装的 post 方法


kind：Method


parameters：

- config(HXRequestConfig, necessary) 



#### put


description：封装的 put 方法


kind：Method


parameters：

- config(HXRequestConfig, necessary) 



#### request


description：封装的 request 方法


kind：Method


parameters：

- config(HXRequestConfig, necessary) 



#### setupInterceptor


description：传入的示例拦截器会在此执行


kind：Method

### integer


description：随机整数 默认左闭右开 范围1-10


kind：Function


author：黄旭雯


examples：
e.g. 函数参数：min 取值范围最小值; max 取值范围最大值; left 是否取到最小值: 1为取到, 0为取不到; right 是否取到最大值: 1为取到, 0为取不到
```ts
integer(1,10,0,1) 返回的数字在 ( 1, 10 ] 范围内
```


parameters：

- min(number, optional) 


- max(number, optional) 


- left(number, optional) 


- right(number, optional) 


### integers


description：随机指定位数的数字


kind：Function


author：黄旭雯


examples：
e.g. 函数参数：n 数字的位数
```ts
integers(5) => 29019
```


parameters：

- n(number, necessary) 


### isArr


description：判断空数组


kind：Function


author：黄旭雯


parameters：

- arr([], necessary) 


### isEmpty


description：判断不同的数据类型的数据是否为空


kind：Function


author：黄旭雯


parameters：

- val(any, necessary) 


### isNum


description：判断数字


kind：Function


author：黄旭雯


parameters：

- num(number, necessary) 


### isObj


description：判断空对象


kind：Function


author：黄旭雯


parameters：

- obj(any, necessary) 


### isReg


description：判断正则


kind：Function


author：黄旭雯


examples：
e.g. 函数参数：str 字符串; val 判断类型
```ts
isReg('sdf21','letter') => false ( letter 判断是否全是英文)
```


parameters：

- str(string, necessary) 


- val(string, necessary) 


### isSameTime


description：判断两日期是否相同 参数: date1: 第一个日期 data2: 第二个日期


kind：Function


author：黄旭雯


parameters：

- date1(string, necessary) 


- date2(string, necessary) 


### isStr


description：判断空字符串


kind：Function


author：黄旭雯


parameters：

- str(string, necessary) 


### moreThanYesterday


description：返回日期是否超过了昨天


kind：Function


author：王首人


parameters：

- date(Date, necessary) @author 王首人



### numberAndLetter


description：随机指定位数的数字与字母混合字符串


kind：Function


author：黄旭雯


examples：
e.g. 函数参数：n 数字的位数
```ts
numberAndLetter(5) => 'S0K291'
```


parameters：

- n(number, necessary) 


### randomBoolean


description：随机true 或 false


kind：Function


author：黄旭雯

### SelectOptions


description：封装一个操作下拉框选项数组的类,传入一个下拉选项数组,可以为其添加一些便于操作的方法


kind：Class


author：何源


#### (constructor)


description：Constructs a new instance of the `SelectOptions` class


kind：Constructor


examples：
```ts
  import { SelectOptions } from '../..'
  const eventLevels = new SelectOptions([
    { label: '严重', value: 3, color: 'red' },
    { label: '关键', value: 2, color: 'orange' },
    { label: '警告', value: 1, color: 'darkgray' },
  ])
  eventLevels.options
  // =>  [
  //   { label: '严重', value: 3, color: 'red' },
  //   { label: '关键', value: 2, color: 'orange' },
  //   { label: '警告', value: 1, color: 'darkgray' },
  // ]
```


parameters：
- options 传入的下拉框数组
- fn 可以传入一个函数,参数为options,在创建实例的时候,该函数会被执行


#### findItemByLabel


description：通过label查找


kind：Method


author：何源


examples：
```ts
  import { SelectOptions } from '../..'
  const eventLevels = new SelectOptions([
    { label: '严重', value: 3, color: 'red' },
    { label: '关键', value: 2, color: 'orange' },
    { label: '警告', value: 1, color: 'darkgray' },
  ]);
  eventLevels.findItemByLabel('关键');
  // =>  {
  //   "res": {
  //       "label": "关键",
  //       "value": 2,
  //       "color": "orange"
  //   },
  //   "index": 1
  // }
```


parameters：

- label(keyof GlobalSelectOption, necessary) 需要查找的label





return：一个对象,包含查找到的项和该项在数组中的索引


#### findItemByVal


description：通过value查找


kind：Method


author：何源


examples：
```ts
  import { SelectOptions } from '../..'
  const eventLevels = new SelectOptions([
    { label: '严重', value: 3, color: 'red' },
    { label: '关键', value: 2, color: 'orange' },
    { label: '警告', value: 1, color: 'darkgray' },
  ]);
  eventLevels.findItemByVal(1);
  // =>  {
  //   "res": {
  //       "label": "警告",
  //       "value": 1,
  //       "color": "darkgray"
  //   },
  //   "index": 2
  // }
```


parameters：

- value(string | number, necessary) 需要查找的label





return：一个对象,包含查找到的项和该项在数组中的索引


#### getLabel


description：通过value值返回label值, 主要用于中文化后端返回的字段


kind：Method


examples：
```ts
  import { SelectOptions } from '../..'
  const eventLevels = new SelectOptions([
    { label: '严重', value: 3, color: 'red' },
    { label: '关键', value: 2, color: 'orange' },
    { label: '警告', value: 1, color: 'darkgray' },
  ]);
  eventLevels.getLabel(3);
  // => 严重
```


parameters：

- value(string | number, necessary) value字段值




- customLabel(string, optional) 如果没找到,则返回该值,默认为 '-'





return：对应的label值,如果没找到,则返回


#### getValue


description：通过label值返回value值


kind：Method


examples：
```ts
  import { SelectOptions } from '../..'
  const eventLevels = new SelectOptions([
    { label: '严重', value: 3, color: 'red' },
    { label: '关键', value: 2, color: 'orange' },
    { label: '警告', value: 1, color: 'darkgray' },
  ]);
  eventLevels.getValue('关键');
  // => 2
```


parameters：

- label(keyof GlobalSelectOption, necessary) label字段的值





return：对应的value值


#### options


kind：Property

### strInSort


description：随机排列提供的字符串


kind：Function


author：黄旭雯


examples：
e.g. 函数参数：str 字符串
```ts
arrInSort('sike23') => 2ki3es
```


parameters：

- val(string, necessary) 


### strToDate


description：字符串转时间 参数: str: 字符串格式的时间


kind：Function


author：黄旭雯


parameters：

- str(string, necessary) 


### theType


description：判断类型


kind：Function


author：黄旭雯


parameters：

- val(any, necessary) 


### timeCount


description：时间推移


kind：Function


author：黄旭雯


examples：
e.g. 函数参数：log: true 为当前时间增加，false 为当前时间减少; count: 推移数量; type: 年 月 日 等; str: 格式化日期的模板 默认 YYYY-MM-DD; val: 想格式化的日期，当val为空，表示对当前时间进行格式化
```ts
timeCount('day',3,true,'YYYY-MM-DD','2022-12-03') => 2022-12-06
```


parameters：

- val(any, necessary) 


- type(any, necessary) 


- count(number, necessary) 


- log(boolean, necessary) 


- str(string, optional) 


### timeFormat


description：格式化日期 参数: str: 格式化日期的模板 val: 想格式化的日期，当val为空，表示对当前时间进行格式化


kind：Function


author：黄旭雯


parameters：

- val(any, necessary) 


- str(string, optional) 


### withInstall


description：为组件添加一个install属性，可以让vue实例（app）安装这个组件


kind：Function


author：王首人


examples：
e.g. 假设现在有个叫Counter的Vue组件，要为其添加install属性，可以这样写
```ts
const NewCounter = withInstall(Counter);
NewCounter.install(app);
```


@public


parameters：

- comp(T, necessary) vue组件





return：返回传入的组件（被附加了install属性）
