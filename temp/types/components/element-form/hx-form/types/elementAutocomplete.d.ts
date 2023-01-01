import { ElAutocomplete } from 'element-plus';
import { Component } from 'vue';
import { FormItemCommon } from './commonType';
declare type ElAutocompleteProps = InstanceType<typeof ElAutocomplete>['$props'];
export interface HXAutocomplete extends ElAutocompleteProps, FormItemCommon {
    element: 'ElementAutocomplete';
    slots?: AutocompleteSlots;
    events?: AutocompleteEvents;
}
export interface AutocompleteEvents {
    change?: (value?: any) => any;
    select?: (value?: string | number) => any;
}
export interface AutocompleteSlots {
    prefix?: string | Component;
    suffix?: string | Component;
    prepend?: string | Component;
    append?: string | Component;
    customAutocomplete?: boolean;
}
export {};
