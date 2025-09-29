import { useState, useEffect } from "react";

const useFetchHandler = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to load tour data.");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                console.error("Fetch error:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]); // The dependency array ensures the effect runs when the URL changes.

    return { data, isLoading, error };
};

export default useFetchHandler;