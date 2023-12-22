const n = r => {
    try {
        return JSON.parse((r == null ? void 0 : r.parsed_content) || "{}")
    } catch {
        return {}
    }
};
export {
    n as g
};