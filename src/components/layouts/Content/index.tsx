import React from "react";

interface IContentProps {
    children: React.ReactNode
}

const Content: React.FC<IContentProps> = ({ children }) => (
    <>
        {children}
    </>
)

export default Content;