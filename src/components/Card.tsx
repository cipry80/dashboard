interface CardProps {
    height?: string;
    maxWidth?: string;
    isActive?: boolean;
}

const Card: React.FunctionComponent<CardProps> = ({ children, height, maxWidth, isActive }) => {
    const style = {
        maxWidth: maxWidth,
        height: height
    };
    return (
        <div className={isActive ? 'card active' : 'card'} style={style}>
            {children}
        </div>
    );
};

export default Card;
