import Link from "next/link";
interface Props {
  href: string;
  text: string;
}
export default function ButtonLink({ href, text }: Props) {
  return (
    <Link className="px-4 py-2 rounded-full" href={href}>
      {text}
    </Link>
  );
}
