import datetime from "./datetime";

export default function dateShort(value) {
    return datetime(value, "D MMMM YYYY");
}