import CenteredText from "./CenteredText";

const Title = ({ text, color }) => {
    const defaultStyle = {
        fontSize: 40,
        color: color || 'black',
    }

    return <CenteredText styles={defaultStyle}>
        {text}
    </CenteredText>
}

export default Title;