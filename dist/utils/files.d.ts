/// <reference types="node" />
import type { PipelineSource } from 'stream';
export declare const pathExists: (path: string) => Promise<boolean>;
export declare const writeFile: <T>(filepath: string, source: PipelineSource<T>, overwrite?: boolean) => Promise<void>;
export declare const downloadFile: (filepath: string, url: string, overwrite?: boolean) => Promise<void>;
