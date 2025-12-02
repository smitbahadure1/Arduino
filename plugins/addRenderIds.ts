import type { Plugin } from 'vite';

export function addRenderIds(): Plugin {
    return {
        name: 'add-render-ids',
        enforce: 'pre',
    };
}
