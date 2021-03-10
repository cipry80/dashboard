import { isMobile } from 'react-device-detect';

import { SecondaryNavigation } from './Navigation';

const Footer: React.FunctionComponent = () => {
    return (
        <>
            {isMobile ? (
                <footer>
                    <SecondaryNavigation />
                </footer>
            ) : (
                <aside>
                    <SecondaryNavigation />
                </aside>
            )}
        </>
    );
};

export default Footer;
