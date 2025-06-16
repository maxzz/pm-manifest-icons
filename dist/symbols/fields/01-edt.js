import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export function SvgSymbolFieldEdt() {
    return (_jsx(_Fragment, { children: _jsxs("symbol", { id: "ifield-edt", viewBox: "0 0 24 24", children: [_jsx("path", { d: "M2.05 6.01h19.89v11.98H2.05z" }), _jsx("path", { d: "M5 8.5h1.5m1.5 0H6.5m0 0v7m0 0H5m1.5 0H8" })] }) }));
}
export function SymbolFieldEdt({ title, children, ...rest }) {
    return (_jsxs("svg", { fill: "none", stroke: "currentColor", ...rest, children: [title && _jsx("title", { children: title }), children, _jsx("use", { xlinkHref: "#ifield-edt" })] }));
}
