import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [hotCollections, setHotCollections] = useState([]);
    const [newItems, setNewItems] = useState([]);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                await new Promise((resolve) => setTimeout(resolve, 3000));
                const [hotRes, newRes] = await Promise.all([
                    axios.get(
                        "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections",
                    ),
                    axios.get(
                        "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems",
                    ),
                ]);
                setHotCollections(hotRes.data);
                setNewItems(newRes.data);
            } catch (err) {
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <DataContext.Provider
            value={{
                hotCollections,
                newItems,
                selectedItemId,
                setSelectedItemId,
                loading,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
