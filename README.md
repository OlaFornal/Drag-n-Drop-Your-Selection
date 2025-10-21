# Drag-n-Drop User Selection

A React application that demonstrates drag-and-drop functionality for selecting users from a list. Users can drag items between "Available Users" and "Selected Users" lists, save their selection, and reset the layout.

## API Used

This project fetches user data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/):
- Endpoint: `https://jsonplaceholder.typicode.com/users`
- Returns a list of 10 mock users with id, name, email, and other properties

## How Drag-and-Drop Works

The drag-and-drop functionality is powered by [@dnd-kit](https://dndkit.com/), a modern React drag-and-drop toolkit:

- **DndContext**: Wraps the application and manages drag-and-drop state
- **DroppableArea**: Two droppable zones (Available Users and Selected Users) that accept dragged items
- **UserCard**: Individual draggable user cards
- **Sensors**: Supports both mouse/touch (PointerSensor) and keyboard (KeyboardSensor) interactions
- **Collision Detection**: Uses `closestCenter` algorithm to determine drop targets
- **DragOverlay**: Provides visual feedback by rendering a clone of the dragged item

When a user drags a card from one list to another, the `handleDragEnd` function updates the state by removing the user from the source list and adding them to the target list.

## Features

- Drag users between Available and Selected lists
- Save the current selection as JSON output (displayed on screen)
- Reset button to restore all users to the Available list
- Responsive design with Tailwind CSS

## Running the Project Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

The page will reload when you make changes.
# Drag-n-Drop-Your-Selection
