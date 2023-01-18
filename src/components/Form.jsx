const Form = ({handleSubmit, name, setName, email, setEmail, errorName, errorEmail}) => {
    
    return ( 
        <>
            <form onSubmit={ handleSubmit }>
                <div className="mb-3">
                    <label  className="form-label pt-3">Nombre Colaborador</label>
                    <input type="text" className="form-control" id="nameColaborador" onChange={e => setName(e.target.value)} value={name} placeholder="Ingresa el Nombre del Colaborador" /> 
                    {errorName ? <span style={{color: 'red'}}>Debes Ingresar un nombre</span>  : null}
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo Colaborador</label>
                    <input type="email" className="form-control" id="emailColaborador" onChange={e => setEmail(e.target.value)} value={email} placeholder="Ingresa el Correo del Colaborador" />
                    {errorEmail ? <span style={{color: 'red'}}>Debes Ingresar un Correo</span>  : null}
                </div>        
                <button type="submit" className="btn btn-primary">Agregar Colaborador</button>
            </form>
        </>
    );
}

export default Form;