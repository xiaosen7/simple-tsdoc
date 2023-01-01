/**
 * 判断类型
 * @author 黄旭雯
 */
export declare function theType(val: any): any;
/**
 * 判断空对象
 * @author 黄旭雯
 */
export declare function isObj(obj: any): boolean;
/**
 * 判断数字
 * @author 黄旭雯
 */
export declare function isNum(num: number): boolean | "NaN";
/**
 * 判断空数组
 * @author 黄旭雯
 */
export declare function isArr(arr: []): boolean;
/**
 * 判断空字符串
 * @author 黄旭雯
 */
export declare function isStr(str: string): boolean;
/**
 * 判断不同的数据类型的数据是否为空
 * @author 黄旭雯
 */
export declare function isEmpty(val: any): boolean;
/**
 * 判断正则
 * @author 黄旭雯
 * @example
 * e.g. 函数参数：str 字符串; val 判断类型
 * ```ts
 * isReg('sdf21','letter') => false ( letter 判断是否全是英文)
 * ```
 */
export declare function isReg(str: string, val: string): boolean;
