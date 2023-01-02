import { CSSProperties } from 'vue';
import { FormItemProp, ElForm } from 'element-plus';
import { HXFormItem, ElRowProps, ElColProps } from './commonType';
export interface HXFormConfig {
    formConfig: FormConfig;
}
declare type ElFormProps = InstanceType<typeof ElForm>['$props'];
export interface FormConfig extends ElFormProps {
    id: string;
    events?: FormEvents;
    colLayout?: ElColProps;
    rowLayout?: ElRowProps;
    itemStyle?: Partial<CSSProperties>;
    formItems: HXFormItem[];
}
export interface FormEvents {
    validate?: (prop?: FormItemProp, isValid?: boolean, message?: string) => void;
}
export {};
