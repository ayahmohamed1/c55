// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const defaultGift: GiftData = {
  name: "habiby",                                      // اسم مستلم الهدية
  senderName: "your love",                            // التوقيع في آخر الرسالة (اختياري)
  envelopeImage: "/images/envelope-aya.png",          // صورة الظرف
  birthdayImage: "/images/birthday-aya.png",          // صورة الهدية النهائية
  accentColor: "#38bdf8",                             // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
  musicUrl: "",                                       // رابط الموسيقى هنا
  message: `كل سنه وانت طيب ياسونه ياقلبي وكل سنه واحنا سوا يارب 😌♥️
اول حب واول مشاعر حقيقه واول كل حاجة حلوه والله♥️ربنا يخليك ليا طول العمر ونعيش ونحلم سوا ونسعي لتحقيق احلامنا يا احلي حد في الدنيا😭♥️
بحبك♥️`,
};

const giftData: Record<string, GiftData> = {
  hussien: defaultGift,
  yahya: defaultGift,
  aya: defaultGift,
};

export default giftData;