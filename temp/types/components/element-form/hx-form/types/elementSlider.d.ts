import { ElSlider } from 'element-plus';
import { FormItemCommon } from './commonType';
declare type ElSliderProps = InstanceType<typeof ElSlider>['$props'];
export interface HXSlider extends ElSliderProps, FormItemCommon {
    element: 'ElementSlider';
    events?: SliderEvents;
}
export interface SliderEvents {
    change: (val: any) => void;
    input: (val: any) => void;
}
export {};
