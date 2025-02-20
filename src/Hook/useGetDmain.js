"use client"
import React from 'react'
import { useState, useEffect } from 'react';

const GetDmain = (url) => {
    // 
    // const [serverUrl, setServerUrl] = useState(url);
    const [serverUrl, setServerUrl] = useState('https://food.localhost:1234/event/73');

    console.log(url);
    

    useEffect(() => {
        const url = new URL(serverUrl);

        const hostParts = url.hostname.split('.');
        const subdomain = hostParts.length > 2 ? hostParts[0] : null;
    
        // Extract event_id from URL path
        const pathParts = url.pathname.split('/');
        const eventIndex = pathParts.indexOf('event');
        const eventID = eventIndex !== -1 && pathParts.length > eventIndex + 1 ? pathParts[eventIndex + 1] : null;


        if (subdomain) localStorage.setItem('subdomain', subdomain);
        if (eventID) localStorage.setItem('event_id', eventID);
 
    }, [serverUrl]);

}
export default GetDmain