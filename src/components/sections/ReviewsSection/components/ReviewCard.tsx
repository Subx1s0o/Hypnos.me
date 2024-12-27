

type props = { 
    text: string,
    altText: string,
    imageUrl: string,
    author: string,
    date: string,  
  } 
export default function ReviewCard (props:props, key:number)  {
 
   
    return (
        <><div key={key}>
                    <p>{props.text}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="292" height="33" viewBox="0 0 292 33" fill="none">
                        <path d="M0 1H86C87.1046 1 88 1.89543 88 3V31.3062C88 32.0674 88.8166 32.5495 89.4831 32.1818L145.549 1.24884C145.845 1.08561 146.177 1 146.515 1H292" stroke="#D9CABF" stroke-miterlimit="3.8637" stroke-linejoin="round" />
                    </svg>
                    <div>
                        <img src={props.imageUrl} alt={props.altText}className="rounded-[64px] w-16 h-16"/>
                        <h3>{props.author}</h3>
                        <p>{props.date}</p>
                    </div>
                </div> 
            
        </>
    );
}
