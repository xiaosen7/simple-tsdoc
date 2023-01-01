import { ElSelect, ElOption } from 'element-plus';
import { Component } from 'vue';
import { FormItemCommon } from './commonType';
declare type ElSelectProps = InstanceType<typeof ElSelect>['$props'];
declare type ElOptionProps = InstanceType<typeof ElOption>['$props'];
export interface HXSelect extends ElSelectProps, FormItemCommon {
    element: 'ElementSelect';
    slots?: SelectSlots;
    events?: SelectEvents;
    options?: ElOptionProps[];
    group?: FormItemGroup[];
}
export interface SelectEvents {
    change?: (value?: string | number) => void;
    visibleChange?: (visible?: boolean) => void;
    removeTag?: (tag?: string) => void;
    clear?: () => void;
    blur?: (event?: Event) => void;
    focus?: (event?: Event) => void;
}
export interface SelectSlots {
    prefix?: string | Component;
    empty?: string | Component;
}
export interface FormItemGroup {
    label: string;
    disabled?: boolean;
    options: ElOptionProps[];
}
export {};
