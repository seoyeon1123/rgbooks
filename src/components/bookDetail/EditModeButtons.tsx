// EditModeButtons.tsx
import { CheckIcon, XMarkIcon, PencilSquareIcon } from '@heroicons/react/16/solid';
import React from 'react';

interface EditModeButtonsProps {
  editMode: boolean;
  onSave: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const EditModeButtons: React.FC<EditModeButtonsProps> = ({ editMode, onSave, onEdit, onDelete }) => {
  return (
    <div className="mb-5 flex justify-end gap-2">
      {editMode ? (
        <CheckIcon
          onClick={onSave}
          className="h-7 w-7 text-darkBlue hover:cursor-pointer hover:text-green-500 transition-colors"
        />
      ) : (
        <>
          <PencilSquareIcon
            onClick={onEdit}
            className="h-7 w-7 text-darkBlue hover:cursor-pointer hover:text-yellow-500 transition-colors"
          />
          <XMarkIcon onClick={onDelete} className="hover:text-orange-500 h-7 w-7 text-darkBlue hover:cursor-pointer" />
        </>
      )}
    </div>
  );
};

export default EditModeButtons;
