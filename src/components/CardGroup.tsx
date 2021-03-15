interface CardGroupProps {
    classes?: string;
}

const CardGroup: React.FunctionComponent<CardGroupProps> = ({ children, classes }) => {
    return <div className={`card-group ${classes}`}>{children}</div>;
};

export default CardGroup;
