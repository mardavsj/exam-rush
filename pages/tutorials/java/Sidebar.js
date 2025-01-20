import { useRouter } from "next/router";

const Sidebar = ({ topics, selectedTopic, setSelectedTopic }) => {
    const router = useRouter();

    return (
        <nav className="w-[20%] bg-white border overflow-y-auto max-h-screen p-3">
            <aside>
                <nav className="space-y-8 text-sm">
                    <div className="space-y-5">
                        <h2 className="text-lg font-semibold tracking-widest text-purple-900 border-b-2 pb-2 p-2">
                            Java Tutorial
                        </h2>
                        <div className="flex flex-col space-y-0.5 capitalize">
                            {topics.length === 0 ? (
                                <p>No topics available</p>
                            ) : (
                                topics.map((topic) => (
                                    <div
                                        key={topic}
                                        className={`text-gray-700 cursor-pointer p-3 rounded-md ${selectedTopic === topic
                                            ? "text-purple-800 bg-purple-100 font-semibold"
                                            : "hover:text-purple-800 hover:bg-purple-50"
                                            }`}
                                        onClick={() => {
                                            router.push(`/tutorials/java?topic=${encodeURIComponent(topic)}`);
                                            setSelectedTopic(topic);
                                        }}
                                    >
                                        {topic.charAt(0).toUpperCase() + topic.slice(1)}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </nav>
            </aside>
        </nav>
    );
};

export default Sidebar;
