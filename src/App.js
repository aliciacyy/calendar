import './App.css';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const PH_COLOR = '#0E6210';
  const [open, setOpen] = useState(false);
  const [eventName, setEventName] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let ph = [
    { title: 'Christmas', date: '2023-12-25', color: PH_COLOR },
    { title: 'New Year', date: '2024-01-01', color: PH_COLOR },
    { title: 'CNY', start: '2024-02-10', end: '2024-02-10', color: PH_COLOR },
    { title: 'Good Friday', date: '2024-03-29', color: PH_COLOR },
  ];

  let myEvents = [
    { title: 'Company Xmas Lunch', date: '2023-12-11' },
    { title: 'Panda', date: '2023-12-17' },
    // { title: 'AGO', date: '2023-12-30T12:30:00' },
    { title: 'AGO', date: '2023-12-30' },
    { title: 'Hotpot fam', date: '2023-12-31' },
    { title: 'Cousin', start: '2023-12-24', end: '2023-12-26' },
    { title: 'Mama\'s return', date: '2024-01-04' },
    { title: 'Hokkaido!', start: '2024-01-12', end: '2024-01-20', color: '#6897BB' },
  ];

  let events = [...ph, ...myEvents];

  const onEventClicked = (e) => {
    setEventName(e.event.title);
    handleOpen();
  };

  return (
    <div className='App md:grid md:grid-cols-4 h-screen p-8'>
      <div className='mb-8'>
        <h1 className='text-2xl font-bold underline mb-8'>Some  Calendar</h1>
        <div className='text-xl'>
          A public calendar that may or may not be real events.
        </div>
      </div>
      <div className='md:col-span-3 h-full'>
        <FullCalendar
          plugins={[dayGridPlugin]}
          height='100%'
          initialView='dayGridMonth'
          events={events}
          firstDay={1}
          eventClick={onEventClicked}
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-description'>
            {eventName}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default App;
