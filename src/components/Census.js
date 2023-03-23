function Census(props) {
    const { population, getPopulation } = props;
console.log(props)


    const list = population.map((el) => {
        return (
            
                <div>
                  <p className="nation">{el.Nation}</p>
                  
                </div>
                    
                           
        );
    });

    return (
        <div>
            
            <h1
                style={{
                    backgroundColor: "blue",
                    color: "white",
                    height: "50px",
                    padding: "20px",
                    textAlign:"center"
                
                    
                }}
            >
                Census
            </h1>
            <body  style={{border:"1500px"}}></body>
            <div>{list}</div>
        </div>
    );
}

export default Census;