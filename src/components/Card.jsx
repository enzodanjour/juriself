
function Card(props) {

    return(
        <>
        <div className="lg:w-4/12 p-3 border py-6 mt-2 md:mt-3 ">
            <h1 className="text-xl mb-3 underline text-sky-700 ">{props.title}</h1>
            <h3>{props.content}</h3>

        </div>
        </>
    )
    
}

export default Card