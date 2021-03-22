import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const MyCard = () => {
    return (
        <div className="myCard">
            <div className="myCard-header">
                <h3>My Card</h3>
                <FontAwesomeIcon icon={faEllipsisH} aria-hidden="false" data-testid="svg-ellipsis" />
            </div>

            <div className="card-wrapper">
                <div className="card-header">
                    <span className="card-chip"></span>
                    <div className="card-type">VISA</div>
                </div>
                <div className="card-body">
                    <div className="card-number">**** **** **** 9546</div>
                </div>
                <div className="card-footer">
                    <div className="card-holder">Alex Smith</div>
                    <div className="card-date">07/24</div>
                </div>
            </div>
        </div>
    );
};

export default MyCard;
