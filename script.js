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

// إضافة تأثير عند الضغط على زر الانضمام
document.querySelector('.join-btn').addEventListener('click', function () {
    alert('ستتم إعادة توجيهك إلى البث المباشر عبر Zoom!');
});

// إذا أردت إضافة تفاعل مع الأزرار أو المحتوى يمكن إضافة أكواد JavaScript هنا
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('سيتم إعادة توجيهك إلى الموقع المناسب');
    });
});
