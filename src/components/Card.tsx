interface CardProps {
    height?: string;

    isActive?: boolean;
    classes: string;
}

const Card: React.FunctionComponent<CardProps> = ({ children, height, isActive, classes }) => {
    const style = {
        height: height
    };
    return (
        <div className={isActive ? `card ${classes} active` : `card ${classes}`} style={style}>
            {children}
        </div>
    );
};

export default Card;
