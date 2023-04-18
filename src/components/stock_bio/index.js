import "./index.css";
export default function StockBio(props) {
    return (
        <div className="bio">
            <h3 className="title">Company Bio</h3>
            <p className="description">{props.bio}</p>
        </div>
    );
}
