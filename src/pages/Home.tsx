import { ActionButtons, CardGroup, MyCard, Card, Tooltip } from '../components';
import { isMobileDevice } from '../helpers/isMobileDevice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faStar, faPlayCircle, faClock, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
                <CardGroup classes="card-analytics">
                    {analyticsCardData.map(({ image, title, amount, isActive }, index) => {
                        return (
                            <Card key={index} isActive={isActive} height={isMobileDevice ? '140px' : ''}>
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
                <CardGroup classes="card-statistics">
                    <Card>
                        <img className="card-image" src={statistics} alt="statistics graph" />
                    </Card>
                </CardGroup>
                <CardGroup classes="card-other-statistics">
                    <Card height="320px" classes="card-spentTime">
                        <div className="card-header">
                            <h2 className="card-title">Spent Time</h2>
                            <Tooltip title="4h 26min" color="#ffff" backgroundColor="#FF392B" />
                        </div>
                        <img className="card-image" src={spentTime} alt="spent time graph" />
                    </Card>

                    <Card height="320px" classes="card-connect">
                        <div className="card-header">
                            <FontAwesomeIcon icon={faUserCircle} />
                            <div className="card-header_name">
                                <h3 className="card-title">Lilly Donovan</h3>
                                <p className="card-text">Businees Trainer</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card-title">How to properly manage your personal budget?</p>
                            <div className="card-icons">
                                <FontAwesomeIcon icon={faPlayCircle} color="#3326AE" /> <span>Video</span>
                                <FontAwesomeIcon icon={faClock} color="#00C3F8" /> <span>15 Mins</span>
                                <FontAwesomeIcon icon={faStar} color="ff392b" /> <span>12 likes</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            <p className="card-title">5 days ago</p>

                            <button className="btn">
                                Connect
                                <FontAwesomeIcon icon={faChevronRight} color="#ffff" />
                            </button>
                        </div>
                    </Card>
                </CardGroup>
            </div>
            {!isMobileDevice && (
                <MyCard>
                    <h3>Total Sales</h3>
                </MyCard>
            )}
        </div>
    );
};

export default Home;
