
import defaultImg from "../com/image/Ahem.jpg";

const NewsItems = ({ title, description, src, url }) => {

    const mainDiv = {
        maxWidth: "390px",
        
        
        
    }
    const imgStyle = {
        height: "200px",
        width: "335px",
    }

    return (
        <>
            <div className="card bg-dark text-white mb-3 d-inline-block my-3 mx-3 px-2 py-2"
                style={mainDiv}>
                <img src={src ? src : defaultImg} style={imgStyle} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-danger">{title.slice(0, 55)}</h5>
                    {/* <p className="card-text">{description}</p> */}
                    <p className="card-text">{description ? description.slice(0, 100) : "This is default description if main description is not shown"}</p>
                    <a href={url} className="btn btn-primary">Read more</a>
                </div>
            </div>

        </>
    );
}
export default NewsItems;