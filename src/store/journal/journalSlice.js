import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSave: '',
        notes: [],
        active: null,
    },
    reducers: {
        savingNewNote: ( state ) =>{
            state.isSaving = true;
        },

        addNewEmptyNote: ( state, {payload} ) => {
            state.notes.push(payload);
            state.isSaving = false;
        },

        setActiveNote: ( state,{payload} ) => {
            state.active = payload;
            state.messageSave = '';
        },

        setNotes: ( state, {payload} ) => {
            state.notes = payload;
        },

        setSaving: ( state ) => {
            state.isSaving = true;
            state.messageSave = '';
        },

        updateNote: ( state, {payload} ) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {

                if(note.id === payload.id) {
                    return payload;
                }

                return note;
            });

            state.messageSave = `${ payload.title }, actualizada correctamente`;
        },

        setPhotosToActiveNote: ( state, {payload} ) => {
            state.active.imageUrls = [ ...state.active.imageUrls, ...payload ];
            state.isSaving = false;
        },

        deleteNoteById: ( state, {payload} ) => {
            state.active = null;
            state.notes = state.notes.filter( note => note.id !== payload );
            state.isSaving = false;
        },
    }
});

export const {
    savingNewNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
    addNewEmptyNote,
    setPhotosToActiveNote,
} = journalSlice.actions;