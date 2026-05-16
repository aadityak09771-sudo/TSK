import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoalCard } from '../components/common/GoalCard/GoalCard';
import { SectionTitle } from '../components/common/SectionTitle/SectionTitle';
import { ClassSelectionModal } from '../components/common/ClassSelectionModal/ClassSelectionModal';
import { GOALS } from '../config/goal-data';
import type { Goal } from '../config/goal-data';
import './GoalSelection.css';

export const GoalSelection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGoalClick = (goal: Goal) => {
    setSelectedGoal(goal);
    setIsModalOpen(true);
  };

  const handleClassSelect = (classId: string) => {
    setIsModalOpen(false);
    // Navigate to course listing with selected goal and class
    navigate(`/course-listing?goal=${selectedGoal?.id}&class=${classId}`);
  };

  const popularGoals = GOALS.filter(g => g.category === 'popular');
  const allGoals = GOALS.filter(g => g.category === 'all');

  return (
    <div className="goal-selection-page">
      <header className="goal-header">
        <div className="goal-header__container">
          <button className="goal-header__back" onClick={() => navigate(-1)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <h1 className="goal-header__title">Select your Goal</h1>
          <div className="goal-header__spacer"></div>
        </div>
      </header>

      <main className="goal-content">
        <div className="goal-content__container">
          {/* Popular Exams Section */}
          <section className="goal-section">
            <SectionTitle title="Popular Exams" />
            <div className="popular-goals-scroll">
              <div className="popular-goals-grid">
                {popularGoals.map((goal) => (
                  <GoalCard
                    key={goal.id}
                    name={goal.name}
                    icon={goal.icon}
                    color={goal.color}
                    variant="popular"
                    onClick={() => handleGoalClick(goal)}
                    isSelected={selectedGoal?.id === goal.id}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* All Exams Section */}
          <section className="goal-section">
            <SectionTitle title="All Exams" />
            <div className="all-goals-grid">
              {allGoals.map((goal) => (
                <GoalCard
                  key={goal.id}
                  name={goal.name}
                  icon={goal.icon}
                  variant="all"
                  onClick={() => handleGoalClick(goal)}
                  isSelected={selectedGoal?.id === goal.id}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <ClassSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedGoal={selectedGoal}
        onSelectClass={handleClassSelect}
      />
    </div>
  );
};
