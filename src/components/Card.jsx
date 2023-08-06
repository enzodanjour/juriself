
function Card(props) {

    return(
        <>
        <div className="w-4/12 p-3 border py-6 ">
            <h1 className="text-xl mb-3 underline ">{props.title}</h1>
            <h3>{props.content}</h3>

        </div>
        </>
    )
    
}

export default Card