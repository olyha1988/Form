{/* 
import { useState } from "react";

const Registration = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [qualification, setQualification] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.length < 6) {
      newErrors.name = "Name should be at least 6 characters";
    }

    if (!age.trim()) {
      newErrors.age = "Age is required";
    } else if (isNaN(age)) {
      newErrors.age = "Age must be a number";
    } else if (Number(age) > 18) {
      newErrors.age = "Age must be 18 or less";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is not valid";
    }

    if (!number.trim()) {
      newErrors.number = "Number is required";
    } else if (isNaN(number)) {
      newErrors.number = "Should be a number";
    }

    if (!qualification.trim()) {
      newErrors.qualification = "Qualification is required";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      setErrors((prev) => ({
        ...prev,
        file: "Only PNG, JPG, PDF, Word files allowed",
      }));
      setFile(null);
      return;
    }
// Maximum file size a user can upload - 1MB 

        //const maxSize =  1 * 1024 * 1024 // 1MB 

        //if( selectedFile.size > maxSize ){

           // setErrors( prev => ( { ...prev, file: "File size should be less than 1MB"}));
            //setFile(null);
    const maxSize = 300 * 1024; // 300KB

    if (selectedFile.size > maxSize) {
      setErrors((prev) => ({
        ...prev,
        file: "File size should be less than 300KB",
      }));
      setFile(null);
      return;
    }

    setFile(selectedFile);

    setErrors((prev) => ({ ...prev, file: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log({
        name,
        age,
        email,
        number,
        qualification,
        message,
        file,
      });
    }
  };

  const baseInputStyle =
    "w-full px-3 py-2 rounded-xl border bg-gray-50 text-gray-800 focus:outline-none focus:ring-2";

  return (
    <>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${baseInputStyle} ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

        <br />

        <input
          type="text"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {errors.age && <p className="text-red-500">{errors.age}</p>}

        <br />

        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <br />

        <input
          type="text"
          placeholder="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        {errors.number && <p className="text-red-500">{errors.number}</p>}

        <br />

        <input
          type="text"
          placeholder="qualification"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
        />
        {errors.qualification && (
          <p className="text-red-500">{errors.qualification}</p>
        )}

        <br />

        <input
          type="text"
          placeholder="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && <p className="text-red-500">{errors.message}</p>}

        <br />

        <input type="file" onChange={handleFileChange} />
        {errors.file && <p className="text-red-500">{errors.file}</p>}

        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Registration;*/}