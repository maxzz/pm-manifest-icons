import { DefFieldTypes } from './field';

export * from './field';

export function UISymbolDefs() {
    return (
        <svg id="svgfont" aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
        >
            <defs>
                {DefFieldTypes()}
            </defs>
        </svg>
    );
}
