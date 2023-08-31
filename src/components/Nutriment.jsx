// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export default function Nutriment({ icon, content, name }) {
  return (
    <div className="nutriment-container">
      <img
        src={icon}
        alt={icon.split('assets/')[1]}
        className="nutriment-icon"
      ></img>
      <div className="nutriment-content">
        <h2 className="nutriment-value">{content}</h2>
        <span className="nutriment-name">{name}</span>
      </div>
    </div>
  );
}

Nutriment.propTypes = {
  icon: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
Nutriment.defaultProps = {
  icon: '',
  content: '',
  name: '',
};
