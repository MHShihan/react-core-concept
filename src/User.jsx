export default function User({ user }) {
  const { name, email } = user;
  return (
    <div className="box">
      <h4>Email: {email}</h4>
      <p>Name:{name}</p>
    </div>
  );
}
