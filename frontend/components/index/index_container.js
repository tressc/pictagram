import { connect } from 'react-redux';
import IndexPage from './index';
import { fetchImages } from '../../actions/image_actions';
import { fetchUsers } from '../../actions/user_actions';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    images: Object.values(state.entities.images),
    users: state.entities.users
  };
};

const mdp = (dispatch) => {
  return {
    fetchImages: (id) => dispatch(fetchImages(id)),
    fetchUsers: () => dispatch(fetchUsers())
  };
};


export default connect(msp, mdp)(IndexPage);
