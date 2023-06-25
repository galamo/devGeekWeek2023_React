
interface IProps {
    text: string;
    color?: string;
}
export function Header(props: IProps) {
    const { text, color = "red" } = props;
    return <h1 style={{ color: color }}>
        {text}
    </h1>
}

// export default vs export

