import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

type RegistryItem = {
  slug: string;
  name: string;
  type: string;
  dependencies: string[];
  registryDependencies: string[];
};

export async function GET() {
  try {
    const dir = path.join(process.cwd(), "public/registry");
    const entries = await fs.promises.readdir(dir);

    const items: RegistryItem[] = [];

    for (const file of entries) {
      if (!file.endsWith(".json")) continue;

      const slug = file.replace(".json", "");
      const raw = await fs.promises.readFile(path.join(dir, file), "utf8");
      const json = JSON.parse(raw);

      items.push({
        slug,
        name: json.name || slug,
        type: json.type || "registry:ui",
        dependencies: json.dependencies || [],
        registryDependencies: json.registryDependencies || [],
      });
    }

    return NextResponse.json(
      items.sort((a, b) => a.name.localeCompare(b.name))
    );
  } catch (error) {
    console.error("Error fetching components:", error);
    return NextResponse.json(
      { error: "Failed to fetch components" },
      { status: 500 }
    );
  }
}
