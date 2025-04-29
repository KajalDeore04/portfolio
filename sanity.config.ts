import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { codeInput } from "@sanity/code-input";
import { projectId, dataset } from "./lib/env.api";

export default defineConfig({
  name: "kajal",
  title: "portfolio",
  basePath: "/studio",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "",
  dataset: process.env.SANITY_STUDIO_DATASET || "",
  apiVersion: process.env.SANITY_STUDIO_API_VERSION || "",
  plugins: [deskTool(), visionTool(), codeInput()],
  schema: { types: schemaTypes },
});
