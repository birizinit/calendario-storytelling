import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Calendar = ({ onDateClick, storytellingData }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Adicionar dias vazios do mês anterior
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Adicionar dias do mês atual
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const formatDateKey = (date) => {
    if (!date) return '';
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const getDateInfo = (date) => {
    if (!date) return null;
    const dateKey = formatDateKey(date);
    const dayData = storytellingData[dateKey];
    if (!dayData) return null;
    
    const totalStories = dayData.storiesByProfile ? 
      Object.values(dayData.storiesByProfile).reduce((total, stories) => total + stories.length, 0) : 0;
    
    return {
      hasProjects: dayData.projects && dayData.projects.length > 0,
      hasAppointments: dayData.appointments && dayData.appointments.length > 0,
      hasStories: totalStories > 0,
      hasVideoIdeas: dayData.videoIdeas && dayData.videoIdeas.length > 0,
      hasGroups: dayData.groups && dayData.groups.length > 0,
      hasFunnel: dayData.funnel && dayData.funnel.length > 0
    };
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pendente':
        return 'bg-yellow-500/20 border-yellow-500/50';
      case 'gravado':
        return 'bg-blue-500/20 border-blue-500/50';
      case 'postado':
        return 'bg-green-500/20 border-green-500/50';
      default:
        return 'bg-gray-800/50 border-gray-700/50';
    }
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="calendar-container">
      {/* Header do Calendário */}
      <div className="calendar-header flex items-center justify-between mb-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateMonth(-1)}
          className="text-gold hover:bg-gold/10"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <div className="flex items-center gap-3">
          <CalendarIcon className="h-6 w-6 text-gold" />
          <h2 className="text-2xl font-bold text-white">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateMonth(1)}
          className="text-gold hover:bg-gold/10"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Grid do Calendário */}
      <div className="calendar-grid">
        {/* Cabeçalho dos dias da semana */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {dayNames.map((dayName) => (
            <div
              key={dayName}
              className="text-center text-sm font-medium text-gray-400 py-2"
            >
              {dayName}
            </div>
          ))}
        </div>

        {/* Grid dos dias */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((date, index) => {
            const dateInfo = getDateInfo(date);
            const isToday = date && 
              date.toDateString() === new Date().toDateString();

            return (
              <div
                key={index}
                className={`
                  calendar-day
                  ${date ? 'cursor-pointer' : 'cursor-default'}
                  ${date ? 'hover:scale-105' : ''}
                  ${isToday ? 'ring-2 ring-gold' : ''}
                  ${date && dateInfo ? 'bg-gray-800/50 border-gray-700/50' : 'bg-gray-800/30 border-gray-700/30'}
                  ${date ? 'transition-all duration-200' : ''}
                `}
                onClick={() => {
                  if (date) {
                    console.log('Data clicada:', date);
                    onDateClick(date);
                  }
                }}
              >
                {date && (
                  <>
                    <div className="text-lg font-semibold text-white mb-1">
                      {date.getDate()}
                    </div>
                    {dateInfo && (
                      <div className="flex justify-center gap-1 flex-wrap">
                        {dateInfo.hasProjects && (
                          <div className="w-2 h-2 rounded-full bg-blue-500" title="Projetos" />
                        )}
                        {dateInfo.hasAppointments && (
                          <div className="w-2 h-2 rounded-full bg-red-500" title="Compromissos" />
                        )}
                        {dateInfo.hasStories && (
                          <div className="w-2 h-2 rounded-full bg-green-500" title="Stories" />
                        )}
                        {dateInfo.hasVideoIdeas && (
                          <div className="w-2 h-2 rounded-full bg-purple-500" title="Ideias de Vídeo" />
                        )}
                        {dateInfo.hasGroups && (
                          <div className="w-2 h-2 rounded-full bg-orange-500" title="Grupos" />
                        )}
                        {dateInfo.hasFunnel && (
                          <div className="w-2 h-2 rounded-full bg-cyan-500" title="Funil" />
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;

