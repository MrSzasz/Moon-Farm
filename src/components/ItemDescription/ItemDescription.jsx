const ItemDescription = ( { prodName, prodDesc } ) => {
    return (
        <>
            <li className="nameLi mb-2">&gt; {prodName}:</li>
            <p className="mb-4">{prodDesc}</p>
        </>
    )
}

export default ItemDescription