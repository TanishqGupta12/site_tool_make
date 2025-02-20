export default function CurrentUrl(params) {
    if (typeof window !== 'undefined') {
        return window.location.href;
    }
    return null; // or some default value if not in a browser environment
}