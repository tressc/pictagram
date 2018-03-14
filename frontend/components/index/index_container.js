import { connect } from 'react-redux';
import IndexPage from './index';
import { fetchImages } from '../../actions/image_actions';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mdp = (dispatch) => {
  return {
    fetchImages: (id) => dispatch(fetchImages(id))
  };
};


export default connect(msp, mdp)(IndexPage);
