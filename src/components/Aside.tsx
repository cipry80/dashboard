import { isMobile } from 'react-device-detect';

import { SecondaryNavigation } from './Navigation';

const Aside: React.FunctionComponent = () => {
    return (
        <>
            {!isMobile ? (
                <aside>
                    <SecondaryNavigation />
                </aside>
            ) : null}
        </>
    );
};

export default Aside;
