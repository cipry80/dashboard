interface CardProps {
    height?: string;
    isActive?: boolean;
    classes?: string;
}

const Card: React.FunctionComponent<CardProps> = ({ children, height, isActive, classes }) => {
    const style = {
        height: height
    };

    const cardClass = isActive ? `card active ${classes || ''}` : `card ${classes || ''}`;

    return (
        <div className={cardClass} style={style}>
            {children}
        </div>
    );
};

export default Card;
