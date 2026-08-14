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
 * Creates initial WhatsApp message asking to send existing list
 */
export const getGeneralWhatsAppMessage = (lang = 'ta') => {
  if (lang === 'ta') {
    return `வணக்கம் திம்மா கண்ணன்,\n\nஎன்னிடம் பூஜை / நிகழ்ச்சிக்கான பொருட்கள் பட்டியல் உள்ளது. அந்த பட்டியலை உங்களுக்கு அனுப்புகிறேன். தேவையான பொருட்கள் அனைத்தையும் ஏற்பாடு செய்து தர முடியுமா?`;
  }
  return `Hello Thimma Kannan,\n\nI have the material list for my pooja/ceremony. I would like to send the list to you. Please let me know if you can arrange the required items.`;
};

/**
 * Formats contact form submission into a clean WhatsApp list message
 */
export const getFormWhatsAppMessage = (formData, lang = 'ta') => {
  const { name, phone, functionType, preferredDate, message } = formData;

  if (lang === 'ta') {
    return `வணக்கம் திம்மா கண்ணன்,

*என்னிடம் உள்ள பூஜை பொருட்கள் பட்டியல் பற்றிய கோரிக்கை:*

👤 *பெயர்:* ${name || 'வழங்கப்படவில்லை'}
📞 *தொலைபேசி:* ${phone || 'வழங்கப்படவில்லை'}
🕉️ *நிகழ்ச்சி வகை:* ${functionType || 'சுப நிகழ்ச்சி'}
📅 *தேதி:* ${preferredDate || 'விரைவில்'}

📝 *பட்டியல் விபரம் / குறிப்பு:*
${message || 'என்னிடம் உள்ள ஐயர் பட்டியலை அனுப்புகிறேன். தேவையான பொருட்களை ஏற்பாடு செய்ய விரும்புகிறேன்.'}`;
  }

  return `Hello Thimma Kannan,

*Ceremony Material List Arrangement Request:*

👤 *Name:* ${name || 'N/A'}
📞 *Phone:* ${phone || 'N/A'}
🕉️ *Ceremony Type:* ${functionType || 'General Ceremony'}
📅 *Preferred Date:* ${preferredDate || 'As soon as possible'}

📝 *List Details / Notes:*
${message || 'I have the priest list ready and would like you to arrange the items.'}`;
};
