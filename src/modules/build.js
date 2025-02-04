import * as esbuild from "esbuild";

export async function buildFront() {
    try {
        await esbuild.build({
            entryPoints: ['src/front/eclipse.js', 'src/front/eclipse.css'],
            outdir: `min/`,
            minify: true,
            loader: {".js": "js", ".css": "css"}
        })
    } catch (e) {
        return;
    }
}