import react from "react";

//styles
import { Wrapper, Content } from "./TAB.styles"

const TAB = ({ header, children }) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>
            {children}
        </Content>
    </Wrapper>

)

export default TAB;