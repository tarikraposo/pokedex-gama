import './Badge.css';

type BadgeProps = {
    name: string;
}

export const Badge = (props: BadgeProps) => {
    return (
        <span className={`badge type--${props.name.toLowerCase()}`}>{props.name}</span>
    );
}