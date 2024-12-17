const DynamicBook =(props:any) =>{
    return(
          <div>
            <h1>{props.params.id}</h1>
          <br/>
            <h2 className="text-4xl text-zinc-800">{props.params.type}</h2>
          </div>
            
        
    )
};

export default DynamicBook;