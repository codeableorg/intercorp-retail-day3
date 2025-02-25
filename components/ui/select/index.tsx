import * as React from "react";

import clsx from "clsx";

import styles from "./styles.module.css";

const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={clsx(styles["basic-select"], className)}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "BasicSelect";

const Option = React.forwardRef<
  HTMLOptionElement,
  React.OptionHTMLAttributes<HTMLOptionElement>
>(({ children, ...props }, ref) => (
  <option ref={ref} {...props}>
    {children}
  </option>
));
Option.displayName = "BasicOption";

export { Select, Option };
