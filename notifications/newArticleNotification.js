import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { registerForPushNotificationsAsync } from "./registerForNotifications";

const NewArticleNotification = () => {

    const [doc, setDoc] = useState([]);
    const [csh, setCsh] = useState([]);
    const [cc, setCC] = useState([]);

    const docRequest = axios.get('https://camdendiocese.org/wp-json/wp/v2/posts?_embed&categories=278');
    const cshRequest = axios.get('https://catholicstarherald.org/wp-json/wp/v2/posts?_embed&categories=17');
    const ccRequest = axios.get('https://catholiccharitiescamden.org/wp-json/wp/v2/posts?_embed&categories=45');
    
    useEffect(() => {
        const getDataForNotifications = async () => {

            await registerForPushNotificationsAsync();
    
           await axios.all([ docRequest, cshRequest, ccRequest ])
            .then(axios.spread((docData, cshData, ccData) => {
                setDoc(docData);
                setCsh(cshData);
                setCC(ccData);
                return {
                    doc,
                    csh,
                    cc
                }
            }))
            .catch(e => console.error(e))
        };
        getDataForNotifications();
    })




    return (
        <div>
            
        </div>
    )
}

export default NewArticleNotification
