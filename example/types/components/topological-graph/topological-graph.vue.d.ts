export interface TopologicalGraphData {
    id?: string;
    width?: number;
    height?: number;
    centerName?: string;
    linkCorrectColor?: string;
    linkWrongColor?: string;
    centerLabel?: any;
    optionData?: any;
    toolTip?: any;
    secNodes?: any;
    triNodes?: any;
}
export interface TopologicalGraphProps {
    data: TopologicalGraphData;
    topoStyle?: string;
}
declare const _sfc_main: any;
export default _sfc_main;
