import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const useSelectedTopic = (topics) => {
    const [selectedTopic, setSelectedTopic] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const { topic } = router.query;
        if (topic && topics.includes(topic)) {
            setSelectedTopic(topic);
        } else if (!selectedTopic) {
            setSelectedTopic(topics[0]);
        }
    }, [router.query, topics, selectedTopic]);

    return [selectedTopic, setSelectedTopic];
};

export default useSelectedTopic;