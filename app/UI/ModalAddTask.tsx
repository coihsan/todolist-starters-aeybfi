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
  return <button className="buttonUtils bg-onyx-100">Cancel</button>;
}

export default function ModalAddTask() {
  return (
    <div className="absolute flexJustifyCenter left-0 top-0 w-full h-screen bg-white/10 backdrop-blur-sm">
      <div className="max-w-xs h-[80%] overflow-y-scroll grid bg-onyx-50 p-5 rounded-xl">
        <h1 className="text-md font-bold">New Task</h1>
        <div className="flex flex-col">
          <label htmlFor="title">Task title</label>
          <input type="text" name="title" placeholder="Today is ..." />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Description</label>
          <input type="text" name="description" placeholder="Description" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Start From</label>
          <input type="datetime-local" name="date" id="" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">End From</label>
          <input type="datetime-local" name="date" id="" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Note</label>
          <textarea name="" id="" cols="30" rows="5"></textarea>
        </div>
        <div className="flex items-center gap-3">
          <CloseTask />
          <SaveTask />
        </div>
      </div>
    </div>
  );
}
