import { useEffect, useRef, useState } from 'react';
import { AlertErrorNotification } from '../../alerte-notification';
import { useLazyPostFetchData } from '@/app/lib/hooks';
import CalendarElement from '../CalendarElement';
import LoadingSubmitForm from '../../contact/Loading';
import SelectElement from './elements/SelectElement';
import InputElement from './elements/InputElement';

export default function AdminCalendarForm() {
  const { fetchData, isLoading, isError, data } = useLazyPostFetchData();

  const [errorMessage, setErrorMessage] = useState('');
  const [dateValue, setDateValue] = useState<Date | null | undefined>();
  const [selectValue, setSelectValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const formRef = useRef(null);

  async function postAppointment(formData: FormData) {
    setErrorMessage('');
    const rowFormData = {
      date: dateValue?.toISOString().slice(0, 19).replace('T', ' '),
      hour: selectValue,
      commentary: inputValue,
    };
    {
      /*  */
    }
    if (rowFormData.date && rowFormData.hour) {
      console.log(JSON.stringify(rowFormData));
      //   fetchData('http://localhost:3001/login', rowFormData);
    } else {
      setErrorMessage('Veuillez selectionner une date et une heure de rendez-vous');
    }
  }

  useEffect(() => {
    if (data && formRef.current != null) {
      (formRef.current as HTMLFormElement).reset();
    }
  }, [data, isError]);

  return (
    <>
      <form ref={formRef} action={postAppointment} className="flex flex-col justify-center gap-2">
        <CalendarElement setDateValue={setDateValue} />
        <SelectElement setSelectValue={setSelectValue} />
        <InputElement setInputValue={setInputValue} />
        <button
          type="submit"
          className="px-4 py-2 mb-2 bg-greena-400 text-white font-semibold rounded transition-all hover:bg-greena-500 focus:outline-none focus:ring focus:border-greena-400"
        >
          {isLoading ? <LoadingSubmitForm /> : 'Réserver'}
        </button>
        {isError ? <AlertErrorNotification message="Une erreur s'est produite" /> : null}
      </form>
      {errorMessage.length > 0 ? <AlertErrorNotification message={errorMessage} /> : null}
    </>
  );
}
