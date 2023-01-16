import React from 'react'

export default function CreateTour() {
    const [tour, setTour]   = useState({
        name: "",
        duration: "",
        difficulty: "",
        description: "",
        subNote: "",
        subtitle: "",
        imgCover: "",
        type:"",
        scenery:"",
    })

        const handleSubmit = e => {
            e.preventDefault()
            console.log(JSON.stringify(tour)) }


            const handleChange = e => {
                const type = e.target.type
                const name = e.target.name
                const value = e.target.value
                setTour({...tour, [name]: value})

            }


  return (
    <div>CreateTour</div>
  )
}
