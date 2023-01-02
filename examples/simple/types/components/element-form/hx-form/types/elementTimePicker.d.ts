import { ElTimePicker } from 'element-plus';
import { FormItemCommon } from './commonType';
declare type ElTimePickerProps = InstanceType<typeof ElTimePicker>['$props'];
export interface HXTimePicker extends ElTimePickerProps, FormItemCommon {
    element: 'ElementTimePicker';
    events?: TimePickerEvents;
    label?: FormItemCommon['label'];
}
export interface TimePickerEvents {
    change: (val: any) => void;
    blur: (event: FocusEvent) => void;
    focus: (event: FocusEvent) => void;
    visibleChange: (visibility: boolean) => void;
}
export {};
