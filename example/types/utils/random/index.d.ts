/**
 * 随机整数 默认左闭右开 范围1-10
 * @author 黄旭雯
 * @example
 * e.g. 函数参数：min 取值范围最小值; max 取值范围最大值; left 是否取到最小值: 1为取到, 0为取不到; right 是否取到最大值: 1为取到, 0为取不到
 * ```ts
 * integer(1,10,0,1) 返回的数字在 ( 1, 10 ] 范围内
 * ```
 */
export declare function integer(min?: number, max?: number, left?: number, right?: number): number;
/**
 * 随机浮点数 默认左闭右开 范围0-1
 * @author 黄旭雯
 * @example
 * e.g. 函数参数：min 取值范围最小值; max 取值范围最大值; left 是否取到最小值: 1为取到, 0为取不到; right 是否取到最大值: 1为取到, 0为取不到
 * ```ts
 * floor(0,1,1,0) 返回的数字在 [ 0, 1 ) 范围内
 * ```
 */
export declare function floor(min?: number, max?: number, left?: number, right?: number): number;
/**
 * 指定数组数据随机取出其中一个值
 * @author 黄旭雯
 * @example
 * 参数: val 指定数组数据
 */
export declare function appoint(val: any[]): any;
/**
 * 随机指定位数的数字
 * @author 黄旭雯
 * @example
 * e.g. 函数参数：n 数字的位数
 * ```ts
 * integers(5) => 29019
 * ```
 */
export declare function integers(n: number): number;
/**
 * 随机true 或 false
 * @author 黄旭雯
 */
export declare function randomBoolean(): any;
/**
 * 随机指定位数的数字与字母混合字符串
 * @author 黄旭雯
 * @example
 * e.g. 函数参数：n 数字的位数
 * ```ts
 * numberAndLetter(5) => 'S0K291'
 * ```
 */
export declare function numberAndLetter(n: number): string;
/**
 * 随机排列数组里的元素
 * @author 黄旭雯
 * @example
 * e.g. 函数参数：array 数组
 * ```ts
 * arrInSort([1,2,3,4,5,6]) => [4,3,2,6,1,5]
 * ```
 */
export declare function arrInSort(arr: any[]): any[];
/**
 * 随机排列提供的字符串
 * @author 黄旭雯
 * @example
 * e.g. 函数参数：str 字符串
 * ```ts
 * arrInSort('sike23') => 2ki3es
 * ```
 */
export declare function strInSort(val: string): string;
