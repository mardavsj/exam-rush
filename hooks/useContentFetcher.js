import { useState, useEffect, useCallback } from "react";

const useContentFetcher = (topic, collection) => {
    const [content, setContent] = useState([]);
    const [error, setError] = useState(null);

    const fetchContent = useCallback(async (topic) => {
        try {
            const res = await fetch(`/api/topic?topic=${topic}&collection=${collection}`);
            const data = await res.json();

            if (res.ok) {
                setContent(data.content);
                setError(null);
            } else {
                setError(data.error);
                setContent([]);
            }
        } catch (err) {
            setError("An error occurred while fetching data.");
            setContent([]);
        }
    }, [collection]);

    useEffect(() => {
        if (topic) {
            fetchContent(topic);
        }
    }, [topic, fetchContent]);

    return { content, error };
};

export default useContentFetcher;
