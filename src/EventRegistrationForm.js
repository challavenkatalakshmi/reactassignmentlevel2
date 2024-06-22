import React from 'react';
import useForm from './useForm';
import validate from './validate';
import './EventRegistrationForm.css';

const EventRegistrationForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    experience: '',
    portfolio: '',
    managementExperience: '',
    skills: {
      javascript: false,
      css: false,
      python: false,
    },
    interviewTime: '',
    submitted: false,
  };

  const { values, errors, handleChange, handleSubmit } = useForm(initialValues, validate);

  return (
    <div className="form-container">
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" name="fullName" value={values.fullName} onChange={handleChange} />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={values.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" value={values.phoneNumber} onChange={handleChange} />
          {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
        </div>

        <div className="form-group">
          <label>Applying for Position:</label>
          <select name="position" value={values.position} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
        </div>

        {(values.position === 'Developer' || values.position === 'Designer') && (
          <div className="form-group">
            <label>Relevant Experience (years):</label>
            <input type="number" name="experience" value={values.experience} onChange={handleChange} />
            {errors.experience && <p className="error">{errors.experience}</p>}
          </div>
        )}

        {values.position === 'Designer' && (
          <div className="form-group">
            <label>Portfolio URL:</label>
            <input type="text" name="portfolio" value={values.portfolio} onChange={handleChange} />
            {errors.portfolio && <p className="error">{errors.portfolio}</p>}
          </div>
        )}

        {values.position === 'Manager' && (
          <div className="form-group">
            <label>Management Experience:</label>
            <input type="text" name="managementExperience" value={values.managementExperience} onChange={handleChange} />
            {errors.managementExperience && <p className="error">{errors.managementExperience}</p>}
          </div>
        )}

        <div className="form-group">
          <label>Additional Skills:</label>
          <div>
            <label>
              <input type="checkbox" name="skills.javascript" checked={values.skills.javascript} onChange={handleChange} />
              JavaScript
            </label>
            <label>
              <input type="checkbox" name="skills.css" checked={values.skills.css} onChange={handleChange} />
              CSS
            </label>
            <label>
              <input type="checkbox" name="skills.python" checked={values.skills.python} onChange={handleChange} />
              Python
            </label>
          </div>
          {errors.skills && <p className="error">{errors.skills}</p>}
        </div>

        <div className="form-group">
          <label>Preferred Interview Time:</label>
          <input type="datetime-local" name="interviewTime" value={values.interviewTime} onChange={handleChange} />
          {errors.interviewTime && <p className="error">{errors.interviewTime}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {values.submitted && (
        <div className="summary">
          <h3>Summary:</h3>
          <p>Full Name: {values.fullName}</p>
          <p>Email: {values.email}</p>
          <p>Phone Number: {values.phoneNumber}</p>
          <p>Position: {values.position}</p>
          {values.position === 'Developer' || values.position === 'Designer' ? (
            <p>Relevant Experience: {values.experience} years</p>
          ) : null}
          {values.position === 'Designer' ? <p>Portfolio URL: {values.portfolio}</p> : null}
          {values.position === 'Manager' ? <p>Management Experience: {values.managementExperience}</p> : null}
          <p>Skills: {Object.keys(values.skills).filter(skill => values.skills[skill]).join(', ')}</p>
          <p>Preferred Interview Time: {values.interviewTime}</p>
        </div>
      )}
    </div>
  );
};

export default EventRegistrationForm;
