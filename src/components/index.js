//write some practice components

export function Headermessage() {
    return <h1>This is a Heading</h1>;
}

export function ContentsList() {
    return (
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    );
}

export function Subtitle() {
    return <h2>Subtitle goes here</h2>;
}

//nested components inside another
export default function HeadTemplate() {
    return (
        <div>
            <Headermessage />
            <Subtitle />
            <ContentsList />
        </div>
    );
}
