export interface ContentUrlParams {
    filePath: string;
    repoName: string;
    repoOwner: string;
    treeIsh: string;
}
export declare const buildRawContentUrl: (params: ContentUrlParams) => string;
export declare const getApiSchemaUrl: (treeIsh?: string) => string;
export declare const downloadApiSchema: (filepath: string, overwrite?: boolean, treeIsh?: string) => Promise<void>;
export declare const generateApiSchemaTypes: (schemaPath: string, typesPath: string, overwrite?: boolean) => Promise<void>;
