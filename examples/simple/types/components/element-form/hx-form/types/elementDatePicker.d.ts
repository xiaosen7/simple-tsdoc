import { ElDatePicker } from 'element-plus';
import { Component } from 'vue';
import { FormItemCommon } from './commonType';
declare type ElDatePickerProps = InstanceType<typeof ElDatePicker>['$props'];
export interface HXDatePicker extends ElDatePickerProps, FormItemCommon {
    element: 'ElementDatePicker';
    slots?: DatePickerSlots;
    events?: DatePickerEvents;
    label?: FormItemCommon['label'];
}
export interface DatePickerEvents {
    change?: (val?: any) => void;
    blur?: (e?: FocusEvent) => void;
    focus?: (e?: FocusEvent) => void;
    calendarChange?: (val?: [Date, Date]) => void;
    panelChange?: (date?: any, mode?: any, view?: any) => void;
    visibleChange?: (visibility?: boolean) => void;
}
export interface DatePickerSlots {
    rangeSeparator?: Component | string;
    customDatePicker?: boolean;
}
export {};
