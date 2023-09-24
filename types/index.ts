import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface KeywordType {
  source: string;
  name: string;
  args: {
    name: string;
    required: boolean;
    default?: string;
    type?: string[];
    value?: string;
  }[];
  description: string;
  example?: string;
  disabled?: boolean;
}
