import { connect } from 'react-redux';

import Nav from '../../Presentations/Nav/Nav.jsx';

const mapStateToProps = ({ siteNav }) => ({
  isOpen: siteNav.isOpen
});

export default connect(
  mapStateToProps,
  null
)(Nav);