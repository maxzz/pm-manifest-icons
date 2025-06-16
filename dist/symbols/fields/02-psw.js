import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export function SvgSymbolFieldPsw() {
    return (_jsx(_Fragment, { children: _jsxs("symbol", { id: "ifield-psw", viewBox: "0 0 24 24", children: [_jsx("path", { fill: "#ffdbb8", d: "M2.05 6.01h19.89v11.98H2.05z" }), _jsx("path", { d: "m5.56 14.69 2.84-2.81" }), _jsx("path", { d: "m5.57 11.87 2.81 2.84" }), _jsx("path", { d: "m11.02 14.69 2.84-2.81" }), _jsx("path", { d: "m11.04 11.87 2.81 2.84" }), _jsx("path", { d: "M16.2 15.55h2.27" })] }) }));
}
export function SymbolFieldPsw({ title, children, ...rest }) {
    return (_jsxs("svg", { fill: "none", stroke: "currentColor", ...rest, children: [title && _jsx("title", { children: title }), children, _jsx("use", { xlinkHref: "#ifield-psw" })] }));
}
