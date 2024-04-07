import { useEffect, useRef, useState } from 'react';
import { AlertErrorNotification } from '../../alerte-notification';
import { MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { useLazyPostFetchData } from '@/app/lib/hooks';
import CalendarElement from '../calendar';
import LoadingSubmitForm from '../../contact/Loading';

export default function AdminCalendarForm() {
  const { fetchData, isLoading, isError, data } = useLazyPostFetchData();
  const handleChange = (event: SelectChangeEvent) => {
    setHour(event.target.value as string);
  };
  const [errorMessage, setErrorMessage] = useState('');
  const [hour, setHour] = useState('');
  const [dateValue, setDateValue] = useState<Date | null>();
  const formRef = useRef(null);

  async function postAppointment(formData: FormData) {
    setErrorMessage('');
    const rowFormData = {
      date: dateValue,
      hour: formData.get('hour'),
      comments: formData.get('comments'),
    };
    {
      /* TODO: Fetch vers la bonne route */
    }
    if (rowFormData.date && rowFormData.hour) {
      console.log(JSON.stringify(rowFormData));
      //   fetchData('http://localhost:3001/login', rowFormData);
    } else {
      setErrorMessage(
        'Veuillez selectionner une date et une heure de rendez-vous'
      );
    }
  }

  useEffect(() => {
    if (data && formRef.current != null) {
      (formRef.current as HTMLFormElement).reset();
    }
  }, [data, isError]);
  return (
    <>
      <form
        ref={formRef}
        action={postAppointment}
        className="flex flex-col justify-center gap-2"
      >
        <CalendarElement setDateValue={setDateValue} />
        <Select
          id="hour"
          name="hour"
          value={hour}
          onChange={handleChange}
          label="Heure du rendez-vous"
        >
          <MenuItem key="none" value="">
            <em>Veuillez choisir un créneau</em>
          </MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
        <TextField
          fullWidth
          label="Commentaire"
          placeholder="Ajouter un commentaire (optionnel)"
          name="comments"
          className="focus:ring-0 hover:ring-0 active:ring-0"
        />
        <button
          type="submit"
          className="px-4 py-2 mb-2 bg-greena-400 text-white font-semibold rounded transition-all hover:bg-greena-500 focus:outline-none focus:ring focus:border-greena-400"
        >
          {isLoading ? <LoadingSubmitForm /> : 'Réserver'}
        </button>
        {isError ? (
          <AlertErrorNotification message="Une erreur s'est produite" />
        ) : null}
      </form>
      {errorMessage.length > 0 ? (
        <AlertErrorNotification message={errorMessage} />
      ) : null}
    </>
  );
}
