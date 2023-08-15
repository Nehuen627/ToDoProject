import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useState, useEffect } from 'react';
import GetData from '../LS/GetData';
import { useContext, useRef } from 'react';
import { SidebarContext } from '../../Context/padding';

const CalendarComponent = () => {
    const { sidebarState } = useContext(SidebarContext);
    const [events, setEvents] = useState([]);
    const calendarRef = useRef(null);

    useEffect(() => {
        const updateCalendarSize = () => {
            if (calendarRef.current) {
                let calendarApi = calendarRef.current.getApi();
                calendarApi.updateSize();
            }
        };

        // Aquí establecemos el temporizador para llamar a updateCalendarSize con un retraso.
        const timer = setTimeout(updateCalendarSize, 1000);

        // Limpia el temporizador si el componente se desmonta
        return () => clearTimeout(timer);
    }, [sidebarState]);

    useEffect(() => {
        const tasks = GetData("todo");

        const taskEvents = tasks
            .filter(task => task.State !== 'finished')
            .map(task => ({
                title: task.Title,
                start: task.Date,
            }));

        setEvents(taskEvents);
    }, [sidebarState]);

    return (
        <div className={`${sidebarState ? "classWithSidebar" : "classWithoutSidebar"}`}>
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
                aspectRatio={2.2}
            />
        </div>
    );
}

export default CalendarComponent;