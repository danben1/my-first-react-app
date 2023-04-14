import ListElement from "../listElement/index";

export default function List({ todo }) {
    return (
        <ul>
            <ListElement todo={todo} />
        </ul>
    );
}
