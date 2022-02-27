import React from 'react';
import {render, screen} from '@testing-library/react';
import Header from './header';

test('renders learn react link', () => {
    render(<Header isSidebarOpen={true} toggleSidebar={() => console.log('toggling sidebar')} />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
