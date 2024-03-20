import React, { type ReactNode, type ComponentPropsWithoutRef } from "react"

type DropdownMenuProps = ComponentPropsWithoutRef<"div"> & {
    children: ReactNode
    button: ReactNode
    side: 'left' | 'right'
}

export default function DropdownMenu(props: DropdownMenuProps) {
    const { button, children, side, ...otherProps } = props
    const [isDropdownVisible, setDropdownVisible] = React.useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return (

        <div
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="dropdown-button">{button}</div>
            {isDropdownVisible ? (
                <div className={`dropdown-menu dropdown-menu--${side}`} {...otherProps}>
                    {children}
                </ div>
            ) :
                null
            }
        </div >

    );
}

