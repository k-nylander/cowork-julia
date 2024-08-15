import { escala_horarios } from "../data";

const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

// tools/schedule_handler.js
class scheduleHandler {
    constructor() {
        this.schedule = escala_horarios;
        this.today = this.todaySchedule();
        this.getDaySchedule("Segunda");
    }
    
    todaySchedule = () => {
        const DateT = new Date();
        let today = DateT.getUTCDay();
        return (today != 0 ? this.schedule[today] : null);
    }

    getDaySchedule = (day) => {
        if (typeof(day) === 'number') return this.schedule[day];
        const dateRegex = /^20[0-9]{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
        day = dateRegex.test(day) ? (new Date(day).getUTCDay()) : days.indexOf(day);
        return this.schedule[day];
    }
}

let schedule = new scheduleHandler();
console.log(schedule.today);
console.log(schedule.getDaySchedule('2024-10-12'));

export default scheduleHandler;