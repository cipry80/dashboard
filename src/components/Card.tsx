interface CardProps {
    height?: string;
    maxWidth?: string;
    isActive?: boolean;
    className: string;
}

const Card: React.FunctionComponent<CardProps> = ({ children, height, maxWidth, isActive, className }) => {
    const style = {
        maxWidth: maxWidth,
        height: height
    };
    return (
        <div className={isActive ? `card ${className} active` : `card ${className}`} style={style}>
            {children}
        </div>
    );
};

export default Card;
