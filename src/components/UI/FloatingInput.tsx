import type { ComponentPropsWithoutRef } from "react";
import React from "react";

type FloatingInputProps = {
    label: string;
    id: string;
    inputValue: string;
} & ComponentPropsWithoutRef<"input">;

export default function FloatingInput({ label, id, inputValue, ...otherProps }: FloatingInputProps) {
    const [isFocused, setIsFocused] = React.useState<boolean>(false)
    return (
        <div className="input-container">
            <label
                className={`
                    ${inputValue === '' ? "input-label" : "input-label label-floating"}
                    ${!isFocused ? "" : "label-floating"}
                `}
                htmlFor={id}>
                {label}
            </label>
            <input
                className="input-field"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                id={id}
                {...otherProps}
            />
        </div>
    );
}