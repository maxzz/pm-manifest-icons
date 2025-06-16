import { SvgSymbolFieldEdt } from './field1-edt';
import { SvgSymbolFieldPsw } from './field2-psw';
import { SvgSymbolFieldLst } from './field3-lst';
import { SvgSymbolFieldChk } from './field4-chk';
import { SvgSymbolFieldBtn } from './field5-btn';
import { SvgSymbolFieldTxt } from './field6-txt';
import { SvgSymbolFieldUseIt0 } from './field10-useit-0';
import { SvgSymbolFieldUseIt1 } from './field11-useit-1';

export * from './field1-edt';
export * from './field2-psw';
export * from './field3-lst';
export * from './field4-chk';
export * from './field5-btn';
export * from './field6-txt';
export * from './field10-useit-0';
export * from './field11-useit-1';

export function DefFieldTypes() {
    return (<>
        {SvgSymbolFieldEdt()}
        {SvgSymbolFieldPsw()}
        {SvgSymbolFieldChk()}
        {SvgSymbolFieldLst()}
        {SvgSymbolFieldTxt()}
        {SvgSymbolFieldBtn()}
        {SvgSymbolFieldUseIt0()}
        {SvgSymbolFieldUseIt1()}
    </>);
}
