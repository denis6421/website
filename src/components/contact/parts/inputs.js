import React, { Component } from "react";
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import NoteIcon from '@material-ui/icons/Note';

export const inputs = [
    {
        placeholder:'ENTER_NAME',
        img:<PersonIcon />,
        property_name:'name'
    },
    {
        placeholder:'ENTER_EMAIL',
        img:<EmailIcon />,
        property_name:'email',
        validation_type:'email',
        validation_text:'EMAIL_VALIDATION'
    },
    {
        placeholder:'ENTER_MESSAGE',
        img:<NoteIcon />,
        property_name:'message',
    }
]