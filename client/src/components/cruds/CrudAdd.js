import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";

function CrudAdd(props) {
	const initialState = {
		companyName: "",
		phone: "",
		email: "",
		dateOfBirth: "",
		location: "",
		state: "",
		professionalSkills: "",
		photo: "",
	};
	const [crud, setCrud] = useState(initialState);

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		//if (!crud.companyName || !crud.email) return;
		async function postCrud() {
			try {
				const response = await post("/api/cruds/", crud);
				navigate(`/cruds/${response.data._id}`);
			} catch (error) {
				console.log("error", error);
			}
		}
		postCrud();
	}

	function handleChange(event) {
		setCrud({ ...crud, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate("/cruds");
	}

	return (
		<div className="container" style={{ maxWidth: "400px" }}>
			<h1>Create CRUD</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Full Name</label>
					<input
						name="companyName"
						type="text"
						required
						value={crud.companyName}
						onChange={handleChange}
						className="form-control"
					/>
					<small>Format: EX-John Doe</small>
				</div>
				<div className="form-group">
					<label>Phone</label>
					<input
						name="phone"
						type="tel"
						pattern="(251)-[0-9]{3}-[0-9]{6}"
						required
						value={crud.phone}
						onChange={handleChange}
						className="form-control"
					/>
					<small>Format: 251-XXX-XXXXXX</small>
				</div>
				<div className="form-group">
					<label>Email</label>
					<input
						name="email"
						type="email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
						required
						value={crud.email}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				
				{/* <div className="form-group">
					<label>Website/Social Link</label>
					<input
						name="link"
						type="url"
						value={crud.link}
						onChange={handleChange}
						className="form-control"
					/>
					<small>Format: https://yourlink.ext</small>
				</div>

				<div className="form-group">
					<label>Description</label>
					<textarea
						name="description"
						row="10"
						value={crud.description}
						onChange={handleChange}
						className="form-control"
					/>
				</div> */}
				<div className="form-group">
					<label>Date of Birth</label>
					<input
						name="dateOfBirth"
						type="date"
						value={crud.dateOfBirth}
						onChange={handleChange}
						className="form-control"
					/>	
				</div>
				{/* <div className="form-group">
					<label>Country</label>
					<input
						name="country"
						type="text"
						value={crud.country}
						onChange={handleChange}
						className="form-control"
					/>
				</div> */}
				<div>
    <label for="country">Country:</label>
    <select name="country" id="location" type="text"
						value={crud.location}
						onChange={handleChange}
						className="form-control">
      <option value="">Select a country</option>
	  <option value="USA">USA</option>
	  <option value="Ethiopia">Ethiopia</option>
	  <option value="Canada">Canada</option>
	  <option value="UK">UK</option>
     
    </select>
  </div>
				{/* <div className="form-group">
					<label>State</label>
					<input
						name="state"
						type="text"
						value={crud.state}
						onChange={handleChange}
						className="form-control"
					/>
				</div> */}
				<div>
    <label for="state">State:</label>
    <select name="state" id="state" type="text"
						value={crud.state}
						onChange={handleChange}
						className="form-control">
      <option value="">Select a state</option>
	  <option value="California">California</option>
	  <option value="New York">New York</option>
	  <option value="Texas">Texas</option>
	  <option value="Florida">Florida</option>

    </select>
  </div>

  <div>
    <p>Professional Skills:</p>
    <label for="communication">Communication</label>
    <input type="checkbox" id="communication" name="communication" value="communication" />
    <label for="pressure">Ability to Work under Pressure</label>
	<input type="checkbox" id="pressure" name="pressure" value="pressure" />
	<label for="teamwork">Decision making</label>
	<input type="checkbox" id="teamwork" name="teamwork" value="teamwork" />
	<label for="leadership">Leadership</label>
	<input type="checkbox" id="leadership" name="leadership" value="leadership" />
	<label for="problem-solving">self motivation</label>
	<input type="checkbox" id="problem-solving" name="problem-solving" value="problem-solving" />
	<label for="time-management">Time Management</label>
	<input type="checkbox" id="time-management" name="time-management" value="time-management" />
	<label for="creativity">Conflict Resolution</label>
	<input type="checkbox" id="creativity" name="creativity" value="creativity" />
	<label for="organization">Adaptability</label>
	<input type="checkbox" id="organization" name="organization" value="organization" />
   
    
  </div>
  <div className="">
    <label for="photo">Photo:</label>
    <input type="file" name="photo" id="photo" value={crud.photo}
						onChange={handleChange}
						className="form-control" />
  </div>


  


				<div className="btn-group">
					<input type="submit" value="Submit" className="btn btn-primary" />
					<button
						type="button"
						onClick={handleCancel}
						className="btn btn-secondary"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default CrudAdd;
