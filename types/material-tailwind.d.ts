import type {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  AnchorHTMLAttributes,
} from "react";

declare module "@material-tailwind/react" {
  // Typography Props
  interface TypographyProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> {
    children: ReactNode;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "lead" | "paragraph" | "small";
    color?: string;
    className?: string;
    as?: React.ElementType;
    href?: string;
    target?: string;
  }

  export const Typography: React.FC<TypographyProps>;

  // Input Props
  interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    color?: string;
    size?: "sm" | "md" | "lg";
    variant?: "outlined" | "standard" | "static";
    containerProps?: {
      className?: string;
    };
  }

  export const Input: React.FC<InputProps>;

  // Radio Props
  interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    color?: string;
  }

  export const Radio: React.FC<RadioProps>;

  // Textarea Props
  interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    color?: string;
    size?: "sm" | "md" | "lg";
    variant?: "outlined" | "standard" | "static";
    containerProps?: {
      className?: string;
    };
  }

  interface NavbarProps extends HTMLAttributes<HTMLElement> {
    fullWidth?: boolean;
    shadow?: boolean;
    className?: string;
    children?: ReactNode;
  }

  export const MTNavbar: React.FC<NavbarProps>;

  export const Textarea: React.FC<TextareaProps>;

  // Outros componentes com tipagem genérica (pode ser ajustado se necessário)
  export const Button: React.FC<any>;
  export const IconButton: React.FC<any>;
  export const Card: React.FC<any>;
  export const CardBody: React.FC<any>;
  export const Avatar: React.FC<any>;
}

