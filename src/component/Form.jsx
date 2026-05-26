import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    experience: "",
    qualification: "",
    reason: "",
    resume: null,
    photo: null,
  });

  const [errors, setErrors] = useState({});

 
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    const maxSize = 2 * 1024 * 1024;

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setErrors((prev) => ({ ...prev, resume: "Invalid file type" }));
      return;
    }

    if (file.size > maxSize) {
      setErrors((prev) => ({ ...prev, resume: "Max size 2MB allowed" }));
      return;
    }

    setFormData((prev) => ({ ...prev, resume: file }));
    setErrors((prev) => ({ ...prev, resume: "" }));
  };

 
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const maxSize = 1 * 1024 * 1024;

    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

    if (!allowedTypes.includes(file.type)) {
      setErrors((prev) => ({ ...prev, photo: "Only JPG, JPEG, PNG allowed" }));
      return;
    }

    if (file.size > maxSize) {
      setErrors((prev) => ({ ...prev, photo: "Max size 1MB allowed" }));
      return;
    }

    setFormData((prev) => ({ ...prev, photo: file }));
    setErrors((prev) => ({ ...prev, photo: "" }));
  };

  
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim() || formData.name.length < 5) {
      newErrors.name = "Name must be at least 5 characters";
    } else if (!/^[A-Za-z ]+$/.test(formData.name)) {
      newErrors.name = "Only alphabets allowed";
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile must be exactly 10 digits";
    }

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(formData.password)
    ) {
      newErrors.password =
        "Password must be 8+ chars with uppercase, lowercase, number";
    }

    if (
      formData.experience === "" ||
      formData.experience < 0 ||
      formData.experience > 30
    ) {
      newErrors.experience = "Experience must be between 0 and 30";
    }

    if (!formData.qualification || formData.qualification.length < 3) {
      newErrors.qualification = "Min 3 characters required";
    }

    if (!formData.reason || formData.reason.length < 30) {
      newErrors.reason = "Min 30 characters required";
    }

    if (!formData.resume) {
      newErrors.resume = "Resume required";
    }

    if (!formData.photo) {
      newErrors.photo = "Photo required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("SUBMITTED DATA:", formData);
      alert("Form submitted successfully!");
    }
  };

  const baseInput =
    "w-full p-2 border rounded-lg focus:outline-none focus:ring-2";

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Registration Form</h1>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className={`${baseInput} ${errors.name ? "border-red-500" : ""}`}
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={`${baseInput} ${errors.email ? "border-red-500" : ""}`}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <input
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          className={`${baseInput} ${errors.mobile ? "border-red-500" : ""}`}
        />
        {errors.mobile && <p className="text-red-500">{errors.mobile}</p>}

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={`${baseInput} ${errors.password ? "border-red-500" : ""}`}
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}

        <input
          name="experience"
          type="number"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
          className={`${baseInput} ${errors.experience ? "border-red-500" : ""}`}
        />
        {errors.experience && <p className="text-red-500">{errors.experience}</p>}

        <input
          name="qualification"
          placeholder="Qualification"
          value={formData.qualification}
          onChange={handleChange}
          className={`${baseInput} ${errors.qualification ? "border-red-500" : ""}`}
        />
        {errors.qualification && <p className="text-red-500">{errors.qualification}</p>}

        <textarea
          name="reason"
          placeholder="Why should we hire you?"
          value={formData.reason}
          onChange={handleChange}
          className={`${baseInput} ${errors.reason ? "border-red-500" : ""}`}
        />
        {errors.reason && <p className="text-red-500">{errors.reason}</p>}

        <input type="file" onChange={handleResumeUpload} />
        {errors.resume && <p className="text-red-500">{errors.resume}</p>}

        <input type="file" onChange={handlePhotoUpload} />
        {errors.photo && <p className="text-red-500">{errors.photo}</p>}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;