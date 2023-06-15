import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useSelectedClasses = () => {

    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: selectClasses = [], refetch } = useQuery({
        queryKey: ['selectClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/selectedClasses/${user?.email}`);
            return res.data;
        }
    })
    return [selectClasses, refetch]
};

export default useSelectedClasses;