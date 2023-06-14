// import { useQuery } from "react-query";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useClasses = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['instructor'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allClasses')
            return res.data;
        }
    })
    return [classes, refetch]
};

export default useClasses;