import { useState } from "react";

function EditProfile() {
  const [username, setUsername] = useState("Nathan");
  const [password, setPassword] = useState("");
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-green-400 mb-8">⚙️ Edit Profile</h1>
      <div className="max-w-md border border-green-500 rounded-xl p-6">
        <div className="text-center text-6xl mb-4">🧑‍💻</div>
        <div className="mb-4">
          <p className="text-gray-400 mb-1 text-sm">Username</p>
          <input
            className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 w-full text-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <p className="text-gray-400 mb-1 text-sm">New Password</p>
          <input
            className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 w-full text-white"
            type="password"
            placeholder="Enter new password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-2 rounded-lg w-full"
        >
          {saved ? "✅ Saved!" : "Save Changes"}
        </button>
      </div>
    </div>
  );
}

export default EditProfile;