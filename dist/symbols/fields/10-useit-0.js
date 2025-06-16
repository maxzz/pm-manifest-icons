import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// field use-it
export function SvgSymbolFieldUseIt0() {
    return (_jsx(_Fragment, { children: _jsxs("symbol", { id: "ifield-useit-0", viewBox: "0 0 24 24", children: [_jsx("path", { d: "M4.41 19.59 19.59 4.41" }), _jsx("path", { d: "M19.59 19.59 4.41 4.41" })] }) }));
}
export function SymbolFieldUseIt0({ title, children, ...rest }) {
    return (_jsxs("svg", { fill: "none", stroke: "currentColor", ...rest, children: [title && _jsx("title", { children: title }), children, _jsx("use", { xlinkHref: "#ifield-useit-0" })] }));
}
