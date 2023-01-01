/**
 * 字符串操作类
 * @author 何源
 */
declare class StringOperator {
    /**
     * 转换字符串 target 首字母为大写，剩下为小写
     * @param target 要大写开头的字符串
     * @returns 返回大写开头的字符串
     * @author 何源
     * @example
     * 例子
     * ```ts
  import { strOperator } from '../..'
  strOperator.capitalize('FRED');
  // => 'Fred'
  
  strOperator.capitalize('demo_txt')
  // => 'Demo_txt'
     * ```
     */
    capitalize(target: string): any;
    /**
     * 转换字符串 target 为小驼峰写法
     * @param target 要转换的字符串
     * @returns 返回驼峰写法的字符串
     * @author 何源
     * @example
     * 例子
     * ```ts
  import { strOperator } from '../..'
  strOperator.camelCase('Foo Bar');
  // => 'fooBar'
   
  strOperator.camelCase('--foo-bar--');
  // => 'fooBar'
   
  strOperator.camelCase('__FOO_BAR__');
  // => 'fooBar'
     * ```
     */
    camelCase(target: string): any;
    /**
     * 检查字符串 target 是否以给定的 aim 字符串结尾
     * @param target 要检索的字符串
     * @param aim 要检索字符
     * @param position 检索的位置
     * @returns 如果字符串string以target字符串结尾，那么返回 true，否则返回 false
     * @example
     * 例子
     * ```ts
  import { strOperator } from '../..'
  strOperator.endsWith('abc', 'c');
  // => true
   
  strOperator.endsWith('abc', 'b');
  // => false
   
  strOperator.endsWith('abc', 'b', 2);
  // => true
     * ```
     */
    endsWith(target: string, aim: string, position?: number): any;
    /**
     * 转换字符串 target 为 kebab case(中划线连接)
     * @param target 要转换的字符串
     * @returns 返回转换后的字符串
     * @example
     * 例子
     * ```ts
  import { strOperator } from '../..'
  strOperator.kebabCase('Foo Bar');
  // => 'foo-bar'
   
  strOperator.kebabCase('fooBar');
  // => 'foo-bar'
   
  strOperator.kebabCase('__FOO_BAR__');
  // => 'foo-bar'
     * ```
     */
    kebabCase(target: string): any;
    /**
     * 转换字符串 target 以空格分开单词，并转换为小写
     * @param target 要转换的字符串
     * @returns 返回转换后的字符串
     * @example
     * 例子
     * ```ts
  import { strOperator } from '../..'
  strOperator.lowerCase('--Foo-Bar--');
  // => 'foo bar'
   
  strOperator.lowerCase('fooBar');
  // => 'foo bar'
   
  strOperator.lowerCase('__FOO_BAR__');
  // => 'foo bar'
     * ```
     */
    lowerCase(target: string): any;
    /**
     * 转换字符串 target 以空格分开单词，并转换为大写
     * @param target 要转换的字符串
     * @returns 返回转换后的字符串
     * @example
     * 例子
     * ```ts
  import { strOperator } from '../..'
  strOperator.upperCase('--foo-bar');
  // => 'FOO BAR'
   
  strOperator.upperCase('fooBar');
  // => 'FOO BAR'
   
  strOperator.upperCase('__foo_bar__');
  // => 'FOO BAR'
     * ```
     */
    upperCase(target: string): any;
    /**
     * 转换字符串 target 的首字母为小写。
     * @param target 要转换的字符串
     * @returns 返回转换后的字符串
     * @example
     * 例子
     * ```ts
  import { strOperator } from '../..'
  strOperator.lowerFirst('Fred');
  // => 'fred'
   
  strOperator.lowerFirst('FRED');
  // => 'fRED'
     * ```
     */
    lowerFirst(target: string): any;
    /**
     * 转换字符串 target 的首字母为大写。
     * @param target 要转换的字符串
     * @returns 返回转换后的字符串
     * @example
     * 例子
     * ```ts
  import { strOperator } from '../..'
  strOperator.upperFirst('fred');
  // => 'Fred'
   
  strOperator.upperFirst('FRED');
  // => 'FRED'
     * ```
     */
    upperFirst(target: string): any;
    /**
     * 转换字符串 target 为snake case(下划线连接)
     * @param target 要转换的字符串
     * @returns 返回转换后的字符串
     * @example
     * 例子
     * ```ts
  import { strOperator } from '../..'
  strOperator.snakeCase('Foo Bar');
  // => 'foo_bar'
   
  strOperator.snakeCase('fooBar');
  // => 'foo_bar'
   
  strOperator.snakeCase('--FOO-BAR--');
  // => 'foo_bar'
     * ```
     */
    snakeCase(target: string): any;
    /**
     * 转换字符串 target 为小写
     * @param target 要转换的字符串
     * @returns 返回转换后的字符串
     * @example
     * 例子
     * ```ts
  import { strOperator } from '../..'
  strOperator.toLower('--Foo-Bar--');
  // => '--foo-bar--'
   
  strOperator.toLower('fooBar');
  // => 'foobar'
   
  strOperator.toLower('__FOO_BAR__');
  // => '__foo_bar__'
     * ```
     */
    toLower(target: string): any;
    /**
     * 转换字符串 target 为大写
     * @param target 要转换的字符串
     * @returns 返回转换后的字符串
     * @example
     * 例子
     * ```ts
  import { strOperator } from '../..'
  strOperator.toUpper('--foo-bar--');
  // => '--FOO-BAR--'
   
  strOperator.toUpper('fooBar');
  // => 'FOOBAR'
   
  strOperator.toUpper('__foo_bar__');
  // => '__FOO_BAR__'
     * ```
     */
    toUpper(target: string): any;
    /**
     * 截断 target 字符串，如果字符串超出了限定的最大值。 被截断的字符串后面会以 omission 代替，omission 默认是 "..."
     * @param target 要转换的字符串
     * @param options 选项对象
     * @param options.length 允许的最大长度
     * @param options.omission 超出后的代替字符
     * @param options.separator 截断点
     * @returns 返回转换后的字符串
     * @example
     * 例子
     * ```ts
  import { strOperator } from '../..'
  strOperator.truncate('hi-diddly-ho there, neighborino');
  // => 'hi-diddly-ho there, neighbo...'
   
  strOperator.truncate('hi-diddly-ho there, neighborino', {
    'length': 24,
    'separator': ' '
  });
  // => 'hi-diddly-ho there,...'
   
  strOperator.truncate('hi-diddly-ho there, neighborino', {
    'length': 24,
    'separator': /,? +/
  });
  // => 'hi-diddly-ho there...'
   
  strOperator.truncate('hi-diddly-ho there, neighborino', {
    'omission': ' [...]'
  });
  // => 'hi-diddly-ho there, neig [...]'
     * ```
     */
    truncate(target: string, options: TruncateOptions): any;
    /**
     * AES 加密
     * @param word 需要加密的字符串
     * @param key 秘钥,不传则使用默认秘钥,必须是 8/16/32位字符
     * @returns 密文
     * @example
     * 例子
     * ```ts
  import { strOperator } from '../..'
  const password = 'demo123';
  const secretText = strOperator.encrypt(password, 'my secret is 16');
  console.log(secretText);
  // => U2FsdGVkX19WIHdAeI2mlna12gk/xmWa
  
  console.log(strOperator.decrypt(secretText, 'my secret is 16'));
  // => demo123
     * ```
     */
    encrypt(word: string, key: string): any;
    /**
     * AES 解密
     * @param word 需要解密的密文
     * @param key 秘钥,不传则使用默认秘钥, 必须是 8/16/32位字符
     * @returns 解密之后的字符串
     * @example
     * 例子
     * ```ts
  import { strOperator } from '../..'
  const password = 'demo123';
  const secretText = strOperator.encrypt(password, 'my secret is 16');
  console.log(secretText);
  // => U2FsdGVkX19WIHdAeI2mlna12gk/xmWa
  
  console.log(strOperator.decrypt(secretText, 'my secret is 16'));
  // => demo123
     * ```
     */
    decrypt(word: string, key?: string): any;
}
interface TruncateOptions {
    length?: number;
    omission?: string;
    separator?: RegExp | string;
}
export declare const strOperator: StringOperator;
export {};
