import type { Plugin } from 'vite';

export function aliases(): Plugin {
    return {
        name: 'aliases',
        enforce: 'pre',
    };
}
