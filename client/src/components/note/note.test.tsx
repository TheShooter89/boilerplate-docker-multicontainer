import React from 'react';
import {render, screen} from '@testing-library/react';
import Note from './note';

test('renders learn react link', () => {
    render(<Note
        note={
            {
                id: 'fwfes',
                title: 'title',
                body: 'fwfwesgfewgfewrgregrewghre',
                tags: [],
            }
        }
    />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
