import { useEffect, useState } from "react";

const useRestaurant = (redId) => {
    const [resinfo, setresinfo] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/menu/${redId}`);
            const json = await response.json();
            console.log(json.data);
            setresinfo(json.data);
        } catch (error) {
            console.error("❌ Error fetching restaurant data:", error);
            setresinfo(null); 
        }
    };

    useEffect(() => {
        if (redId) fetchData(); 
    }, [redId]);

    return resinfo;
};

export default useRestaurant;
