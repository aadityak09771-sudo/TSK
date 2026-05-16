import React, { useEffect } from 'react';
import { ClassCardModal } from '../ClassCard/ClassCardModal';
import type { Goal } from '../../../config/goal-data';
import './ClassSelectionModal.css';

interface ClassSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedGoal: Goal | null;
  onSelectClass: (classId: string) => void;
}

export const ClassSelectionModal: React.FC<ClassSelectionModalProps> = ({
  isOpen,
  onClose,
  selectedGoal,
  onSelectClass,
}) => {
  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !selectedGoal) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="modal-header">
          <h2 className="modal-title">Select your Class</h2>
          <p className="modal-subtitle">{selectedGoal.name}</p>
        </div>

        <div className="modal-content">
          <div className="class-grid">
            {selectedGoal.classes.map((cls) => (
              <ClassCardModal
                key={cls.id}
                name={cls.name}
                onClick={() => onSelectClass(cls.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
