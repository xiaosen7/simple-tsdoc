import { ElSwitch } from 'element-plus';
import { FormItemCommon } from './commonType';
declare type ElSwitchProps = InstanceType<typeof ElSwitch>['$props'];
export interface HXSwitch extends ElSwitchProps, FormItemCommon {
    element: 'ElementSwitch';
    events?: SwitchEvents;
}
export interface SwitchEvents {
    change: (val: any) => void;
}
export {};
