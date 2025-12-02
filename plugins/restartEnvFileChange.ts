import type { Plugin } from 'vite';

export function restartEnvFileChange(): Plugin {
    return {
        name: 'restart-env-file-change',
        enforce: 'pre',
    };
}
