import React from 'react';
import {render, screen} from '@testing-library/react';
import Layout from './layout';

test('renders learn react link', () => {
    render(<Layout isSidebarOpen={true} toggleSidebar={() => console.log('toggling sidebar')} selectedMenuItem='/' />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
