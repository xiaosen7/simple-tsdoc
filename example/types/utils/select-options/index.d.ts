/**
 * 下拉选择数组项类型
 */
export interface GlobalSelectOption {
    label: string;
    value: string | number;
    [key: string]: string | number;
}
/**
 * 封装一个操作下拉框选项数组的类,传入一个下拉选项数组,可以为其添加一些便于操作的方法
 * @author 何源
 */
export declare class SelectOptions {
    options: GlobalSelectOption[];
    /**
     *
     * @param options 传入的下拉框数组
     * @param fn 可以传入一个函数,参数为options,在创建实例的时候,该函数会被执行
     * @example
     * ```ts
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
     * ```
     */
    constructor(options: GlobalSelectOption[], fn?: (options: GlobalSelectOption[]) => void);
    /**
     * 通过label查找
     * @param label 需要查找的label
     * @returns 一个对象,包含查找到的项和该项在数组中的索引
     * @author 何源
     * @example
     * ```ts
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
     * ```
     */
    findItemByLabel(label: keyof GlobalSelectOption): {
        res: GlobalSelectOption;
        index: number;
    };
    /**
     * 通过value查找
     * @param value 需要查找的label
     * @returns 一个对象,包含查找到的项和该项在数组中的索引
     * @author 何源
     * @example
     * ```ts
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
     * ```
     */
    findItemByVal(value: string | number): {
        res: GlobalSelectOption;
        index: number;
    };
    /**
     * 通过value值返回label值, 主要用于中文化后端返回的字段
     * @param value value字段值
     * @param customLabel 如果没找到,则返回该值,默认为 '-'
     * @returns 对应的label值,如果没找到,则返回
     * @example
     * ```ts
  import { SelectOptions } from '../..'
  const eventLevels = new SelectOptions([
    { label: '严重', value: 3, color: 'red' },
    { label: '关键', value: 2, color: 'orange' },
    { label: '警告', value: 1, color: 'darkgray' },
  ]);
  eventLevels.getLabel(3);
  // => 严重
     * ```
     */
    getLabel(value: string | number, customLabel?: string): string;
    /**
     * 通过label值返回value值
     * @param label label字段的值
     * @returns 对应的value值
     * @example
     * ```ts
  import { SelectOptions } from '../..'
  const eventLevels = new SelectOptions([
    { label: '严重', value: 3, color: 'red' },
    { label: '关键', value: 2, color: 'orange' },
    { label: '警告', value: 1, color: 'darkgray' },
  ]);
  eventLevels.getValue('关键');
  // => 2
     * ```
     */
    getValue(label: keyof GlobalSelectOption): string | number;
}
