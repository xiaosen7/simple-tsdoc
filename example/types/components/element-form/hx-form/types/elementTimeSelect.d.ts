import { ElTimeSelect } from 'element-plus';
import { FormItemCommon } from './commonType';
declare type ElTimeSelectProps = InstanceType<typeof ElTimeSelect>['$props'];
export interface HXTimeSelect extends ElTimeSelectProps, FormItemCommon {
    element: 'ElementTimeSelect';
    events?: TimeSelectEvents;
}
export interface TimeSelectEvents {
    change: (val: any) => void;
    blur: (event: FocusEvent) => void;
    focus: (event: FocusEvent) => void;
}
export {};
