import { useMemo } from "react";
import Head from "next/head";
import useContentFetcher from "@/hooks/useContentFetcher";
import Sidebar from "./Sidebar";
import useSelectedTopic from "@/hooks/useSelectedTopic";

const Java = () => {
    const topics = useMemo(() => [
        "java introduction",
        "java history",
        "java basics",
        "java data types",
        "java operators",
        "java loops",
        "java conditionals",
        "java functions",
        "java oops concepts",
        "java packages",
        "java exception handling",
        "java collections framework",
        "java streams",
        "java file handling",
    ], []);

    const [selectedTopic, setSelectedTopic] = useSelectedTopic(topics);
    const { content, error } = useContentFetcher(selectedTopic, "java");

    return (
        <div>
            <Head>
                <title>Java Tutorial - Learn Java | Exam Rush</title>
            </Head>
            <div className="min-h-screen flex flex-col">
                <div className="flex-1 flex flex-row mt-16">
                    <Sidebar
                        topics={topics}
                        selectedTopic={selectedTopic}
                        setSelectedTopic={setSelectedTopic}
                    />

                    <main className="flex-1 bg-white overflow-y-auto border p-5">
                        {error ? (
                            <p className="text-red-500">{error}</p>
                        ) : (
                            content.map((section, index) => (
                                <div key={index} className="mb-6">
                                    <h3 className="text-xl font-semibold text-purple-900 mb-2">{section.heading}</h3>
                                    {section.description && (
                                        <p className="text-gray-700 mb-4">{section.description}</p>
                                    )}
                                    {section.points && (
                                        <ul className="list-disc pl-5 space-y-2">
                                            {section.points.map((point, pointIndex) => (
                                                <li key={pointIndex} className="text-gray-700">
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))
                        )}
                    </main>
                    <aside className="w-[25%] bg-white border overflow-y-auto p-5"></aside>
                </div>
            </div>
        </div>
    );
};

export default Java;
