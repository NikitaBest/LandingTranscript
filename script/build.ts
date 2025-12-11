import { build as viteBuild } from "vite";
import { rm } from "fs/promises";

// Простая сборка статического лендинга
async function buildLanding() {
  await rm("dist", { recursive: true, force: true });

  console.log("Building static landing page...");
  await viteBuild();
  console.log("✓ Build complete! Static files are in dist/");
  console.log("✓ You can serve them with any static file server (Nginx, Apache, etc.)");
}

buildLanding().catch((err) => {
  console.error(err);
  process.exit(1);
});
