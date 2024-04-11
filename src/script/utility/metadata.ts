import { TemplateString } from "next/dist/lib/metadata/types/metadata-types";
import type { Metadata } from "next";

type type_title = string | TemplateString | null | undefined;

function Title(title?: type_title): Metadata {
  return { title: title };
}

function Core(title?: type_title, description?: string): Metadata {
  return {
    ...Title(title),
    description: description,
  };
}

export { Core, Title };
