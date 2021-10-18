export function extractProjectsTechList(projects) {
    const result = [];
    projects.forEach(project => {
        project.tech.forEach(techValue => {
            if (!result.includes(techValue)) result.push(techValue);
        });
    });
    result.sort();
    return result;
}

export function applyPreset(preset) {
    const root = document.documentElement;
    for (const key of Object.keys(preset)) root.style.setProperty(key, preset[key]);
}