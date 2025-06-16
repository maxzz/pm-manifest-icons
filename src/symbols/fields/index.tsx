import { SvgSymbolFieldEdt } from './01-edt';
import { SvgSymbolFieldPsw } from './02-psw';
import { SvgSymbolFieldLst } from './03-lst';
import { SvgSymbolFieldChk } from './04-chk';
import { SvgSymbolFieldBtn } from './05-btn';
import { SvgSymbolFieldTxt } from './06-txt';
import { SvgSymbolFieldUseIt0 } from './10-useit-0';
import { SvgSymbolFieldUseIt1 } from './11-useit-1';

export * from './01-edt';
export * from './02-psw';
export * from './03-lst';
export * from './04-chk';
export * from './05-btn';
export * from './06-txt';
export * from './10-useit-0';
export * from './11-useit-1';

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
