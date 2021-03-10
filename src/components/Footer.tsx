import { isMobileDevice } from '../helpers/isMobileDevice';
import { SecondaryNavigation } from './Navigation';

const Footer: React.FunctionComponent = () => {
    return (
        <>
            {isMobileDevice ? (
                <footer>
                    <SecondaryNavigation />
                </footer>
            ) : null}
        </>
    );
};

export default Footer;
