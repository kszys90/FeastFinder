import type { ComponentPropsWithoutRef } from "react";

type FloatingInputProps = {
    label: string;
    id: string;
    inputValue: string;
} & ComponentPropsWithoutRef<"input">;

export default function FloatingInput({ label, id, inputValue, ...otherProps }: FloatingInputProps) {
    return (
        <div className="input-container">
            <label
                className={inputValue === '' ? "input-label" : "input-label label-floating"}
                htmlFor={id}>
                {label}
            </label>
            <input
                className="input-field"
                id={id}
                {...otherProps}
            />
        </div>
    );
}