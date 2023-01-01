/**
 * foo函数
 * @example
 * ```ts
 * const res = foo('xiaoming', 18); // => xiaoming18
 * ```
 * @namespace foobar
 * @param name
 * @param age
 * @returns
 */
export declare function foo(name: string, age: number): (name: string, age: number) => string;
/**
 * add 函数
 * @public
 * @namespace math
 */
export declare function add(a: number, b: number): number;
/**
 * 人这个类
 */
export declare class Person {
    name: string;
    constructor(name: string);
    getName(): string;
}
/**
 * @function
 */
export declare const arrowFunction: () => number;
/**
 * @function
 */
export declare const createdFunction: any;
/**
 * @constructor
 */
export declare const createdClass: any;
export declare const noCommentsFunction: any;
