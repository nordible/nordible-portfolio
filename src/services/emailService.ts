export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  description: string;
  to?: string | string[];
  brochureDownload?: boolean;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        projectType: formData.projectType,
        budget: formData.budget,
        description: formData.description,
        to: formData.to,
        brochureDownload: formData.brochureDownload,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Mail API error response:', errorData);
      return false;
    }

    const data = await response.json();
    return Boolean(data.success);
  } catch (error) {
    console.error('Email sending failed via server API:', error);
    return false;
  }
};