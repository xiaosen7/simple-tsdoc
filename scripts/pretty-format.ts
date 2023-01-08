import { format } from "pretty-format";

console.log(
  format(
    `
declare function func(
interfaceOptions: InterfaceOptions,
typeOptions: TypeOptions
);`,
    {
      indent: 4,
    }
  )
);
