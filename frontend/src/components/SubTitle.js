import CenteredText from "./CenteredText";

const SubTitle = ({ children, color }) => {
    const defaultStyle = {
        fontSize: 20,
        color: color || 'black',
        margin: 10,
    }

    return <CenteredText styles={defaultStyle}>
        {children}
    </CenteredText>
}

export default SubTitle;