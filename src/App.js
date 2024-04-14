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
  const BP_COLOR = '#000';
  let updatedDate = '2024-03-03';

  const [open, setOpen] = useState(false);
  const [eventName, setEventName] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let BP = [
    { title: 'BP', date: '2024-01-06', color: BP_COLOR },
    { title: 'BP', date: '2024-01-21', color: BP_COLOR },
    { title: 'BP', date: '2024-02-04', color: BP_COLOR },
    { title: 'Cycling with P', date: '2024-02-18', color: BP_COLOR },
    { title: 'BP Cat Cafe', date: '2024-03-03', color: BP_COLOR },
    { title: 'BP', date: '2024-03-31', color: BP_COLOR },
    { title: 'BP', date: '2024-04-10', color: BP_COLOR },
  ]

  let ph = [
    { title: 'Christmas', date: '2023-12-25', color: PH_COLOR },
    { title: 'New Year', date: '2024-01-01', color: PH_COLOR },
    { title: 'CNY', start: '2024-02-10', end: '2024-02-13', color: PH_COLOR },
    { title: 'Good Friday', date: '2024-03-29', color: PH_COLOR },
    { title: 'Hari Raya Puasa', date: '2024-04-10', color: PH_COLOR },
    { title: 'Labour Day', date: '2024-05-01', color: PH_COLOR },
    { title: 'Vesak Day', date: '2024-05-22', color: PH_COLOR },
    { title: 'Hari Raya Haji', date: '2024-06-17', color: PH_COLOR },
    { title: 'National Day', date: '2024-08-09', color: PH_COLOR },
    { title: 'Deepavali', date: '2024-10-31', color: PH_COLOR },
    { title: 'Christmas Day', date: '2024-12-25', color: PH_COLOR },
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
    { title: 'Genting', start: '2024-01-26', end: '2024-01-29', color: '#6897BB' },
    { title: 'Dental', date: '2024-02-03'},
    { title: 'GG Lunch', date: '2024-02-03'},
    { title: 'CNY Eve Dinner', date: '2024-02-09'},
    { title: 'Valentine\'s Dinner', date: '2024-02-14'},
    { title: 'W Dinner', date: '2024-02-16'},
    { title: '1st anniversary ❤️', date: '2024-03-05', color: '#ff6666'},
    { title: 'Doc appt', date: '2024-02-27'},
    { title: 'Blood test', date: '2024-03-23'},
    { title: 'Doc appt', date: '2024-03-27'},
    { title: 'ITZY Concert!', date: '2024-04-06'},
    { title: 'Roast Duck', date: '2024-04-14'},
    { title: 'New coy meeting', date: '2024-04-15'},
    { title: 'Hotel staycay ❤️', date: '2024-05-04', color: '#ff6666'},
    { title: 'Blood test', date: '2024-05-11'},
    { title: 'Doc appt', date: '2024-05-18'},
  ];

  let events = [...ph, ...myEvents, ...BP];

  const onEventClicked = (e) => {
    setEventName(e.event.title);
    handleOpen();
  };

  return (
    <div className='App md:grid md:grid-cols-4 h-screen p-8 bg'>
      <div className='mb-8'>
        <h1 className='text-2xl font-bold underline mb-8'>Some  Calendar</h1>
        <div className='left-col md:pb-8 md:pr-8'>
          <div className='text-xl'>
            A calendar that may or may not be real events.
          </div>
          <div className='mt-4 text-gray-700 italic'>Last updated: {updatedDate}</div>
        </div>
      </div>
      <div className='md:col-span-3 md:h-full h-[65vh] mb-8'>
        <FullCalendar
          plugins={[dayGridPlugin]}
          height='100%'
          initialView='dayGridMonth'
          events={events}
          firstDay={1}
          eventClick={onEventClicked}
          dayMaxEventRows={true}
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
