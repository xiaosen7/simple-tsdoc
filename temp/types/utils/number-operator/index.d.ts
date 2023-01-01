/**
 * 数字操作类
 * @author 何源
 */
declare class NumberOperator {
    /**
     * 产生一个包括 `lower` 与 `upper` 之间的数。 如果只提供一个参数返回一个0到提供数之间的数
     * @param lower 随机数下限
     * @param upper 随机数上限
     * @param floating 指定是否返回浮点数
     * @returns 返回随机数
     * @author 何源
     * @example
     * 例子
     * ```ts
  import { numOperator } from '../..'
  numOperator.random(0, 5);
  // => an integer between 0 and 5
   
  numOperator.random(5);
  // => also an integer between 0 and 5
   
  numOperator.random(1.2, 5.2);
  // => a floating-point number between 1.2 and 5.2
     * ```
     */
    random(lower: number, upper: number, floating?: boolean): any;
    /**
     * 检查 n 是否在 `start` 与 `end` 之间，但不包括 `end。` 如果 `end` 没有指定，那么 `start` 设置为0
     * 如果 `start` 大于 `end`，那么参数会交换以便支持负范围
     * @param target 要检查的值
     * @param start 开始范围
     * @param end 结束范围
     * @returns 如果 `target` 在范围内 ，那么返回 `true`，否则返回 `false`
     * @author 何源
     * @example
     * 例子
     * ```ts
  import { numOperator } from '../..'
  numOperator.inRange(3, 2, 4);
  // => true
   
  numOperator.inRange(4, 8);
  // => true
   
  numOperator.inRange(4, 2);
  // => false
   
  numOperator.inRange(2, 2);
  // => false
   
  numOperator.inRange(1.2, 2);
  // => true
   
  numOperator.inRange(5.2, 4);
  // => false
   
  numOperator.inRange(-3, -2, -6);
  // => true
     * ```
     */
    inRange(target: number, start?: number, end?: number): any;
    /**
     * 返回限制在 `lower` 和 `upper` 之间的值
     * @param target 被限制的值
     * @param lower 下限
     * @param upper 上限
     * @returns 返回被限制的值
     * @author 何源
     * @example
     * 例子
     * ```ts
  import { numOperator } from '../..'
  numOperator.clamp(-10, -5, 5);
  // => -5
   
  numOperator.clamp(10, -5, 5);
  // => 5
     * ```
     */
    clamp(target: number, lower: number, upper: number): any;
    /**
     * 检查 `target` 是否为一个整数
     * @param target 要检查的值
     * @returns 如果 `target` 是一个整数，那么返回 `true`，否则返回 `false`
     * @author 何源
     * @example
     * 例子
     * ```ts
  import { numOperator } from '../..'
  numOperator.isInteger(3);
  // => true
   
  numOperator.isInteger(Number.MIN_VALUE);
  // => false
   
  numOperator.isInteger(Infinity);
  // => false
   
  numOperator.isInteger('3');
  // => false
     * ```
     */
    isInteger(target: number): any;
    /**
     * 检查 `target` 是否是 `NaN`
     * @note 这个方法基于`Number.isNaN`，和全局的`isNaN` 不同之处在于，全局的`isNaN`对 于 `undefined` 和其他非数字的值返回 `true`
     * @param target 要检查的值
     * @returns 如果 `target` 是一个 `NaN`，那么返回` true`，否则返回 `false`
     * @author 何源
     * @example
     * 例子
     * ```ts
  import { numOperator } from '../..'
  numOperator.isNaN(NaN);
  // => true
   
  numOperator.isNaN(new Number(NaN));
  // => true
   
  isNaN(undefined);
  // => true
   
  numOperator.isNaN(undefined);
  // => false
     * ```
     */
    isNaN(target: number): any;
    /**
     * 检查 `target` 是否是原始 `Number` 数值型 或者 对象
     * @note 注意: 要排除 `Infinity`, `-Infinity`, 以及 `NaN` 数值类型，用 `_.isFinite` 方法
     * @param target 要检查的值
     * @returns 如果 `target` 为一个数值，那么返回 `true`，否则返回 `false`
     * @author 何源
     * @example
     * 例子
     * ```ts
  import { numOperator } from '../..'
  numOperatorisNumber(3);
  // => true
   
  numOperatorisNumber(Number.MIN_VALUE);
  // => true
   
  numOperatorisNumber(Infinity);
  // => true
   
  numOperatorisNumber('3');
  // => false
     * ```
     */
    isNumber(target: number): any;
    /**
     * 检查 `target` 是否是原始有限数值
     * @note 注意: 这个方法基于 `Number.isFinite`
     * @param target 要检查的值
     * @returns 如果 `target` 是一个有限数值，那么返回 `true`，否则返回 `false`
     * @example
     * 例子
     * ```ts
  import { numOperator } from '../..'
  numOperator.isFinite(3);
  // => true
   
  numOperator.isFinite(Number.MIN_VALUE);
  // => true
   
  numOperator.isFinite(Infinity);
  // => false
   
  numOperator.isFinite('3');
  // => false
     * ```
     */
    isFinite(target: number): any;
    /**
     * 转换 `target` 为一个有限数字
     * @param target 要转换的值
     * @returns 返回转换后的数字
     * @example
     * 例子
     * ```ts
  import { numOperator } from '../..'
  numOperator.toFinite(3.2);
  // => 3.2
   
  numOperator.toFinite(Number.MIN_VALUE);
  // => 5e-324
   
  numOperator.toFinite(Infinity);
  // => 1.7976931348623157e+308
   
  numOperator.toFinite('3.2');
  // => 3.2
     * ```
     */
    toFinite(target: any): any;
    /**
     * 转换 `target` 为一个整数
     * @param target 要转换的值
     * @returns 返回转换后的整数
     * @example
     * 例子
     * ```ts
  import { numOperator } from '../..'
  numOperator.toInteger(3.2);
  // => 3
   
  numOperator.toInteger(Number.MIN_VALUE);
  // => 0
   
  numOperator.toInteger(Infinity);
  // => 1.7976931348623157e+308
   
  numOperator.toInteger('3.2');
  // => 3
     * ```
     */
    toInteger(target: number): any;
    /**
     * 转换 `target` 为安全整数。 安全整数可以用于比较和准确的表示
     * @param target 要转换的值
     * @returns 返回转换后的整数
     * @example
     * 例子
     * ```ts
  import { numOperator } from '../..'
  numOperator.toSafeInteger(3.2);
  // => 3
   
  numOperator.toSafeInteger(Number.MIN_VALUE);
  // => 0
   
  numOperator.toSafeInteger(Infinity);
  // => 9007199254740991
   
  numOperator.toSafeInteger('3.2');
  // => 3
     * ```
     */
    toSafeInteger(target: number): any;
    /**
     * 转换 `target`, 使其最多保留 `tail` 位整数
     * @param target 需要转换的值
     * @param tail 最多保留的位数, 默认最多保留两位小数
     * @returns 转化之后的 `target`
     * @example
     * 例子
     * ```ts
  import { numOperator } from '../..'
  numOperator.maxDecimal(123.54432134);
  // => 123.54
  
  numOperator.maxDecimal(123.54432134, 4);
  // => 123.5443
  
  numOperator.maxDecimal(123.5, 4);
  // => 123.5
     * ```
     */
    maxDecimal(target: number, tail?: 1 | 2 | 3 | 4 | 5): number;
}
export declare const numOperator: NumberOperator;
export {};
