import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent for ES modules
const getDirname = () => {
  try {
    // In production (after esbuild bundle to CJS), __dirname is available
    if (typeof __dirname !== "undefined") {
      return __dirname;
    }
  } catch {
    // In ES modules, use import.meta.url
  }
  // Fallback for ES modules
  return path.dirname(fileURLToPath(import.meta.url));
};

export function serveStatic(app: Express) {
  // In production, after build, the bundled file is in dist/
  // Client is built to dist/public
  // Try multiple possible paths
  const possiblePaths = [
    path.resolve(getDirname(), "public"), // If bundled, __dirname points to dist/
    path.resolve(process.cwd(), "dist", "public"), // Fallback: from project root
    path.resolve(process.cwd(), "public"), // Another fallback
  ];

  let distPath: string | null = null;
  for (const possiblePath of possiblePaths) {
    if (fs.existsSync(possiblePath)) {
      distPath = possiblePath;
      break;
    }
  }

  if (!distPath) {
    throw new Error(
      `Could not find the build directory. Tried: ${possiblePaths.join(", ")}. Make sure to run 'npm run build' first.`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath!, "index.html"));
  });
}
