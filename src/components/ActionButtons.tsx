import { isMobileDevice } from '../helpers/isMobileDevice';

const ActionButtons = () => {
    return isMobileDevice ? <div>Buttons on mobile</div> : null;
};

export default ActionButtons;
