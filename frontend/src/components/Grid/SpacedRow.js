const SpacedRow = ({ children, spacing, alignItems }) => {
    spacing = spacing || 10;
    alignItems = alignItems || 'center';

    return <div className="flex flex-row justify-between p-3">
        {(children && children.length > 1)
            ? children.map((child, i) => <div
            key={i}
                style={{
                    marginTop: (i > 0) ? spacing : 0
                }}
            >
                {child}
            </div>)
            : children
        }
    </div>
}

export default SpacedRow;