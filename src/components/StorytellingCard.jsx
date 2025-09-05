import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Plus, Trash2, FileText, Calendar, Clock, Users, Target, Video, Phone } from 'lucide-react';

const StorytellingCard = ({ isOpen, onClose, data, onSave, selectedDate }) => {
  const [activeTab, setActiveTab] = useState('projects');
  const [activeStoryProfile, setActiveStoryProfile] = useState('all');
  
  const [formData, setFormData] = useState({
    projects: [],
    stories: [],
    videoIdeas: [],
    appointments: [],
    groups: [],
    funnel: [],
    date: ''
  });

  useEffect(() => {
    if (data) {
      setFormData({
        projects: data.projects || [],
        stories: (data.stories || []).map(story => ({
          ...story,
          profile: story.profile || 'Big Boss (Principal)'
        })),
        videoIdeas: data.videoIdeas || [],
        appointments: data.appointments || [],
        groups: data.groups || [],
        funnel: data.funnel || [],
        date: data.date || ''
      });
    }
  }, [data]);

  const profiles = [
    'Big Boss (Principal)',
    'Big Boss (Reserva)', 
    'Big Boss (Trader)',
    'Big Boss (Europa)'
  ];

  const objectives = [
    { value: 'captacao', label: 'Captação de Leads', color: 'green' },
    { value: 'prova_social', label: 'Prova Social', color: 'blue' },
    { value: 'lancamento', label: 'Lançamento', color: 'gold' },
    { value: 'engajamento', label: 'Engajamento', color: 'purple' }
  ];

  const tabs = [
    { id: 'projects', label: 'Projetos', icon: Target, count: formData.projects.length },
    { id: 'stories', label: 'Stories', icon: FileText, count: formData.stories.length },
    { id: 'videoIdeas', label: 'Ideias de Vídeo', icon: Video, count: formData.videoIdeas.length },
    { id: 'appointments', label: 'Compromissos', icon: Calendar, count: formData.appointments.length },
    { id: 'groups', label: 'Grupos', icon: Users, count: formData.groups.length },
    { id: 'funnel', label: 'Funil', icon: Target, count: formData.funnel.length }
  ];

  // Funções para Projects
  const addProject = () => {
    const newProject = {
      id: Date.now(),
      name: '',
      title: '',
      objective: 'captacao',
      plan: '',
      responsible: 'Big Boss (Principal)',
      storytelling: '',
      status: 'pendente'
    };
    setFormData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }));
  };

  const updateProject = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.map(project => 
        project.id === id ? { ...project, [field]: value } : project
      )
    }));
  };

  const removeProject = (id) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.filter(project => project.id !== id)
    }));
  };

  // Funções para Stories
  const addStory = () => {
    const newStory = {
      id: Date.now(),
      title: 'Novo Story',
      mainText: '',
      observations: '',
      cta: '',
      projectId: '',
      profile: 'Big Boss (Principal)',
      postTime: '',
      isSequence: false,
      sequenceOrder: '',
      isRecorded: false
    };
    setFormData(prev => ({
      ...prev,
      stories: [...prev.stories, newStory]
    }));
  };

  const updateStory = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      stories: prev.stories.map(story => 
        story.id === id ? { ...story, [field]: value } : story
      )
    }));
  };

  const removeStory = (id) => {
    setFormData(prev => ({
      ...prev,
      stories: prev.stories.filter(story => story.id !== id)
    }));
  };

  // Funções para Video Ideas
  const addVideoIdea = () => {
    const newIdea = {
      id: Date.now(),
      description: '',
      referenceLink: '',
      attachment: '',
      profile: 'Big Boss (Principal)'
    };
    setFormData(prev => ({
      ...prev,
      videoIdeas: [...prev.videoIdeas, newIdea]
    }));
  };

  const updateVideoIdea = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      videoIdeas: prev.videoIdeas.map(idea => 
        idea.id === id ? { ...idea, [field]: value } : idea
      )
    }));
  };

  const removeVideoIdea = (id) => {
    setFormData(prev => ({
      ...prev,
      videoIdeas: prev.videoIdeas.filter(idea => idea.id !== id)
    }));
  };

  // Funções para Appointments
  const addAppointment = () => {
    const newAppointment = {
      id: Date.now(),
      title: '',
      type: 'call',
      time: '',
      description: ''
    };
    setFormData(prev => ({
      ...prev,
      appointments: [...prev.appointments, newAppointment]
    }));
  };

  const updateAppointment = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      appointments: prev.appointments.map(appointment => 
        appointment.id === id ? { ...appointment, [field]: value } : appointment
      )
    }));
  };

  const removeAppointment = (id) => {
    setFormData(prev => ({
      ...prev,
      appointments: prev.appointments.filter(appointment => appointment.id !== id)
    }));
  };

  // Funções para Groups
  const addGroup = () => {
    const newGroup = {
      id: Date.now(),
      title: '',
      type: 'video',
      url: '',
      status: 'planejado',
      description: ''
    };
    setFormData(prev => ({
      ...prev,
      groups: [...prev.groups, newGroup]
    }));
  };

  const updateGroup = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      groups: prev.groups.map(group => 
        group.id === id ? { ...group, [field]: value } : group
      )
    }));
  };

  const removeGroup = (id) => {
    setFormData(prev => ({
      ...prev,
      groups: prev.groups.filter(group => group.id !== id)
    }));
  };

  // Funções para Funnel
  const addFunnel = () => {
    const newFunnel = {
      id: Date.now(),
      title: '',
      type: 'video',
      url: '',
      status: 'planejado',
      description: ''
    };
    setFormData(prev => ({
      ...prev,
      funnel: [...prev.funnel, newFunnel]
    }));
  };

  const updateFunnel = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      funnel: prev.funnel.map(funnel => 
        funnel.id === id ? { ...funnel, [field]: value } : funnel
      )
    }));
  };

  const removeFunnel = (id) => {
    setFormData(prev => ({
      ...prev,
      funnel: prev.funnel.filter(funnel => funnel.id !== id)
    }));
  };

  const saveIndividualItem = (type, id) => {
    const updatedData = { ...formData, date: selectedDate };
    onSave(updatedData);
    alert(`${type} salvo com sucesso!`);
  };

  const formatDateKey = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900/95 backdrop-blur-md rounded-2xl border border-gray-700/50 w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700/50 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
          <div className="flex items-center gap-3">
            <Calendar className="h-6 w-6 text-gold" />
            <div>
              <h3 className="text-xl font-bold text-white">
                {selectedDate ? new Date(selectedDate).toLocaleDateString('pt-BR', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                }) : 'Calendário de Storytelling'}
              </h3>
              <p className="text-sm text-gray-400">Organize seus lançamentos e postagens</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-400 hover:text-white hover:bg-gray-800/50"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto border-b border-gray-700/50 bg-gray-800/30">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'text-gold border-b-2 border-gold bg-gold/10'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
                {tab.count > 0 && (
                  <span className="bg-gold/20 text-gold text-xs px-2 py-0.5 rounded-full">
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          
          {/* Stories Tab - VERSÃO SIMPLES */}
          {activeTab === 'stories' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-white">Stories por Perfil</h4>
                <Button
                  onClick={addStory}
                  className="bg-gold hover:bg-gold/90 text-black"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Story
                </Button>
              </div>

              {/* Profile Filter Buttons */}
              <div className="flex flex-wrap gap-2 mb-4">
                <button
                  onClick={() => setActiveStoryProfile('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeStoryProfile === 'all' 
                      ? 'bg-gold text-black' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Todos ({formData.stories.length})
                </button>
                {profiles.map((profile) => {
                  const count = formData.stories.filter(story => story.profile === profile).length;
                  return (
                    <button
                      key={profile}
                      onClick={() => setActiveStoryProfile(profile)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeStoryProfile === profile 
                          ? 'bg-gold text-black' 
                          : 'bg-gray-700 text-white hover:bg-gray-600'
                      }`}
                    >
                      {profile.replace('Big Boss ', '')} ({count})
                    </button>
                  );
                })}
              </div>

              {/* Stories List */}
              <div className="space-y-4">
                <h5 className="text-white font-medium">
                  {activeStoryProfile === 'all' ? 'Todos os Stories' : `Stories - ${activeStoryProfile}`}
                </h5>
                
                {(() => {
                  const filteredStories = activeStoryProfile === 'all' 
                    ? formData.stories 
                    : formData.stories.filter(story => story.profile === activeStoryProfile);
                  
                  if (filteredStories.length === 0) {
                    return (
                      <div className="text-center py-8 text-gray-400">
                        <FileText className="h-8 w-8 mx-auto mb-3 opacity-50" />
                        <p>
                          {activeStoryProfile === 'all' 
                            ? 'Nenhum story adicionado ainda' 
                            : `Nenhum story para ${activeStoryProfile}`
                          }
                        </p>
                      </div>
                    );
                  }

                  return filteredStories.map((story) => (
                    <div key={story.id} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <div className="flex items-center justify-between mb-4">
                        <h6 className="text-white font-medium">{story.title}</h6>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            onClick={() => saveIndividualItem('stories', story.id)}
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            Salvar
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeStory(story.id)}
                            className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Número do Story
                            </label>
                            <input
                              type="text"
                              value={story.sequenceOrder || ''}
                              onChange={(e) => updateStory(story.id, 'sequenceOrder', e.target.value)}
                              placeholder="1, 2, 3, 5..."
                              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Perfil
                            </label>
                            <select
                              value={story.profile}
                              onChange={(e) => updateStory(story.id, 'profile', e.target.value)}
                              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                            >
                              {profiles.map((profile) => (
                                <option key={profile} value={profile}>
                                  {profile}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Horário
                            </label>
                            <input
                              type="time"
                              value={story.postTime}
                              onChange={(e) => updateStory(story.id, 'postTime', e.target.value)}
                              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Conteúdo do Story
                          </label>
                          <textarea
                            value={story.mainText}
                            onChange={(e) => updateStory(story.id, 'mainText', e.target.value)}
                            placeholder="Descreva o conteúdo do story..."
                            rows={3}
                            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                          />
                        </div>

                        <div className="flex items-center gap-6">
                          <label className="flex items-center gap-2 text-sm text-gray-300">
                            <input
                              type="checkbox"
                              checked={story.isSequence}
                              onChange={(e) => updateStory(story.id, 'isSequence', e.target.checked)}
                              className="rounded border-gray-600 bg-gray-700 text-gold focus:ring-gold/50"
                            />
                            Sequência no mesmo horário
                          </label>

                          <label className="flex items-center gap-2 text-sm text-gray-300">
                            <input
                              type="checkbox"
                              checked={story.isRecorded}
                              onChange={(e) => updateStory(story.id, 'isRecorded', e.target.checked)}
                              className="rounded border-gray-600 bg-gray-700 text-gold focus:ring-gold/50"
                            />
                            Story gravado
                          </label>
                        </div>
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </div>
          )}

          {/* Outras abas continuam iguais... */}
          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-white">Projetos</h4>
                <Button
                  onClick={addProject}
                  className="bg-gold hover:bg-gold/90 text-black"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Projeto
                </Button>
              </div>

              {formData.projects.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <Target className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Nenhum projeto adicionado ainda</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {formData.projects.map((project) => (
                    <div key={project.id} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="text-white font-medium">
                          {project.name || project.title || 'Novo Projeto'}
                        </h5>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            onClick={() => saveIndividualItem('projects', project.id)}
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            Salvar
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeProject(project.id)}
                            className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Nome do Projeto
                            </label>
                            <input
                              type="text"
                              value={project.name}
                              onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                              placeholder="Nome para identificação rápida"
                              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Título do Projeto
                            </label>
                            <input
                              type="text"
                              value={project.title}
                              onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                              placeholder="Título detalhado do projeto"
                              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Objetivo
                            </label>
                            <select
                              value={project.objective}
                              onChange={(e) => updateProject(project.id, 'objective', e.target.value)}
                              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                            >
                              {objectives.map((obj) => (
                                <option key={obj.value} value={obj.value}>
                                  {obj.label}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Responsável
                            </label>
                            <select
                              value={project.responsible}
                              onChange={(e) => updateProject(project.id, 'responsible', e.target.value)}
                              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                            >
                              {profiles.map((profile) => (
                                <option key={profile} value={profile}>
                                  {profile}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Plano do Dia
                          </label>
                          <textarea
                            value={project.plan}
                            onChange={(e) => updateProject(project.id, 'plan', e.target.value)}
                            placeholder="Descreva as ações, gravações, posts..."
                            rows={3}
                            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Storytelling
                          </label>
                          <textarea
                            value={project.storytelling}
                            onChange={(e) => updateProject(project.id, 'storytelling', e.target.value)}
                            placeholder="Roteiro do storytelling..."
                            rows={4}
                            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Status
                          </label>
                          <select
                            value={project.status}
                            onChange={(e) => updateProject(project.id, 'status', e.target.value)}
                            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                          >
                            <option value="pendente">Pendente</option>
                            <option value="gravado">Gravado</option>
                            <option value="postado">Postado</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Video Ideas Tab */}
          {activeTab === 'videoIdeas' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-white">Ideias de Vídeos</h4>
                <Button
                  onClick={addVideoIdea}
                  className="bg-gold hover:bg-gold/90 text-black"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Ideia
                </Button>
              </div>

              {formData.videoIdeas.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <Video className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Nenhuma ideia de vídeo adicionada ainda</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {formData.videoIdeas.map((idea) => (
                    <div key={idea.id} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="text-white font-medium">Ideia de Vídeo</h5>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            onClick={() => saveIndividualItem('videoIdeas', idea.id)}
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            Salvar
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeVideoIdea(idea.id)}
                            className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Descrição
                            </label>
                            <textarea
                              value={idea.description}
                              onChange={(e) => updateVideoIdea(idea.id, 'description', e.target.value)}
                              placeholder="Descreva a ideia do vídeo..."
                              rows={3}
                              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Perfil do Conteúdo
                            </label>
                            <select
                              value={idea.profile}
                              onChange={(e) => updateVideoIdea(idea.id, 'profile', e.target.value)}
                              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                            >
                              {profiles.map((profile) => (
                                <option key={profile} value={profile}>
                                  {profile}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Link de Referência
                          </label>
                          <input
                            type="url"
                            value={idea.referenceLink}
                            onChange={(e) => updateVideoIdea(idea.id, 'referenceLink', e.target.value)}
                            placeholder="https://..."
                            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Anexo de Arquivo
                          </label>
                          <input
                            type="text"
                            value={idea.attachment}
                            onChange={(e) => updateVideoIdea(idea.id, 'attachment', e.target.value)}
                            placeholder="Nome ou caminho do arquivo..."
                            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Appointments Tab */}
          {activeTab === 'appointments' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-white">Compromissos</h4>
                <Button
                  onClick={addAppointment}
                  className="bg-gold hover:bg-gold/90 text-black"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Compromisso
                </Button>
              </div>

              {formData.appointments.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Nenhum compromisso adicionado ainda</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {formData.appointments.map((appointment) => (
                    <div key={appointment.id} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="text-white font-medium">{appointment.title || 'Novo Compromisso'}</h5>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            onClick={() => saveIndividualItem('appointments', appointment.id)}
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            Salvar
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeAppointment(appointment.id)}
                            className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Título
                            </label>
                            <input
                              type="text"
                              value={appointment.title}
                              onChange={(e) => updateAppointment(appointment.id, 'title', e.target.value)}
                              placeholder="Nome do compromisso"
                              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Tipo
                            </label>
                            <select
                              value={appointment.type}
                              onChange={(e) => updateAppointment(appointment.id, 'type', e.target.value)}
                              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                            >
                              <option value="call">Call</option>
                              <option value="reuniao">Reunião</option>
                              <option value="gravacao">Gravação</option>
                              <option value="entrega">Entrega</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Horário
                            </label>
                            <input
                              type="time"
                              value={appointment.time}
                              onChange={(e) => updateAppointment(appointment.id, 'time', e.target.value)}
                              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Descrição
                          </label>
                          <textarea
                            value={appointment.description}
                            onChange={(e) => updateAppointment(appointment.id, 'description', e.target.value)}
                            placeholder="Detalhes do compromisso..."
                            rows={3}
                            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Groups Tab */}
          {activeTab === 'groups' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-white">Grupos</h4>
                <Button
                  onClick={addGroup}
                  className="bg-gold hover:bg-gold/90 text-black"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Conteúdo
                </Button>
              </div>

              {formData.groups.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Nenhum conteúdo de grupo adicionado ainda</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {formData.groups.map((group) => (
                    <div key={group.id} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="text-white font-medium">{group.title || 'Novo Conteúdo'}</h5>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            onClick={() => saveIndividualItem('groups', group.id)}
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            Salvar
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeGroup(group.id)}
                            className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Título
                            </label>
                            <input
                              type="text"
                              value={group.title}
                              onChange={(e) => updateGroup(group.id, 'title', e.target.value)}
                              placeholder="Título do conteúdo"
                              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Tipo
                            </label>
                            <select
                              value={group.type}
                              onChange={(e) => updateGroup(group.id, 'type', e.target.value)}
                              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                            >
                              <option value="video">Vídeo</option>
                              <option value="audio">Áudio</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Status
                            </label>
                            <select
                              value={group.status}
                              onChange={(e) => updateGroup(group.id, 'status', e.target.value)}
                              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                            >
                              <option value="planejado">Planejado</option>
                              <option value="gravado">Gravado</option>
                              <option value="editado">Editado</option>
                              <option value="postado">Postado</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Link/URL
                          </label>
                          <input
                            type="url"
                            value={group.url}
                            onChange={(e) => updateGroup(group.id, 'url', e.target.value)}
                            placeholder="https://..."
                            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Descrição
                          </label>
                          <textarea
                            value={group.description}
                            onChange={(e) => updateGroup(group.id, 'description', e.target.value)}
                            placeholder="Descrição do conteúdo..."
                            rows={3}
                            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Funnel Tab */}
          {activeTab === 'funnel' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-white">Funil</h4>
                <Button
                  onClick={addFunnel}
                  className="bg-gold hover:bg-gold/90 text-black"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Conteúdo
                </Button>
              </div>

              {formData.funnel.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <Target className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Nenhum conteúdo de funil adicionado ainda</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {formData.funnel.map((funnel) => (
                    <div key={funnel.id} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="text-white font-medium">{funnel.title || 'Novo Conteúdo'}</h5>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            onClick={() => saveIndividualItem('funnel', funnel.id)}
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            Salvar
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFunnel(funnel.id)}
                            className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Título
                            </label>
                            <input
                              type="text"
                              value={funnel.title}
                              onChange={(e) => updateFunnel(funnel.id, 'title', e.target.value)}
                              placeholder="Título do conteúdo"
                              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Tipo
                            </label>
                            <select
                              value={funnel.type}
                              onChange={(e) => updateFunnel(funnel.id, 'type', e.target.value)}
                              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                            >
                              <option value="video">Vídeo</option>
                              <option value="audio">Áudio</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Status
                            </label>
                            <select
                              value={funnel.status}
                              onChange={(e) => updateFunnel(funnel.id, 'status', e.target.value)}
                              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                            >
                              <option value="planejado">Planejado</option>
                              <option value="gravado">Gravado</option>
                              <option value="editado">Editado</option>
                              <option value="postado">Postado</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Link/URL
                          </label>
                          <input
                            type="url"
                            value={funnel.url}
                            onChange={(e) => updateFunnel(funnel.id, 'url', e.target.value)}
                            placeholder="https://..."
                            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Descrição
                          </label>
                          <textarea
                            value={funnel.description}
                            onChange={(e) => updateFunnel(funnel.id, 'description', e.target.value)}
                            placeholder="Descrição do conteúdo..."
                            rows={3}
                            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700/50 bg-gray-800/30 flex items-center justify-between">
          <div className="text-sm text-gray-400">
            {formData.projects.length} projetos • {formData.stories.length} stories • {formData.videoIdeas.length} ideias • {formData.appointments.length} compromissos • {formData.groups.length} grupos • {formData.funnel.length} funil
          </div>
          <Button
            onClick={() => {
              const updatedData = { ...formData, date: selectedDate };
              onSave(updatedData);
              onClose();
            }}
            className="bg-gold hover:bg-gold/90 text-black font-medium"
          >
            Salvar Tudo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StorytellingCard;

