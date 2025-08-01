export const UserGreetingMessage = () => {
  const hours = new Date().getHours();

  const greeting =
    hours < 12
      ? "Good morning"
      : hours < 18
      ? "Good afternoon"
      : "Good evening";

  return (
    <section
      aria-label="Greeting message"
      role="region"
      className="greeting-container"
    >
      <h1 className="greeting-title">{greeting}, welcome back!</h1>
    </section>
  );
};
