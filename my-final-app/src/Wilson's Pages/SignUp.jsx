import { useState } from "react";

const registeredUsers = [];

function PageHeader({ title }) {
  return (
    <div className="p-4 border-b-2 border-green-700 bg-gray-900">
      <p className="text-2xl font-bold text-green-400">{title}</p>
    </div>
  );
}

function InputBar({ placeholder, type, value, onChange }) {
  return (
    <input className="border-2 border-green-600 bg-gray-900 text-green-200 p-3 text-lg rounded-lg w-full placeholder-gray-500"
      type={type} placeholder={placeholder} value={value} onChange={onChange} />
  );
}

function UploadPhoto({ photo, onChange }) {
  return (
    <div className="border-2 border-green-600 bg-gray-800 rounded-lg p-6 text-center">
      {photo
        ? <img src={URL.createObjectURL(photo)} alt="Preview" className="mx-auto h-24 rounded-full border-2 border-green-400 mb-3" />
        : <p className="text-gray-400 text-lg mb-3">No photo selected</p>}
      <label className="cursor-pointer border-2 border-green-500 bg-gray-900 text-green-300 font-semibold text-lg px-6 py-2 rounded-lg hover:bg-green-900">
        Upload Photo
        <input type="file" accept="image/*" className="hidden" onChange={e => onChange(e.target.files[0])} />
      </label>
    </div>
  );
}

function AuthButton({ label, onClick, secondary }) {
  return (
    <button onClick={onClick}
      className={`border-2 p-3 text-lg font-semibold rounded-lg w-full ${secondary
        ? "border-gray-500 bg-gray-800 text-gray-300 hover:bg-gray-700"
        : "border-green-500 bg-gray-800 text-green-300 hover:bg-green-900"}`}>
      {label}
    </button>
  );
}

function SignUpView({ onSwitchToLogin, onSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");

  function handleSignUp() {
    if (!username) { setError("Please enter a username."); return; }
    if (password.length < 6) { setError("Password must be at least 6 characters."); return; }
    if (password !== confirm) { setError("Passwords do not match."); return; }
    if (registeredUsers.find(u => u.username === username)) { setError("Username already taken."); return; }
    registeredUsers.push({ username, password });
    setError("");
    onSuccess(username);
  }

  return (
    <div className="flex flex-col gap-4 p-8 max-w-md mx-auto w-full mt-6">
      <p className="text-2xl font-bold text-green-400 mb-2">Create an Account</p>
      <InputBar placeholder="Username" type="text" value={username} onChange={e => setUsername(e.target.value)} />
      <InputBar placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <InputBar placeholder="Confirm Password" type="password" value={confirm} onChange={e => setConfirm(e.target.value)} />
      <UploadPhoto photo={photo} onChange={setPhoto} />
      {error && <p className="text-red-400 text-lg font-semibold">{error}</p>}
      <div className="grid grid-cols-2 gap-4 mt-2">
        <AuthButton label="Log In" secondary={true} onClick={onSwitchToLogin} />
        <AuthButton label="Sign Up" onClick={handleSignUp} />
      </div>
    </div>
  );
}

function LoginView({ onSwitchToSignUp, onSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    if (!username || !password) { setError("Please fill in all fields."); return; }
    const user = registeredUsers.find(u => u.username === username && u.password === password);
    if (!user) { setError("Incorrect username or password."); return; }
    setError("");
    onSuccess(username);
  }

  return (
    <div className="flex flex-col gap-4 p-8 max-w-md mx-auto w-full mt-6">
      <p className="text-2xl font-bold text-green-400 mb-2">Welcome Back</p>
      <InputBar placeholder="Username" type="text" value={username} onChange={e => setUsername(e.target.value)} />
      <InputBar placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      {error && <p className="text-red-400 text-lg font-semibold">{error}</p>}
      <div className="grid grid-cols-2 gap-4 mt-2">
        <AuthButton label="Sign Up" secondary={true} onClick={onSwitchToSignUp} />
        <AuthButton label="Log In" onClick={handleLogin} />
      </div>
    </div>
  );
}

function SignUp({ onAuthSuccess }) {
  const [view, setView] = useState("signup");
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <PageHeader title="💰 FinanceEd" />
      {view === "signup"
        ? <SignUpView onSwitchToLogin={() => setView("login")} onSuccess={onAuthSuccess} />
        : <LoginView onSwitchToSignUp={() => setView("signup")} onSuccess={onAuthSuccess} />}
    </div>
  );
}

export default SignUp;