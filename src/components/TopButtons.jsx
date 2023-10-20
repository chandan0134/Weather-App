import React from "react";


function TopButtons()
  {
    const cities=[
    {
        id:1,
        title:'Chennai'

    },
    {
        id:2,
        title:'Madrid'
    },
    {
        id:3,
        title:'Havana'
    },
    {
        id:4,
        title:'Delhi'
    },
    {
        id:5,
        title:'Mumbai'
    }
    ]


    return (
        <div className="flex item-center justify-around my-6 ">
            {
                cities.map((city)=>(
                    <button key={city.id} className="text-white text-lg font-medium">
                        {city.title}
                    </button>

                ))
            }
        </div>
    )
    

}

export default TopButtons;