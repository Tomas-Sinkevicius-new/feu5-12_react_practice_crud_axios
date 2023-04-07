import './card.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
  padding: 1rem;
  box-shadow: 5px 5px 10px rgb(180, 190, 194);
  border: 1px solid rgb(191, 180, 180);
  border-radius: 5px;
  background-color: snow;
`;

// perdaryti kad Div butu style componentas

function Card({ children }) {
  return <StyledCard className="card">{children}</StyledCard>;
}
//prop types buts vienas elementas arba masyvas elementu
Card.propTypes = {
  children: PropTypes.element,
};
export default Card;
