const CircularProgressBar: React.FC = () => {
    return (
        <div className="progress-bar-container">
            <div className="box-outside">
                <svg>
                    <circle className="inside-circle" cx="50%" cy="50%" r="50%"></circle>
                </svg>
                <div className="box-inside"></div>

                <div className="counter">
                    <span>38%</span>
                </div>
            </div>
        </div>
    );
};

export default CircularProgressBar;
