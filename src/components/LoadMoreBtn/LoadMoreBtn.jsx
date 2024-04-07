import PropTypes from 'prop-types';
import { LoadMoreBtnStyled } from './LoadMoreBtn.styled.js';

export default function LoadMoreBtn({
  text = 'Button',
  onClick,
}) {
  return (<>
    <LoadMoreBtnStyled type='button'
                       onClick={onClick}>{text}</LoadMoreBtnStyled>
  </>);
}

LoadMoreBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
