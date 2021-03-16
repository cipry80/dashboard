import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCreditCard } from '@fortawesome/free-solid-svg-icons';

interface ToggleButtonsProps {
    checked: any;
    onChange: any;
}

const ToggleButtons: React.FunctionComponent<ToggleButtonsProps> = ({ checked, onChange }) => {
    return (
        <label className="toggle-switch">
            <FontAwesomeIcon icon={faChartBar} />
            <input type="checkbox" onChange={e => onChange(e.target.checked)} />
            <span className="toggle-switch-slider"></span>
            <FontAwesomeIcon icon={faCreditCard} />
        </label>
    );
};

export default ToggleButtons;
