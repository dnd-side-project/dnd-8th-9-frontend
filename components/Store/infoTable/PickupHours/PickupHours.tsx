import TableBox from "../TableBox/TableBox";

interface IPickupHours {
  option: string;
  title: string;
  data: (
    | {
        key: string;
        value: string;
      }
    | {
        day: string;
        hour: string;
      }
  )[];
}

export default function PickupHours({ option, title, data }: IPickupHours) {
  return <TableBox option={option} title={title} data={data} />;
}
