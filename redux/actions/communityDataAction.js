// redux/actions/countAction.js
export const c_updateFirstName = (firstname) => {
    return {
        type: 'UPDATE_FIRSTNAME',
        payload:firstname
    };
};

export const c_updateUsername = (username) => {
    return {
        type: 'UPDATE_USERNAME',
        payload:username
    };
};

export const c_updateEmail = (email) => {
    return {
        type: 'UPDATE_EMAIL',
        payload:email
    };
};

export const c_updateID = (ID) => {
    return {
        type: 'UPDATE_ID',
        payload:ID
    };
};

export const c_updateImage = (image) => {
    return {
        type: 'UPDATE_IMAGE',
        payload:image
    };
};

export const c_updateBanner = (banner) => {
    return {
        type: 'UPDATE_BANNER',
        payload:banner
    };
};


export const c_updateRole = (role) => {
    return {
        type: 'UPDATE_ROLE',
        payload:role
    };
}

export const c_updateTags = (tags) => {  
    return {
        type: 'UPDATE_TAGS',
        payload:tags
    };
}

export const c_updateFollowerCount = (followerCount) => {
    return {
        type: 'UPDATE_FOLLOWERCOUNT',
        payload:followerCount
    };
}

export const c_updateMemberCount = (memberCount) => {
    return {
        type: 'UPDATE_MEMBERCOUNT',
        payload:memberCount
    };
}

export const c_updateInfo = (info) => {
    return {
        type: 'UPDATE_INFO',
        payload:info
    };
}






