import emailjs from '@emailjs/browser';

// EmailJS configuration
const SERVICE_ID = 'service_esxb8og';
const TEMPLATE_ID = 'template_464d5vb';
const PUBLIC_KEY = 'W5buWLUDBdochr6eS';

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  description: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      project_type: formData.projectType,
      budget: formData.budget,
      message: formData.description,
      to_email: 'mail@nordible.co'
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};