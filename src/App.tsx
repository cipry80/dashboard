import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Home, Feedback, Contacts, Help, NotFound } from './pages';

import { Layout } from './components';

function App() {
    return (
        <div className="layout">
            <Layout>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/feedback" component={Feedback} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/help" component={Help} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
