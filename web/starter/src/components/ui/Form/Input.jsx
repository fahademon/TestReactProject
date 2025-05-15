// Import Dependencies
import React from "react";
import { forwardRef } from "react";
import { clsx } from "clsx";

// Local Imports
import { useId } from "../../../hooks";
import { InputErrorMsg } from "./InputErrorMsg";

/**
 * @typedef {Object} InputProps
 * @property {React.ElementType} [component] - The component to render (e.g. "input").
 * @property {React.ReactNode} [label] - Label text or element.
 * @property {string} [value] - Controlled value.
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} [onChange] - Change handler.
 * @property {React.ReactNode} [prefix] - Element before input.
 * @property {React.ReactNode} [suffix] - Element after input.
 * @property {string} [description] - Optional description below input.
 * @property {string} [className] - Additional classes for input element.
 * @property {Object} [classNames] - Classes for sub-elements.
 * @property {boolean|React.ReactNode} [error] - Error state or message.
 * @property {boolean} [unstyled] - If true, disables default styles.
 * @property {boolean} [disabled] - Disables input.
 * @property {string} [type] - HTML input type.
 * @property {Object} [rootProps] - Props spread to container.
 * @property {Object} [labelProps] - Props spread to label.
 * @property {string} [id] - Custom id for input.
 */

/**
 * @type {React.ForwardRefExoticComponent<
 *   React.PropsWithoutRef<InputProps> & React.RefAttributes<HTMLInputElement>
 * >}
 */
const Input = forwardRef((props, ref) => {
  const {
    component,
    label,
    value,
    onChange,
    prefix,
    suffix,
    description,
    className,
    classNames,
    error,
    unstyled,
    disabled,
    type = "text",
    rootProps,
    labelProps,
    id,
    ...rest
  } = props;

  const Component = component || "input";
  const inputId = useId(id, "input");

  const affixClass = clsx(
    "absolute top-0 flex h-full w-9 items-center justify-center transition-colors",
    error
      ? "text-error dark:text-error-light"
      : "text-gray-400 peer-focus:text-primary-600 dark:text-dark-300 dark:peer-focus:text-primary-500",
  );

  return (
    <div className={clsx("input-root", classNames?.root)} {...rootProps}>
      {label && (
        <label
          htmlFor={inputId}
          className={clsx("input-label", classNames?.label)}
          {...labelProps}
        >
          <span className={clsx("input-label", classNames?.labelText)}>
            {label}
          </span>
        </label>
      )}

      <div
        className={clsx(
          "input-wrapper relative",
          label && "mt-1.5",
          classNames?.wrapper,
        )}
      >
        <Component
          id={inputId}
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={clsx(
            "form-input-base",
            suffix && "ltr:pr-9 rtl:pl-9",
            prefix && "ltr:pl-9 rtl:pr-9",
            !unstyled && [
              "form-input",
              error
                ? "border-error dark:border-error-lighter"
                : [
                    disabled
                      ? "cursor-not-allowed border-gray-300 bg-gray-150 opacity-60 dark:border-dark-500 dark:bg-dark-600"
                      : "peer border-gray-300 hover:border-gray-400 focus:border-primary-600 dark:border-dark-450 dark:hover:border-dark-400 dark:focus:border-primary-500",
                  ],
            ],
            className,
            classNames?.input,
          )}
          {...rest}
        />

        {prefix && (
          <div
            className={clsx(
              "prefix ltr:left-0 rtl:right-0",
              affixClass,
              classNames?.prefix,
            )}
          >
            {prefix}
          </div>
        )}
        {suffix && (
          <div
            className={clsx(
              "suffix ltr:right-0 rtl:left-0",
              affixClass,
              classNames?.suffix,
            )}
          >
            {suffix}
          </div>
        )}
      </div>

      <InputErrorMsg
        when={error && typeof error !== "boolean"}
        className={classNames?.error}
      >
        {error}
      </InputErrorMsg>
      {description && (
        <span
          className={clsx(
            "input-description mt-1 text-xs text-gray-400 dark:text-dark-300",
            classNames?.description,
          )}
        >
          {description}
        </span>
      )}
    </div>
  );
});

Input.displayName = "Input";

export { Input };
