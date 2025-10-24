# Tria Contact List

A modern, responsive contact list application built with React. This application allows users to view, search, and manage their contacts with an intuitive user interface.

## Features

- **View Contacts**: Display a list of contacts with name, email, and phone information
- **Search Functionality**: Real-time search to filter contacts by name
- **Add New Contacts**: Form to add new contacts with validation
- **Delete Contacts**: Remove contacts with confirmation
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations

## Demo

[Live Demo](https://tria-contact-list.vercel.app) - Deployed on Vercel

## Screenshots

The application features:
- Clean, modern interface with gradient backgrounds
- Responsive design that works on all screen sizes
- Smooth animations and hover effects
- Intuitive search with real-time filtering
- Form validation for adding new contacts
- Confirmation dialogs for destructive actions

## Technology Stack

- **React 18** - Modern React with hooks
- **CSS3** - Custom styling with flexbox and grid
- **JavaScript ES6+** - Modern JavaScript features
- **Create React App** - Development and build tooling

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tria-contact-list.git
cd tria-contact-list
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── AddContact.js          # Form component for adding new contacts
│   ├── AddContact.css
│   ├── ContactItem.js         # Individual contact display component
│   ├── ContactItem.css
│   ├── ContactList.js         # List container component
│   ├── ContactList.css
│   ├── SearchBar.js           # Search input component
│   └── SearchBar.css
├── App.js                     # Main application component
├── App.css                    # Main application styles
├── index.js                   # Application entry point
└── index.css                  # Global styles
```

## Key Features Implementation

### Search Functionality
- Real-time search as you type
- Case-insensitive matching
- Clear search functionality
- Visual feedback for search state

### Add Contact Form
- Form validation for all fields
- Email format validation
- Phone number validation
- Error messaging
- Smooth form animations

### Contact Management
- Display contact information with avatars
- Clickable email and phone links
- Delete confirmation dialog
- Responsive contact cards

## Design Decisions

### UI/UX Choices
- **Color Scheme**: Used a modern gradient background (purple to blue) for visual appeal
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent padding and margins for better visual rhythm
- **Animations**: Subtle hover effects and transitions for better user experience
- **Responsive Design**: Mobile-first approach with breakpoints for different screen sizes

### Technical Choices
- **Component Structure**: Modular components for better maintainability
- **State Management**: React hooks for local state management
- **Form Handling**: Controlled components with validation
- **CSS Organization**: Component-specific CSS files for better organization
- **Accessibility**: Proper semantic HTML and ARIA labels

## Deployment

This application is deployed on Vercel and can be accessed at:
[https://tria-contact-list.vercel.app](https://tria-contact-list.vercel.app)

### Deployment Steps
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Configure build settings (if needed)
4. Deploy automatically on every push

## Future Enhancements

- **Backend Integration**: Connect to a real API for data persistence
- **Contact Editing**: Allow editing of existing contacts
- **Contact Categories**: Add tags or categories for contacts
- **Import/Export**: CSV import/export functionality
- **Advanced Search**: Search by email, phone, or other fields
- **Contact Photos**: Upload and display contact photos
- **Favorites**: Mark contacts as favorites
- **Sorting Options**: Sort by name, date added, etc.

## Assumptions Made

1. **Data Storage**: Currently using local state - in production would use a backend API
2. **Contact Validation**: Basic email and phone validation - could be enhanced with more robust validation
3. **Search Scope**: Search only by name as specified in requirements
4. **Contact Fields**: Limited to name, email, and phone - could be extended with address, company, etc.
5. **User Authentication**: Not implemented as not specified in requirements

## Libraries Used

- **React**: Core framework
- **Create React App**: Development tooling
- **No additional UI libraries**: Custom CSS for complete design control

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or feedback, please contact [your-email@example.com](mailto:your-email@example.com).
