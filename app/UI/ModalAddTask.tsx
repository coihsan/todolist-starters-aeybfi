function SaveTask() {
  return (
    <input
      type="submit"
      className="buttonUtils cursor-pointer bg-indigo-500 text-white fill-white"
      value="Add Task"
    />
  );
}
function CloseTask() {
  return (
    <button onClick={close} className="buttonUtils bg-onyx-50">
      Cancel
    </button>
  );
}
interface Props {
  Close?: () => void;
}
export default function ModalAddTask({ Close }: Props) {
  return (
    <div className="absolute flexJustifyCenter left-0 top-0 w-full h-screen bg-indigo-700/10 backdrop-blur-sm">
      <div className="min-w-[600px] max-w-xs h-[80%] overflow-y-scroll grid bg-white p-5 rounded-xl">
        <h1 className="text-md font-bold">New Task</h1>
        <div className="flex flex-col">
          <label htmlFor="title">Task title</label>
          <input
            className="h-12 w-full rounded-md border border-onyx-100 pl-3"
            type="text"
            name="title"
            placeholder="Today is ..."
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Description</label>
          <input
            className="h-12 w-full rounded-md border border-onyx-100 pl-3"
            type="text"
            name="description"
            placeholder="Description"
          />
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <input className="cursor-pointer" type="radio" name="high" id="" />
            <label htmlFor="high">High</label>
            <input className="cursor-pointer" type="radio" name="mid" id="" />
            <label htmlFor="mid">Mid</label>
            <input className="cursor-pointer" type="radio" name="low" id="" />
            <label htmlFor="low">Low</label>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Start From</label>
          <input
            className="rounded-md border border-onyx-100 pl-3"
            type="datetime-local"
            name="date"
            id=""
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">End From</label>
          <input
            className="rounded-md border border-onyx-100 pl-3"
            type="datetime-local"
            name="date"
            id=""
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Note</label>
          <textarea
            className="rounded-md border border-onyx-100 pl-3"
            name=""
            id=""
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div className="flex items-center justify-end gap-3 w-full">
          <CloseTask close={false} />
          <SaveTask />
        </div>
      </div>
    </div>
  );
}
