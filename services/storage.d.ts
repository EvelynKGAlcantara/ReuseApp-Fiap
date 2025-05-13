declare module '../../services/storage' {
  export function setData(key: string, value: any): Promise<void>;
  export function getData(key: string): Promise<any>;
  export function removeData(key: string): Promise<void>;
  export function clearAllData(): Promise<void>;
  export function setCacheData(key: string, value: any, expirationTime?: number): Promise<void>;
  export function getCacheData(key: string): Promise<any>;
  export function clearCache(): Promise<void>;
} 