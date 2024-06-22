export default function validate(values) {
    let errors = {};
  
    if (!values.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
  
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }
  
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d+$/.test(values.phoneNumber)) {
      errors.phoneNumber = 'Phone Number must be a valid number';
    }
  
    if ((values.position === 'Developer' || values.position === 'Designer') && !values.experience) {
      errors.experience = 'Relevant Experience is required';
    } else if (values.experience && isNaN(values.experience)) {
      errors.experience = 'Experience must be a number';
    }
  
    if (values.position === 'Designer' && !values.portfolio) {
      errors.portfolio = 'Portfolio URL is required';
    } else if (values.portfolio && !/^https?:\/\/.*\..*/.test(values.portfolio)) {
      errors.portfolio = 'Portfolio URL is invalid';
    }
  
    if (values.position === 'Manager' && !values.managementExperience) {
      errors.managementExperience = 'Management Experience is required';
    }
  
    if (!Object.values(values.skills).some((skill) => skill)) {
      errors.skills = 'At least one skill must be selected';
    }
  
    if (!values.interviewTime) {
      errors.interviewTime = 'Preferred Interview Time is required';
    }
  
    return errors;
  }
  