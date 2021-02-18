import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

const selectDirectorySections = createSelector(
    [ selectDirectory ],
    directory => directory.section
);

export default selectDirectorySections;