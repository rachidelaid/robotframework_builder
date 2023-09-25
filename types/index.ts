import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface KeywordType {
  id?: number;
  source: string;
  name: string;
  args: {
    name: string;
    required: boolean;
    default?: string;
    type?: string[];
    value?: string;
    dynamic?: boolean;
  }[];
  description: string;
  example?: string;
  disabled?: boolean;
  canFail?: boolean;
}
