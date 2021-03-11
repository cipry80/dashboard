import { ActionButtons, CardGroup, MyCard, StatisticsGraph, Card } from '../components';

const Home: React.FunctionComponent = () => {
    return (
        <div className="home">
            <div className="card-main">
                <ActionButtons />
                <CardGroup>
                    <Card />
                    <Card />
                    <Card />
                </CardGroup>
                <StatisticsGraph />
                <CardGroup>
                    <Card />
                    <Card />
                </CardGroup>
            </div>
            <MyCard />
        </div>
    );
};

export default Home;
