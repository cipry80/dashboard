import { ActionButtons, CardGroup, MyCard, StatisticsGraph, Card } from '../components';

const Home: React.FunctionComponent = () => {
    return (
        <div className="home">
            <div className="card-main">
                <ActionButtons />
                <CardGroup>
                    <Card>Card 1</Card>
                    <Card>Card 2</Card>
                    <Card>Card 3</Card>
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
            <MyCard />
        </div>
    );
};

export default Home;
