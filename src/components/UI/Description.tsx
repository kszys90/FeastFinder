import { type ReactNode, type ComponentPropsWithoutRef } from "react"

type DescriptionProps = ComponentPropsWithoutRef<"p"> & {
    children: ReactNode
}

export default function Description(props: DescriptionProps) {
    const { children, ...otherProps } = props

    return (
        <p className="article-description" {...otherProps}>
            {children}
        </p>
    )
}
