interface TooltipProps {
    title: string;
    color?: string;
    backgroundColor?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ title, color, backgroundColor }) => {
    const wrapperStyle = {
        backgroundColor
    };

    const textStyle = {
        color
    };

    return (
        <div className="tooltip-wrapper">
            <div className="tooltip" style={wrapperStyle}>
                <p className="tooltip-text" style={textStyle}>
                    {title}
                </p>
            </div>
        </div>
    );
};

export default Tooltip;
