import { CSSProperties } from 'vue';
import { ElFormItem, ElRow, ElCol } from 'element-plus';
import { HXInput } from './elementInput';
import { HXSelect } from './elementSelect';
import { HXDatePicker } from './elementDatePicker';
import { HXCheckbox } from './elementCheckbox';
import { HXRadio } from './elementRadio';
import { HXColorPicker } from './elementColorPicker';
import { HXInputNumber } from './elementInputNumber';
import { HXRate } from './elementRate';
import { HXSlider } from './elementSlider';
import { HXSwitch } from './elementSwitch';
import { HXTimePicker } from './elementTimePicker';
import { HXTimeSelect } from './elementTimeSelect';
import { HXAutocomplete } from './elementAutocomplete';
import { HXCascader } from './elementCascader';
import { HXTransfer } from './elementTransfer';
import { HXUpload } from './elementUpload';
import { HXFormString } from './elementString';
export interface FormDataInjectKey {
    formData: ObjectOfStringKey;
    updateFormData: (prop: string, newData: any) => void;
    getInstance: (type?: string, prop?: string | number, instance?: any) => any;
}
declare type ElFormItemProps = InstanceType<typeof ElFormItem>['$props'];
export interface FormItemCommon extends ElFormItemProps {
    prop: string;
    events?: {
        [key: string]: any;
    };
    otherOptions?: {
        style?: Partial<CSSProperties>;
        hidden?: boolean;
        colLayout?: ElColProps;
        tailSlot?: string;
        stringStyle?: Partial<CSSProperties>;
        corps?: HXFormItem[];
    };
}
export declare type HXFormItem = HXInput | HXSelect | HXDatePicker | HXCheckbox | HXRadio | HXColorPicker | HXInputNumber | HXRate | HXSlider | HXSwitch | HXTimePicker | HXTimeSelect | HXAutocomplete | HXCascader | HXTransfer | HXUpload | HXFormString;
export declare type ElRowProps = InstanceType<typeof ElRow>['$props'];
export declare type ElColProps = InstanceType<typeof ElCol>['$props'];
export interface ObjectOfStringKey<T = any> {
    [key: string]: T;
}
export {};
