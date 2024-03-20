import { type ReactNode, type ComponentPropsWithoutRef } from "react"

type SubtitleProps = ComponentPropsWithoutRef<"h1"> & {
    children: ReactNode
}

export default function Subtitle(props: SubtitleProps) {
    const { children, ...otherProps } = props
    return (
        <>
            <h1 className="article-subtitle decorated-text" {...otherProps}>
                {children}
            </h1>
        </>
    )
}
