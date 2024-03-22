import Notiflix from "notiflix";

export function notiflixError(type, message) {
  if(type === 'failure'){
    Notiflix.Notify.failure(
        message,
        {
            position: 'center-top',
            fontSize: '18px',
            clickToClose: true,
            timeout: 5000,
        }
      )
  }

  if(type === 'info') {
    Notiflix.Report.info(
      'Unauthorized', 
      message, 
      'OK',
      {
          info: {
              svgColor: 'rgba(255, 25, 0, 0.7)',
              buttonBackground: '#F4C550',
              buttonColor: '#242424',
              backOverlayColor: 'rgba(55, 55, 55, 0.5)'
          }
      }
  );
  return;
  } 
}
