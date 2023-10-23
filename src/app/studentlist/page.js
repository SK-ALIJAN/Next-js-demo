import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>student list</h1>
      <ul>
        <li>
          <Link href={"/studentlist/1"}>alijan</Link>{" "}
        </li>
        <li>
          <Link href={"/studentlist/2"}>alijan sk</Link>
        </li>
        <li>abida</li>
        <li>abidaaa</li>
        <li>dhdhd</li>
      </ul>
    </div>
  );
};

export default page;


export function generateMetadata() {
  return {
    title: "student page",
    description: "home page",
  };
}