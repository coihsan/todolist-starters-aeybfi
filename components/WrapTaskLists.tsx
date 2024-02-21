import { dataTask } from "@/src/utils/types/types";
interface WrapperListProps {
  index: dataTask[];
  className: string;
}
export default function WrapTaskList({ index, className }: WrapperListProps) {
  return (
    <ul>
      {index.map((items) => (
        <li key={items.id}>
          <span>{items.icon}</span>
          <h1>{items.title}</h1>
          <p>{items.desc}</p>
        </li>
      ))}
    </ul>
  );
}
