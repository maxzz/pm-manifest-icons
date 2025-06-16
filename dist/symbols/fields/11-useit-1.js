import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// field use-it
export function SvgSymbolFieldUseIt1() {
    return (_jsx(_Fragment, { children: _jsx("symbol", { id: "ifield-useit-1", viewBox: "0 0 24 24", children: _jsx("path", { d: "m3.1 12 5.94 5.94L20.9 6.06" }) }) }));
}
export function SymbolFieldUseIt1({ title, children, ...rest }) {
    return (_jsxs("svg", { fill: "none", stroke: "currentColor", ...rest, children: [title && _jsx("title", { children: title }), children, _jsx("use", { xlinkHref: "#ifield-useit-1" })] }));
}
