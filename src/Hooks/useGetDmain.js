"use client"
import { useState, useEffect } from 'react';

const GetDomain = (url) => {
    // 
    // console.log(url);
    
    const [serverUrl] = useState(url);
    // const [serverUrl, setServerUrl] = useState('https://food.localhost:1234/event/73');

    

    useEffect(() => {
        const url = new URL(serverUrl);

        const hostParts = url.hostname.split('.');
        const subdomain = hostParts.length > 1 ? hostParts[0] : null;
    



        if (subdomain) localStorage.setItem('subdomain', subdomain);
      
 
    }, [serverUrl]);

}
export default GetDomain