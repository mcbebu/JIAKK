import { View } from "react-native";

const SpacedColumn = ({ spacing, width, alignItems, children }) => {
    alignItems = alignItems || 'center';
    if (spacing === undefined) spacing = 10;

    return <View
        style={{
            width: width,
            alignItems: alignItems
        }}
        className="flex"
    >
        {(children && children.length > 1)
            ? children.map((child, i) => <View
            key={i}
                style={{
                    marginTop: (i > 0) ? spacing : 0
                }}
            >
                {child}
            </View>)
            : children
        }
    </View>;
}

export default SpacedColumn;