import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface ToggleButtonsProps {
    checked: any;
    onChange: any;
}

const ToggleButtons: React.FunctionComponent<ToggleButtonsProps> = ({ checked, onChange }) => {
    console.log(checked, 'checked');
    const [isActive, setIsActive] = useState(true);

    const toggleActive = () => setIsActive(!isActive);

    return (
        <label className="toggle-switch">
            <FontAwesomeIcon icon={faChartBar} className={isActive ? 'active' : ''} onClick={toggleActive} />
            <input type="checkbox" onChange={e => onChange(e.target.checked)} />
            <span className="toggle-switch-slider"></span>
            <FontAwesomeIcon icon={faCreditCard} className={isActive ? '' : 'active'} onClick={toggleActive} />
        </label>
    );
};

export default ToggleButtons;
