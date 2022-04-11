import React, {
    useCallback, useState
} from 'react';
import {
    Link,
} from 'react-router-dom';
import {
    Button,
    Col,
    Row,
    Layout,
    Typography,
} from 'antd';

import theme from '../../config/theme';
import {
    MOCK_NOTE_LIST,
    MOCK_TAG_LIST,
} from '../../config/mocks';

import ControlPanel from './controlPanel';
import NotesListBox from './notesListBox';

const {
    Header,
    Content,
} = Layout;
const {
    Title,
    Paragraph,
} = Typography;

const filterSearch = (notes: Note[], search: string) => {
    if (search === '') {
        return MOCK_NOTE_LIST;
    }

    const filtered = notes.filter(current_note => {
        const title = current_note.title.toLowerCase();
        const body = current_note.body.toLowerCase();

        const match = title.includes(search.toLowerCase()) || body.includes(search.toLowerCase());

        return match;
    });

    return filtered;
};

const filterTagSearch = (notes: Note[], tagname: string) => {
    if (tagname === '') {
        return notes;
    }

    const tagname_list = tagname.toLowerCase().split(' ');

    const filtered = notes.filter(current_note => {
        const tags = current_note.tags;

        let match = false;

        tags.map(current_tag => {
            tagname_list.map(current_tagname => {
                //
                if (current_tag.name.includes(current_tagname.toLowerCase())) {
                    match = true;
                }
            });
        });

        return match;
    });

    return filtered;
};

const styles = {
    rootRow: {
        padding: '2em',
    },
    header: {
        backgroundColor: 'transparent',
        fontFamily: theme.font.serif,
    },
    headerDescription: {
        fontFamily: theme.font.serif,
    },
};

const Notes = () => {
    const [notes, setNotes] = useState(MOCK_NOTE_LIST);
    const [noteSelection, setNoteSelection] = useState<Array<Note> | false>(false);

    const {rootRow,
        header,
        headerDescription,
    } = styles;

    const handleSearchChange = useCallback(async (event) => {
        //
        console.log('handleSearchChange - event:', event);

        const filtered_list = filterSearch(notes, event.target.value);

        console.log('handleSearchChange - filtered_list:', filtered_list);

        setNotes(filtered_list);
    }, [notes]);

    const handleTagsChange = useCallback(async (event) => {
        //
        console.log('handleTagsChange - event:', event);

        const filtered_list = filterTagSearch(notes, event.target.value);

        console.log('handleTagsChange - filtered_list:', filtered_list);

        setNotes(filtered_list);
    }, [notes]);

    const handleToggleSelection = () => {
        setNoteSelection([]);
    };

    const handleEditCancel = () => {
        setNoteSelection(false);
    };

    const handleToggleSelectedNote = (note: Note) => {
        //
        if (!noteSelection) {
            return setNoteSelection([note]);
        }

        const new_selection = new Map(noteSelection.map(note => [note.id, note]));

        if (new_selection.has(note.id)) {
            new_selection.delete(note.id);

            const update_selection: Note[] = [];
            new_selection.forEach(note => update_selection.push(note));

            return setNoteSelection(update_selection);
        }

        new_selection.set(note.id, note);

        const update_selection: Note[] = [];
        new_selection.forEach(note => update_selection.push(note));

        return setNoteSelection(update_selection);
    };

    return (
        <React.Fragment>
            <Row style={rootRow}>
                <Col span={20} offset={2}>
                    <Header style={header}>
                        <Title>Notes</Title>
                    </Header>
                    <Content>
                        <Paragraph style={headerDescription}>This is the Notes Page</Paragraph>

                        <ControlPanel
                            tagList={MOCK_TAG_LIST}
                            totalNotes={notes.length}
                            selectedNotes={noteSelection ? noteSelection.length : 0}
                            searchControls={
                                {
                                    onChange: (e) => handleSearchChange(e),
                                    onEnter: (e) => console.log('onEnter - e:', e),
                                    onSortChange: () => console.log('sortChange'),
                                }
                            }
                            tagsControls={
                                {
                                    onChange: (e) => handleTagsChange(e),
                                    onEnter: (e) => console.log('onEnter - e:', e),
                                }
                            }
                            editControls={
                                {
                                    toggleEdit: () => setNoteSelection([]),
                                    cancelEdit: () => setNoteSelection(false),
                                    selectAll: () => setNoteSelection(notes),
                                    undoSelection: () => setNoteSelection([]),
                                    deleteSelected: () => console.log('DELETING SELECTED NOTES'),
                                }
                            }
                        />

                        <NotesListBox
                            notes={notes}
                            selectedNotes={noteSelection}
                            toggleSelectedNote={handleToggleSelectedNote}
                            emptyMessage='whoops...no notes found!'
                        />
                    </Content>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Notes;
