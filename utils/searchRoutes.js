const searchRoutes = {
    js: "/tutorials/javascript",
    os: "/tutorials/os",
    "operating system": "/tutorials/os",
    "operating": "/tutorials/os",
    "computer network": "/tutorials/cn",
    "computer-network": "/tutorials/cn",
    networking: "/tutorials/cn",
    mpi: "/tutorials/microprocessor",
};

export const getRouteForSearchTerm = (term) => {
    const lowerTerm = term.trim().toLowerCase();
    return searchRoutes[lowerTerm] || null;
};
