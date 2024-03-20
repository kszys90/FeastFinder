import type { ComponentPropsWithoutRef } from "react";

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ label, id, ...props }: InputProps) {
    return (
        <div className="input-container">
            <input className="input-field" id={id} {...props} />
            <label className="input-label" htmlFor={id}>{label}</label>
        </div>
    );
}