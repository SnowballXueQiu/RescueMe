import {globSync} from 'glob';

function isIndex(path: string) {
    return /index/.test(path);
}

function normalizationData(paths: string[]) {
    return paths.map((p) => p.replaceAll('\\', '/')).map((path) => {
        const rawPath = path.replace(/content/gim, '').replace('.md', '');
        if (isIndex(rawPath)) {
            return rawPath.replace('/index', '')
        }
        return rawPath;
    })
}

export default function usePreRenderRoute() {
    const res = globSync('content/**/*.md')
    return normalizationData(res)
}
