"use client"
import {  useEffect } from 'react';

const GetDomain = () => {
    // 
    // console.log(url);

    // const [serverUrl, setServerUrl] = useState('https://food.localhost:1234/event/73');

    

    useEffect(() => {
        var sub_domain = localStorage.getItem("sub_domain");

        if (!sub_domain) {
            const currentUrl = window.location.href; 
            
            const url = new URL(currentUrl);
            const hostParts = url.hostname.split(".");
            const subdomain = hostParts.length > 1 ? hostParts[0] : null;

            if (subdomain) {
                localStorage.setItem("sub_domain", sub_domain);
            }
        } else{

            localStorage.setItem("sub_domain", sub_domain);

        }
    }, [1000]);

    return null; 

}
export default GetDomain