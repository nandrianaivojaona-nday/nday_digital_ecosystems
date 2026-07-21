export interface VersionManifest {
    product: string;
    organization: string;
    version: string;
    engineeringGeneration: number;
    codename: string;
    build: string;
    buildTimestamp: string;
    commit: string;
    branch: string;
    environment: string;
    node: string;
  }