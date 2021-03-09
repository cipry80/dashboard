import { MobileView, isMobile } from 'react-device-detect';

import { BottomNavigation } from './Navigation';

const Footer: React.FunctionComponent = () => {
    // if (isMobile) {
    //     return (
    //         <footer>
    //             <BottomNavigation />
    //         </footer>
    //     );
    // }
    // return null;
    return <footer>{isMobile ? <BottomNavigation /> : null}</footer>;
};

export default Footer;
