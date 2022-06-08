
const FormInput = ({ className, htmlFor, label, id, type = 'text', name, placeholder, nr, city }) => {
    return (
        <>
            {city ?
                <input
                    className={className}
                    id={id}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    required
                /> :

                <>
                    <label htmlFor={htmlFor}>
                        {label}{nr ? '' : <span>*</span>}
                    </label>
                    <input
                        className={className}
                        id={id}
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        required
                    />
                </>

            }
        </>
    )
}

export default FormInput