import * as React from "react";

import { type Metadata } from "next";

import { PATHS, PATHS_STRING, PATH_DESCRIPTION_MAP} from "@/constants/path";

export const metadata: Metadata = {
  title: PATHS_STRING[PATHS.SITE_ABOUT],
  description: PATH_DESCRIPTION_MAP[PATHS.SITE_ABOUT],
};

export default function Layout({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}
