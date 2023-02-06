import React,{useState,filterTour} from "react";
 function Tour ({id, image, info , name, price,filterTour}) {
    const [readMore, setReadMore]= useState(false)
    console.log('readMore',readMore)
    return(
        <div className="single-tour">
            <img src={image} alt ={name} />
                <div className="footer">
                    <div className="tour-info">
                        <h4>{name}</h4>
                        <h4 className="tour-price">${price}

                        </h4>
                    </div>
                    {/*we get the data with the help of substring*/}
                    <p>{readMore ? info : `${info.substring(0,150)}...` }
                    {/* onclick on readmore set readmore when again click on readmore 
                     come backshow the read more button  if the text is small otherwiseshow the show less*/}
                   <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' :'read more'}</button>
                 
                    </p>
                    <button onClick={()=> filterTour(id)} 
                    className='delete-btn'>Not interested</button>
                </div>
            
        </div>
    )
 }
 export default Tour