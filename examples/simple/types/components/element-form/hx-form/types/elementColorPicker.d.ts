import { ElColorPicker } from 'element-plus';
import { FormItemCommon } from './commonType';
declare type ElColorPickerProps = InstanceType<typeof ElColorPicker>['$props'];
export interface HXColorPicker extends ElColorPickerProps, FormItemCommon {
    element: 'ElementColorPicker';
    events?: ColorPickerEvents;
}
export interface ColorPickerEvents {
    change?: (value?: string) => void;
    activeChange?: (value?: string) => void;
}
export {};
