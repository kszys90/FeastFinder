import { type ComponentPropsWithoutRef } from "react"

type TitleProps = ComponentPropsWithoutRef<"h1"> & {
    title: string
}

export default function Title(props: TitleProps) {
    const { title, ...otherProps } = props
    return (
        <>
            <h1 className="article-title decorated-text" {...otherProps}>
                {title}
            </h1>
        </>
    )
}
