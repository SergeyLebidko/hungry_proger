const colorLimit = 65;

export default function createGradient(r1, g1, b1) {
    let r2, g2, b2;
    if (r1 < colorLimit && g1 < colorLimit && b1 < colorLimit) {
        r2 = r1 + colorLimit;
        g2 = g1 + colorLimit;
        b2 = b1 + colorLimit;
    } else {
        r2 = Math.max(r1 - colorLimit, 0);
        g2 = Math.max(g1 - colorLimit, 0);
        b2 = Math.max(b1 - colorLimit, 0);
    }
    let color1 = `rgb(${Math.max(r1, r2)}, ${Math.max(g1, g2)}, ${Math.max(b1, b2)})`;
    let color2 = `rgb(${Math.min(r1, r2)}, ${Math.min(g1, g2)}, ${Math.min(b1, b2)})`;

    return {
        backgroundImage: `linear-gradient(to right bottom, ${color1}, ${color2})`
    }
}