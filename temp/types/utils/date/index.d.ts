/**
 * 获取上一个月份的日期对象
 * @author 王首人
 */
export declare function getLastMonth({ current }?: {
    current?: Date;
}): Date;
/**
 * 获取昨天时间点的日期对象
 * @author 王首人
 */
export declare function getYesterday(): Date;
/**
 * 获得基于多少天前的日期对象
 * @param days
 * @param current 默认当前时间的日期对象
 * @author 王首人
 */
export declare function getDaysAgo(days: number, current?: Date): Date;
/**
 * 获取去年时间点的日期对象
 * @author 王首人
 */
export declare function getLastYear(): Date;
/**
 * 返回日期是否超过了昨天
 * @param date
 *
 * @author 王首人
 */
export declare function moreThanYesterday(date: Date): boolean;
/**
 * 计算两个日期之间间隔多少天
 * @param date1
 * @param date2
 *
 * @author 王首人
 */
export declare function calcDaysBetweenTwoDate(date1: Date, date2: Date): number;
