import type { Plugin } from 'vite';

interface RestartOptions {
    restart?: string[];
}

export function restart(options: RestartOptions = {}): Plugin {
    return {
        name: 'restart',
        enforce: 'pre',
    };
}
