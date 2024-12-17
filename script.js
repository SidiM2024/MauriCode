// إضافة مستمع للنقر على أيقونة القائمة
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// JavaScript للعد التنازلي
function startCountdown() {
    const countdownDate = new Date("Dec 31, 2024 00:00:00").getTime(); // تحديد تاريخ المسابقة
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        // حساب الوقت المتبقي
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // عرض الوقت المتبقي
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        // إذا انتهى العد التنازلي
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("countdown-timer").innerText = "المسابقة بدأت!";
        }
    }, 1000);
}

startCountdown();

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج

    // الحصول على البيانات المدخلة من قبل المستخدم
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var bio = document.getElementById('bio').value;
    var interests = document.getElementById('interests').value;

    // إنشاء رسالة يتم إرسالها عبر واتساب
    var message = `*التسجيل الجديد*\n\n`;
    message += `الاسم: ${name}\n`;
    message += `رقم الهاتف: ${phone}\n`;
    message += `السيرة الذاتية: ${bio}\n`;
    message += `الاهتمامات: ${interests}\n`;

    // إنشاء رابط واتساب مع الرسالة
    var whatsappURL = `https://wa.me/30647036?text=${encodeURIComponent(message)}`;

    // إعادة توجيه المستخدم إلى رابط واتساب
    window.open(whatsappURL, '_blank');
});



// إذا أردت إضافة تفاعل مع الأزرار أو المحتوى يمكن إضافة أكواد JavaScript هنا
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('سيتم إعادة توجيهك إلى الموقع المناسب');
    });
});

// دالة إرسال البيانات إلى واتساب عند إرسال النموذج
function submitExpertForm(event) {
    event.preventDefault(); // منع إرسال النموذج بشكل تقليدي

    // جمع البيانات من النموذج
    const name = document.getElementById("name").value;
    const expertise = document.getElementById("expertise").value;
    const bio = document.getElementById("bio").value;
    const contact = document.getElementById("contact").value;

    // تكوين رسالة واتساب
    const message = `اسم: ${name}\nمجال الخبرة: ${expertise}\nسيرة ذاتية: ${bio}\nرقم الهاتف: ${contact}`;

    // فتح رابط واتساب مع الرسالة
    window.open(`https://wa.me/30647036?text=${encodeURIComponent(message)}`, '_blank');
}

// دالة إرسال البيانات إلى واتساب عند إرسال النموذج للشركات
function submitCompanyForm(event) {
    event.preventDefault(); // منع إرسال النموذج بشكل تقليدي

    // جمع البيانات من النموذج
    const companyName = document.getElementById("company-name").value;
    const industry = document.getElementById("industry").value;
    const companyBio = document.getElementById("company-bio").value;
    const companyContact = document.getElementById("company-contact").value;

    // تكوين رسالة واتساب
    const message = `اسم الشركة: ${companyName}\nصناعة الشركة: ${industry}\nنبذة عن الشركة: ${companyBio}\nرقم الهاتف: ${companyContact}`;

    // فتح رابط واتساب مع الرسالة
    window.open(`https://wa.me/30647036?text=${encodeURIComponent(message)}`, '_blank');
}
