import { SITE_HEADER_COLLAPSE_BUTTON_CLICK } from '../../actions.js';

const getDefaults = () => ({
  isOpen: true
});

const SiteNavReducer = (state = getDefaults(), action) => {
  switch(action.type) {
    case SITE_HEADER_COLLAPSE_BUTTON_CLICK: {
      return Object.assign({}, state, {
        isOpen: state.isOpen ? false : true
      });
    }
    default: {
      return state;
    }
  }
};

export default SiteNavReducer;