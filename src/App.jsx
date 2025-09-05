import { useState, useEffect } from 'react';
import Calendar from './components/Calendar.jsx';
import StorytellingCard from './components/StorytellingCard.jsx';
import './App.css';

function App() {
  const [storytellingData, setStorytellingData] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCard, setShowCard] = useState(false);

  // Carregar dados do localStorage na inicialização
  useEffect(() => {
    const savedData = localStorage.getItem('storytelling-calendar-data');
    if (savedData) {
      try {
        setStorytellingData(JSON.parse(savedData));
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    }
  }, []);

  // Salvar dados no localStorage sempre que houver mudanças
  useEffect(() => {
    localStorage.setItem('storytelling-calendar-data', JSON.stringify(storytellingData));
  }, [storytellingData]);

  const formatDateKey = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowCard(true);
  };

  const handleSaveStorytellingData = (data) => {
    const dateKey = formatDateKey(selectedDate);
    setStorytellingData(prev => ({
      ...prev,
      [dateKey]: data
    }));
  };

  const handleCloseCard = () => {
    setShowCard(false);
    setSelectedDate(null);
  };

  const getCurrentDateData = () => {
    if (!selectedDate) return null;
    const dateKey = formatDateKey(selectedDate);
    return storytellingData[dateKey] || {
      projects: [],
      storiesByProfile: {
        'Big Boss (Principal)': [],
        'Big Boss (Reserva)': [],
        'Big Boss (Trader)': [],
        'Big Boss (Europa)': []
      },
      videoIdeas: [],
      appointments: [],
      groups: [],
      funnel: [],
      date: dateKey
    };
  };

  return (
    <div className="app min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <header className="app-header border-b border-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Calendário de <span className="text-gold">Storytelling</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Organize seus lançamentos e postagens
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <Calendar 
          onDateClick={handleDateClick}
          storytellingData={storytellingData}
        />
      </main>

      {/* Storytelling Card Modal */}
      {showCard && selectedDate && (
        <StorytellingCard
          isOpen={showCard}
          selectedDate={selectedDate}
          data={getCurrentDateData()}
          onSave={handleSaveStorytellingData}
          onClose={handleCloseCard}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-gray-800/50 mt-16">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-gray-500">
            Calendário de Storytelling - Organize e acompanhe seus conteúdos
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

