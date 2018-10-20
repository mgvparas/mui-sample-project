import { connect } from 'react-redux';

import { collapseNav } from './SiteHeaderActions.js';

import Header from '../../Presentations/Header/Header.jsx';

const mapStateToProps = ({ siteNav }) => ({
  navIsOpen: siteNav.isOpen
});

const mapDispatchToProps = (dispatch) => ({
  onCollapseButtonClick: () => dispatch(collapseNav())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);