import { FormItemCommon, HXFormItem } from '../types/commonType';
import { FormConfig } from '../types/elementForm';
/**
 * AIM: 过滤表单元素不需要绑定的属性
 * @param item - 表单项配置信息
 * @param formConfig - 表单配置信息
 * @returns 表单元素所需绑定的属性
 */
export declare const filterFormItemNature: (item: HXFormItem, formConfig: FormConfig) => any;
/**
 * AIM: 获取 el-form-item 需要绑定的属性
 * @param item - 表单项配置信息
 * @param formConfig - 表单配置信息
 * @returns el-form-item 所需绑定的属性
 */
export declare const getFormItemNature: (item: HXFormItem, formConfig: FormConfig) => Partial<FormItemCommon>;
/**
 * AIM: 获取表单需要绑定的属性
 * @param formConfig - 表单配置信息
 * @returns 表单(el-form) - 所需绑定的属性
 */
export declare const getFormNature: (formConfig: FormConfig) => FormConfig;
