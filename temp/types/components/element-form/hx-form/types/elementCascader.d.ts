import { ElCascader } from 'element-plus';
import { Component } from 'vue';
import { FormItemCommon } from './commonType';
declare type ElCascaderProps = InstanceType<typeof ElCascader>['$props'];
export interface HXCascader extends ElCascaderProps, FormItemCommon {
    element: 'ElementCascader';
    events?: CascaderEvents;
    slots?: CascaderSlots;
    cascaderPanel?: boolean;
}
export interface CascaderEvents {
    change?: (value?: any) => any;
    expandChange?: (arr?: any[]) => any;
    blur?: (event?: Event) => any;
    focus?: (event?: Event) => any;
    visibleChange?: (visible?: boolean) => any;
    removeTag: (value?: any) => any;
}
export interface CascaderSlots {
    customCascader?: boolean;
    empty?: string | Component;
}
export {};
