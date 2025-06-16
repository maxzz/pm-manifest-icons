import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export function SvgSymbolFieldLst() {
    return (_jsx(_Fragment, { children: _jsxs("symbol", { id: "ifield-lst", viewBox: "0 0 24 24", children: [_jsx("rect", { x: "2.5", y: "4.66", width: "15.3", height: "6.38", rx: ".89", ry: ".89" }), _jsx("path", { d: "M17.79 8.08h3.25c.25 0 .46.21.46.46v10.35c0 .25-.21.46-.46.46H4.93a.47.47 0 0 1-.46-.46v-7.85" }), _jsx("path", { d: "M7.86 13.58h10.52" }), _jsx("path", { d: "M8.03 16.43h7.62" }), _jsx("path", { d: "m13.18 7.84.7.48.71-.49" })] }) }));
}
export function SymbolFieldLst({ title, children, ...rest }) {
    return (_jsxs("svg", { fill: "none", stroke: "currentColor", ...rest, children: [title && _jsx("title", { children: title }), children, _jsx("use", { xlinkHref: "#ifield-lst" })] }));
}
