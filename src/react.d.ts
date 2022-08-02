import * as axios from 'axios'

declare module '*.less' {
    const map: Record<string, string>;
  
    export = map;
  }
  
  declare module '*.png' {
    const path: string;
  
    export default path;
  }
  declare module '*.gif' {
    const path: string;
  
    export default path;
  }

  declare module '*.svg' {
    const path: string;
  
    export default path;
  }
  
  declare module '@editorjs/*' {
    const Plugin: import('react').ComponentClass;
  
    export default Plugin;
  }

  declare module 'axios' {
    interface AxiosInstance {
      (config: AxiosRequestConfig): Promise<any>
    }
  }
  
  declare module "jsx:*.svg" {
    import { ComponentType, SVGProps } from "react";
    const SVGComponent: ComponentType<SVGProps<SVGSVGElement>>;
    export default SVGComponent;
  }