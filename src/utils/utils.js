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