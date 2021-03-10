import { isMobileDevice } from '../helpers/isMobileDevice';
import { SecondaryNavigation } from './Navigation';

const Aside: React.FunctionComponent = () => {
    return (
        <>
            {!isMobileDevice ? (
                <aside>
                    <SecondaryNavigation />
                </aside>
            ) : null}
        </>
    );
};

export default Aside;
