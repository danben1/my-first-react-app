import "./index.css";

function Comment(props) {
    return (
        <div className="comment-container">
            <div className="profile">
                <div className="icon">
                    <p className="icon-text">{props.initials}</p>
                </div>
                <p className="name">{props.author}</p>
            </div>
            <p className="comment">{props.content}</p>
        </div>
    );
}

export default Comment;
