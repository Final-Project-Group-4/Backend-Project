import { createContext, useState} from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {

    const title = {
        0: "Create Tour",
        1: "locations",
        2:"days"
    }

    const [page, setPage] = useState(0);

    const [tour, setTour] = useState({
        name:"",
        duration: "",
        difficulty: "",
        description: "",
        subNote: "",
        subtitle: "",
        imgCover: "",
        type: "",
        scenery: "",
        locations: [
            {
                type: "",
                coordinates: [{}],
                description: "",
                day: ""
            }
        
        ],
        days: [
            { 
                number: "", 
                title:"", 
                description: "",
                elevation: "",
                altitudeGained: "" 
            }

        ]

    });
 

const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = e.target.value;
    setTour((prevTour) => ({
    ...prevTour,
    [name]: value,
    }));
};


    return (
        <FormContext.Provider
        value={{
            tour, 
            setTour, 
            title, 
            page, 
            setPage, 
            handleChange
        }}
        >
        {children}
        </FormContext.Provider>
    );
}

export default FormContext;