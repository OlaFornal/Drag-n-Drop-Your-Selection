import React from 'react';
import { useDraggable } from '@dnd-kit/core';

const UserCard = ({ user, isDragging = false }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging: isBeingDragged,
  } = useDraggable({
    id: user.id.toString(),
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    opacity: isBeingDragged ? 0 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`
        p-4 mb-3 bg-white rounded-lg border-2 border-gray-200 shadow-sm cursor-grab
        hover:shadow-md hover:border-gray-300 transition-all duration-200
        active:cursor-grabbing
      `}
    >
      <div className="flex items-center space-x-3">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{user.name}</h3>

        </div>
      </div>
    </div>
  );
};

export default UserCard;