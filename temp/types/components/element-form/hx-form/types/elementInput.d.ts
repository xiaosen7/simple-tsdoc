import { ElInput } from 'element-plus';
import { Component } from 'vue';
import { FormItemCommon } from './commonType';
declare type ElInputProps = InstanceType<typeof ElInput>['$props'];
export interface HXInput extends ElInputProps, FormItemCommon {
    element: 'ElementInput';
    slots?: InputSlots;
    events?: InputEvents;
    rows?: Numberish;
    cols?: Numberish;
    maxlength?: Numberish;
    minlength?: Numberish;
    wrap?: string;
}
export interface InputEvents {
    change?: (value?: string | number) => void;
    focus?: (event?: Event) => void;
    blur?: (event?: Event) => void;
    input?: (value?: string | number) => void;
    clear?: () => void;
}
export interface InputSlots {
    prefix?: string | Component;
    suffix?: string | Component;
    prepend?: string | Component;
    append?: string | Component;
}
declare type Numberish = number | string;
export {};
