import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

export const dateIsoToString = (isoDateString: string) => {
  return {
    date: moment(isoDateString).format('D MMMM YYYY'),
    hour: moment(isoDateString).format('kk:mm'),
  };
};
