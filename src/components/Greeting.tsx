"use client";
export default function Greeting() {
  const time = new Date().getHours();
  let greeting;
  if (time > 3 && time < 11) {
    greeting = "Good Morning,";
  } else if (time > 11 && time < 18) {
    greeting = "Good Afternoon,";
  } else {
    greeting = "Good Evening,";
  }

  return (
    <div>
      <h1 className="font-bold text-2xl">{greeting}</h1>
    </div>
  );
}
