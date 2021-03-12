import { ActionButtons, CardGroup, MyCard, StatisticsGraph, Card } from '../components';
import { isMobileDevice } from '../helpers/isMobileDevice';

import analytics from '../images/analytics.png';

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
                            <Card key={index} isActive={isActive} height={isMobileDevice ? '160px' : ''}>
                                <img
                                    className="card-image"
                                    src={image}
                                    alt="analytics graph"
                                    height="55px"
                                    width={isMobileDevice ? '100%' : '60px'}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{title.toUpperCase()}</h5>
                                    <p className="card-text">{amount.toLocaleString()}</p>
                                </div>
                            </Card>
                        );
                    })}
                </CardGroup>
                <StatisticsGraph />
                <CardGroup>
                    <Card maxWidth="420px" height="320px">
                        Card 1
                    </Card>
                    <Card maxWidth="420px" height="320px">
                        Card 2
                    </Card>
                </CardGroup>
            </div>
            {!isMobileDevice && <MyCard />}
        </div>
    );
};

export default Home;
