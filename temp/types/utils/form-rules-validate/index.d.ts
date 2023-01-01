/**
 * 表单规则校验类
 */
declare class FormRulesValidate {
    /**
     * 判断 `target` 是否是一个常规的有效电话号码格式
     * @param target 要判断的值
     * @returns 如果是一个有效电话号码格式, 返回 `true`, 反之返回 `false`
     * @example
     * 例子
     * ```ts
  import { validateOperator } from '../..'
  validateOperator.isPhoneNunber('110323');
  // => false
     * ```
     */
    isPhoneNunber(target: string | number): boolean;
    /**
     * 判断 `target` 是否是一个常规的有效邮件格式
     * @param target 要判断的值
     * @returns 如果是一个常规的有效邮件格式, 返回 `true`, 反之返回 `false`
     * @example
     * 例子
     * ```ts
  import { validateOperator } from '../..'
  validateOperator.isEmail('110323@qq.com');
  // => true
     * ```
     */
    isEmail(target: string): boolean;
    /**
     * 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
     * @param target 要判断的值
     * @returns 如果符合规则, 返回 `true`, 反之返回 `false`
     * @example
     * 例子
     * ```ts
  import { validateOperator } from '../..'
  validateOperator.isStrongPassword('1232fsd')
  // => false
     * ```
     */
    isStrongPassword(target: string): boolean;
    /**
     * 用户名校验，4到16位（字母，数字，下划线，减号）
     * @param target 要判断的值
     * @returns 如果符合规则, 返回 `true`, 反之返回 `false`
     * @example
     * 例子
     * ```ts
  import { validateOperator } from '../..'
  validateOperator.isUserName('32132dsa');
  // => true
     * ```
     */
    isUserName(target: string): boolean;
    /**
     * 身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
     * @param target 要判断的值
     * @returns 如果符合规则, 返回 `true`, 反之返回 `false`
     * @example
     * 例子
     * ```ts
  import { validateOperator } from '../..'
  validateOperator.isIdNumber('50038119691029439x')
  // => true
     * ```
     */
    isIdNumber(target: string): boolean;
    /**
     * 是否是中文/汉字
     * @param target 要判断的值
     * @returns 如果符合规则, 返回 `true`, 反之返回 `false`
     * @example
     * 例子
     * ```ts
  import { validateOperator } from '../..'
  validateOperator.isChinese('你好')
  // => true
     * ```
     */
    isChinese(target: string): boolean;
    /**
     * 是否是中文姓名
     * @param target 要判断的值
     * @returns 如果符合规则, 返回 `true`, 反之返回 `false`
     * @example
     * 例子
     * ```ts
  import { validateOperator } from '../..'
  validateOperator.isChineseName('罗浮·特洛夫斯基');
  // => true
     * ```
     */
    isChineseName(target: string): boolean;
}
export declare const validateOperator: FormRulesValidate;
export {};
