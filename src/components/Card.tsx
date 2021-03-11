interface CardProps {
    height?: string;
    maxWidth?: string;
}

const Card: React.FunctionComponent<CardProps> = ({ children, height, maxWidth }) => {
    const style = {
        maxWidth: maxWidth || '260px',
        height: height || '110px'
    };
    return (
        <div className="card" style={style}>
            {children}
        </div>
    );
};

export default Card;
