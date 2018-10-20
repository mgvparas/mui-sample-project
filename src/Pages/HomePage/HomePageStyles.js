const HomePageStyles = (theme) => {
  return {
    homePage: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch',

      height: 'inherit'
    },
    navContainer: {
      flex: '0 0 auto',

      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    },
    mainContainer: {
      flex: '1 1 auto',

      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch'
    },
    headerContainer: {
      flex: '0 0 auto',

      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      alignItems: 'center'
    },
    contentContainer: {
      flex: '1 1 auto',

      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch',

      overflow: 'auto',
      padding: '20px 20px'
    }
  }
};

export default HomePageStyles;