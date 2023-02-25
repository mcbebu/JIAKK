import CenteredText from "./CenteredText";

const Title = ({ children, color }) => {
    const defaultStyle = {
        fontSize: 35,
        color: color || 'black',
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
    }

    return <CenteredText styles={defaultStyle}>
        {children}
    </CenteredText>
}

export default Title;