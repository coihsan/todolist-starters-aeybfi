enum LevelTask {
  high = "Highh",
  mid = "Mid",
  low = "Low",
}
interface TaskProps {
  id: number;
  title: string;
  desc: string;
  icon: string;
  complete: boolean;
  dateStart: Date;
  endStart: Date;
  level: LevelTask;
  comment: string;
}

export const dataTask : TaskProps = [
    {
        id: 0,
        title: "",
        desc: "",
        icon: "".
        complete: ,
        dateStart: ,
        endStart: ,
        level: high | mid | low,
        comment: "",
    }
]
