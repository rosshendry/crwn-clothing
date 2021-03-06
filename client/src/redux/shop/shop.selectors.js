import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [ selectShop ],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [ selectCollections ],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = (collectionUrlParm) => createSelector(
    [ selectCollections ],
    collections => collections && collections[collectionUrlParm] ? collections[collectionUrlParm] : null
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);