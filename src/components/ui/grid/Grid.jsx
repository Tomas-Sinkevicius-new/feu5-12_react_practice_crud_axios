import './grid.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const Cols2 = styled(MyGrid)`
  grid-template-columns: repeat(2, 1fr);
`;

const Cols1 = styled(MyGrid)`
  grid-template-columns: repeat(1, 1fr);
`;

// apjuosiantis elementas suteikiantis papildomu stiliaus ar funkciju dalyku
function Grid(props) {
  const inlineStyleObj = {
    // color: 'tomato',
    gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
  };
  return (
    <MyGrid style={inlineStyleObj} className={'myGrid'}>
      {props.children}
    </MyGrid>
  );
}

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  cols: PropTypes.number,
};

export default Grid;
