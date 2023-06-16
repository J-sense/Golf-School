import { useQuery } from "@tanstack/react-query";

const PopularInstructors = () => {


    const { data: PopularInstructors = [], refetch } = useQuery({
        queryKey: ["popularInstructors"],
        queryFn: async () => {
            const res = await fetch('https://b712-summer-camp-server-side-j-sense.vercel.app/popularInstructors');
            return res.json();
        }
    })

    console.log(PopularInstructors)

    return (
        <div className="bg-[#DBE8E7] ">

        <div  className='bg-[#DBE8E7] mt-6 lg:mt-16 mb-6 max-w-screen-xl mx-auto'>

            <h1 className="text-2xl max-w-screen-xl mx-auto font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">review our    <br /> Popular <span className="text-teal-500">Instructor&#39;s</span></h1>

            <div className="grid grid-cols-1 mx-4 lg:mt-12 mt-7 md:grid-cols-2 lg:grid-cols-3 md:mx-6 lg:mx-8 gap-10">
                {PopularInstructors.map((instructor, index) => (
                    <div key={index} className="card  bg-base-100 shadow-xl">
                        <figure>
                            <img src={instructor.photoURL} className="w-full h-60 " alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <p className="lg:text-lg font-semibold font-mono">Name : {instructor.name}</p>
                            <p className="lg:text-lg font-semibold font-mono">Email : {instructor.email}</p>
                            <p className="lg:text-lg font-semibold font-mono">Academy : Yoku</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
        </div>
    );

};

export default PopularInstructors;