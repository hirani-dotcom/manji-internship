import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CollectionContext = createContext();

export function CollectionProvider({ children }) {
    const [collection, setCollection] = useState([]);
    const [loading, setLoading] = useState();
    const [error, setError] = useState(null);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            //fetch the API
            try {
            setLoading(true);
             await new Promise(resolve => setTimeout(resolve, 3000));
                const response = await axios.get(
                    "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections",
                );
                //Parse the json format
                setCollection(response.data);
            } catch (error) {
                //handle any error
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <CollectionContext.Provider
            value={{ collection, loading, error, selectedId, setSelectedId }}
        >
            {children}
        </CollectionContext.Provider>
    );
}
