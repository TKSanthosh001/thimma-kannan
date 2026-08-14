import { businessConfig } from '../config/business';

/**
 * Formats a WhatsApp URL with a pre-filled message
 * @param {string} messageText - Unencoded message string
 * @returns {string} wa.me link
 */
export const getWhatsAppUrl = (messageText) => {
  const number = businessConfig.whatsapp.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(messageText);
  return `https://wa.me/${number}?text=${encodedText}`;
};

/**
 * Creates general enquiry WhatsApp message depending on language
 */
export const getGeneralWhatsAppMessage = (lang = 'ta') => {
  if (lang === 'ta') {
    return `வணக்கம் திம்மா கண்ணன்,\n\nஎங்களுக்கு ஒரு பூஜை / சுப நிகழ்ச்சிக்கான பொருட்கள் தேவைப்படுகிறது.\nவிவரங்களை அறிந்துகொள்ள விரும்புகிறோம்.`;
  }
  return `Hello Thimma Kannan,\n\nI am interested in your traditional pooja and ceremony material packages.\nPlease share the details with me.`;
};

/**
 * Formats contact form submission into a clean WhatsApp message
 */
export const getFormWhatsAppMessage = (formData, lang = 'ta') => {
  const { name, phone, functionType, preferredDate, message } = formData;

  if (lang === 'ta') {
    return `வணக்கம் திம்மா கண்ணன்,

*பூஜை தேவைக்கான புதிய கோரிக்கை:*

👤 *பெயர்:* ${name || 'வழங்கப்படவில்லை'}
📞 *தொலைபேசி:* ${phone || 'வழங்கப்படவில்லை'}
🕉️ *நிகழ்ச்சி வகை:* ${functionType || 'சுப நிகழ்ச்சி'}
📅 *தேதி:* ${preferredDate || 'விரைவில்'}

📝 *தேவைப்படும் பொருட்கள் / தகவல்:*
${message || 'ஐயர் பட்டியலின்படி பொருட்கள் பேக்கேஜ் தேவை.'}`;
  }

  return `Hello Thimma Kannan,

*New Ceremony Requirement Enquiry:*

👤 *Name:* ${name || 'N/A'}
📞 *Phone:* ${phone || 'N/A'}
🕉️ *Ceremony Type:* ${functionType || 'General Ceremony'}
📅 *Preferred Date:* ${preferredDate || 'As soon as possible'}

📝 *Requirement Details:*
${message || 'Package details required as per priest list.'}`;
};
