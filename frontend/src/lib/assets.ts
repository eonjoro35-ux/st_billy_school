export function assetPath(path: string): string {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}

export function resolveAsset(path: string): string {
    return /^https?:\/\//.test(path) || path.startsWith(import.meta.env.BASE_URL) ? path : assetPath(path);
}
