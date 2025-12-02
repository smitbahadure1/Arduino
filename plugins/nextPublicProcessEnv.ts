import type { Plugin } from 'vite';

export function nextPublicProcessEnv(): Plugin {
    return {
        name: 'next-public-process-env',
        enforce: 'pre',
    };
}
