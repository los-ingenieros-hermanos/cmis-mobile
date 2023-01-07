// redux/actions/countAction.js
    export const s_updateFirstName = (firstname) => {
        return {
            type: 'UPDATE_FIRSTNAME',
            payload:firstname
        };
    };

    export const s_updateLastName = (lastname) => {
        return {
            type: 'UPDATE_LASTNAME',
            payload:lastname
        };
    };
   
    export const s_updateEmail = (email) => {
        return {
            type: 'UPDATE_EMAIL',
            payload:email
        };
    };

    export const s_updateID = (ID) => {
        return {
            type: 'UPDATE_ID',
            payload:ID
        };
    };
    
    export const s_updateImage = (image) => {
        return {
            type: 'UPDATE_IMAGE',
            payload:image
        };
    };

    export const s_updateBookmarks = (bookmarks) => {
        return {
            type: 'UPDATE_BOOKMARKS',
            payload:bookmarks
        };
    };

    export const s_updateEvents = (events) => {
        return {
            type: 'UPDATE_EVENTS',
            payload:events
        };
    };

    export const s_updateInterests = (interests) => {
        return {
            type: 'UPDATE_INTERESTS',
            payload:interests
        };
    };

    export const s_updateRole = (role) => {
        return {
            type: 'UPDATE_ROLE',
            payload:role
        };
    }

    export const s_updateBanner = (banner) => {
        return {
            type: 'UPDATE_BANNER',
            payload:banner
        };
    }





