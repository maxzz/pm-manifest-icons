import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export function SvgSymbolFieldChk() {
    return (_jsx(_Fragment, { children: _jsxs("symbol", { id: "ifield-chk", viewBox: "0 0 24 24", children: [_jsx("path", { d: "M8.73 6.81h7.1c.78 0 1.42.64 1.42 1.42v7.1c0 .78-.64 1.42-1.42 1.42h-7.1c-.78 0-1.42-.64-1.42-1.42v-7.1c0-.78.64-1.42 1.42-1.42Z" }), _jsx("path", { d: "m10.15 11.78 1.42 1.42 2.84-2.84" }), _jsx("path", { d: "M18.69 9.39v6.14a2.66 2.66 0 0 1-2.66 2.66H9.34", stroke: "#b3b3b3", fill: "none" })] }) }));
}
export function SymbolFieldChk({ title, children, ...rest }) {
    return (_jsxs("svg", { fill: "none", stroke: "currentColor", ...rest, children: [title && _jsx("title", { children: title }), children, _jsx("use", { xlinkHref: "#ifield-chk" })] }));
}
