import type { Plugin } from 'vite';

export function layoutWrapperPlugin(): Plugin {
    return {
        name: 'layout-wrapper',
        enforce: 'pre',
    };
}
