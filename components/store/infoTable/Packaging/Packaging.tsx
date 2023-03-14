import TextBox from "../TextBox/TextBox";

interface IPackaging {
  data: {
    name: string;
    value: string[];
  }[];
}

export default function Packaging({ data }: IPackaging) {
  return (
    <>
      {data.map(el => (
        <TextBox key={el.name} data={el} />
      ))}
    </>
  );
}
