import backgroundImg from '../backgroundImg';


function BackgroundChange(props){

    return(
        <ul id="images-ul">
            {Images.map((img, index) => (
                <li id={img.id} key={index}>
                   <img
                    alt={index}
                    className="img"
                    src={img.src}
                    name={img.id} 
                    onClick={(e) => props.changeBackGround(e)}
                    ></img>
                </li>
            ))}
        </ul>
    );
}
export default BackgroundChange;

