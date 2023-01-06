declare namespace DropdownMenuScssNamespace {
  export interface IDropdownMenuScss {
    dropdown: string;
    show: string;
    dropdown_content: string;
  }
}

declare const DropdownMenuScssModule: DropdownMenuScssNamespace.IDropdownMenuScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DropdownMenuScssNamespace.IDropdownMenuScss;
};

export = DropdownMenuScssModule;
