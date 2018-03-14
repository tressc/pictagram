import { connect } from 'react-redux';
import IndexPage from './index';
import { fetchImages } from '../../actions/image_actions';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    images: Object.values(state.entities.images),
    users: state.entities.users
  };
};

const mdp = (dispatch) => {
  return {
    fetchImages: () => dispatch(fetchImages())
  };
};


export default connect(msp, mdp)(IndexPage);
