import { type ReactNode, type ComponentPropsWithoutRef } from "react"

type TitleProps = ComponentPropsWithoutRef<"h1"> & {
    children: ReactNode
}

export default function Title(props: TitleProps) {
    const { children, ...otherProps } = props
    return (
        <>
            <h1 className="article-title " {...otherProps}>
                {children}
            </h1>
        </>
    )
}
