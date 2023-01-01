/**
 * 格式化日期
  参数:
  str: 格式化日期的模板
  val: 想格式化的日期，当val为空，表示对当前时间进行格式化
 * @author 黄旭雯
 */
export declare function timeFormat(val: any, str?: string): string;
/**
 * 时间推移
 * @author 黄旭雯
 * @example
 * e.g. 函数参数：log: true 为当前时间增加，false 为当前时间减少; count: 推移数量; type: 年 月 日 等; str: 格式化日期的模板 默认 YYYY-MM-DD; val: 想格式化的日期，当val为空，表示对当前时间进行格式化
 * ```ts
 * timeCount('day',3,true,'YYYY-MM-DD','2022-12-03') => 2022-12-06
 * ```
 */
export declare function timeCount(val: any, type: any, count: number, log: boolean, str?: string): string;
/**
 * 字符串转时间
  参数:
  str: 字符串格式的时间
 * @author 黄旭雯
 */
export declare function strToDate(str: string): Date;
/**
 * 获取星期几
 * @author 黄旭雯
 * @example
 * e.g. 函数参数：val: 时间
 * ```ts
 * getWeekly('2022-12-21') => '星期三'
 * ```
 */
export declare function getWeekly(val: string): string;
/**
 * 判断两日期是否相同
  参数:
  date1: 第一个日期
  data2: 第二个日期
 * @author 黄旭雯
 */
export declare function isSameTime(date1: string, date2: string): boolean;
