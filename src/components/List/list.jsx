export const CountUnorderList=()=>{
    return(
        <ul>
            <ListItems/>
        </ul>
    )
}

export const CountOrderList=()=>{
    return(
        <ol>
            <ListItems/>
        </ol>
    )
}

export const ListItems=()=>{
    const fruits=["Apple","Mango","Orange","Pineapple"]
    return(
        <>
            {
                fruits.map((x)=>{
                    return <li>{x}</li>
                })
            }
        </>
    )
}

