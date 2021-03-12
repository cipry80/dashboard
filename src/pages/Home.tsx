import { ActionButtons, CardGroup, MyCard, Card, Tooltip } from '../components';
import { isMobileDevice } from '../helpers/isMobileDevice';

import analytics from '../images/analytics.png';
import statistics from '../images/statistics.png';
import spentTime from '../images/spentTime.png';
interface analyticsCardDataProps {
    image: string;
    title: string;
    amount: number;
    isActive: boolean;
}
const analyticsCardData: analyticsCardDataProps[] = [
    { image: analytics, title: 'visitors', amount: 10320, isActive: false },
    { image: analytics, title: 'customers', amount: 4628, isActive: false },
    { image: analytics, title: 'orders', amount: 2980, isActive: true }
];

const Home: React.FunctionComponent = () => {
    return (
        <div className="home">
            <div className="card-main">
                <ActionButtons />
                <CardGroup>
                    {analyticsCardData.map(({ image, title, amount, isActive }, index) => {
                        return (
                            <Card
                                key={index}
                                isActive={isActive}
                                height={isMobileDevice ? '160px' : ''}
                                className="card-analytics"
                            >
                                <img
                                    className="card-image"
                                    src={image}
                                    alt="analytics graph"
                                    height="55px"
                                    width={isMobileDevice ? '100%' : '50px'}
                                />
                                <div className="card-body">
                                    <h2 className="card-title">{title.toUpperCase()}</h2>
                                    <p className="card-text">{amount.toLocaleString()}</p>
                                </div>
                            </Card>
                        );
                    })}
                </CardGroup>
                <CardGroup>
                    <Card className="card-statistics">
                        <img className="card-image" src={statistics} alt="statistics graph" />
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card maxWidth="420px" height="320px" className="card-spentTime">
                        <div className="card-header">
                            <h2 className="card-title">Spent Time</h2>
                            <Tooltip title="4h 26min" color="#ffff" backgroundColor="#FF392B" />
                        </div>
                        <img className="card-image" src={spentTime} alt="spent time graph" />
                    </Card>
                    <Card maxWidth="420px" height="320px" className="card-connect">
                        Card 2
                    </Card>
                </CardGroup>
            </div>
            {!isMobileDevice && <MyCard />}
        </div>
    );
};

export default Home;
