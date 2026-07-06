import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import DashboardNavbar from "../../components/layout/DashboardNavbar";
import { auth } from "../../firebase/firebaseConfig";

function Profile() {
  const user = auth.currentUser;

  const [profile, setProfile] = useState({
    name: "",
    college: "",
    university: "",
    course: "",
    semester: "",
  });

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("studentProfile")
    );

    if (data) {
      setProfile(data);
    } else {
      setProfile((prev) => ({
        ...prev,
        name: user?.displayName || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    localStorage.setItem(
      "studentProfile",
      JSON.stringify(profile)
    );

    toast.success("Profile Saved Successfully!");
  };

  return (
    <>
      <Toaster position="top-right" />

      <div className="min-h-screen bg-slate-950 text-white">

        <DashboardNavbar />

        <div className="max-w-4xl mx-auto px-6 py-10">

          <div className="mb-8">

            <h1 className="text-4xl font-bold">
              👤 Student Profile
            </h1>

            <p className="text-slate-400 mt-2">
              Manage your academic profile information.
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <div className="flex justify-center mb-8">

              <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-5xl font-bold">
                {(profile.name || "S").charAt(0).toUpperCase()}
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-5"><input
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="bg-slate-800 p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
              />

              <input
                value={user?.email || ""}
                readOnly
                placeholder="Email"
                className="bg-slate-800 p-4 rounded-xl outline-none border border-slate-700 opacity-70 cursor-not-allowed"
              />

              <input
                name="college"
                value={profile.college}
                onChange={handleChange}
                placeholder="College Name"
                className="bg-slate-800 p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
              />

              <input
                name="university"
                value={profile.university}
                onChange={handleChange}
                placeholder="University"
                className="bg-slate-800 p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
              />

              <input
                name="course"
                value={profile.course}
                onChange={handleChange}
                placeholder="Course"
                className="bg-slate-800 p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
              />

              <input
                name="semester"
                value={profile.semester}
                onChange={handleChange}
                placeholder="Semester"
                className="bg-slate-800 p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
              />

            </div>

            <button
              onClick={saveProfile}
              className="w-full mt-8 bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold transition"
            >
              💾 Save Profile
            </button>

          </div>

        </div>

      </div>

    </>
  );
}

export default Profile;