// بيانات الكتب
const books = [
    {
        isbn: "9781234567890",
        title: "كتاب البرمجة",
        price: 5000,
        details: "الناشر: مكتبة النشر، التصنيف: برمجة، ملخص: هذا الكتاب يشرح البرمجة. يحتوي على أمثلة تطبيقية عملية."
    },
    {
        isbn: "9780987654321",
        title: "أساسيات التصميم",
        price: 6000,
        details: "الناشر: دار التصميم، التصنيف: تصميم، ملخص: دليل شامل لأدوات التصميم وتقنياته."
    },
    {
        isbn: "9781122334455",
        title: "تعلم جافا سكريبت",
        price: 4500,
        details: "الناشر: دار التقنية، التصنيف: تطوير الويب، ملخص: دليل شامل لتعلم جافا سكريبت للمبتدئين والمحترفين."
    },
    {
        isbn: "9782233445566",
        title: "ذكاء اصطناعي",
        price: 7000,
        details: "الناشر: أكاديمية العلوم، التصنيف: تقنية، ملخص: نظرة شاملة على الذكاء الاصطناعي واستخداماته."
    },
    {
        isbn: "9783344556677",
        title: "أساسيات الشبكات",
        price: 6500,
        details: "الناشر: شبكة المعرفة، التصنيف: شبكات، ملخص: مقدمة شاملة إلى عالم الشبكات وأساسياتها."
    },
    {
        isbn: "9784455667788",
        title: "إدارة المشاريع",
        price: 8000,
        details: "الناشر: دار الإدارة، التصنيف: إدارة، ملخص: دليل عملي لإدارة المشاريع بكفاءة وفعالية."
    },
    {
        isbn: "9785566778899",
        title: "علم البيانات",
        price: 7500,
        details: "الناشر: أكاديمية البيانات، التصنيف: بيانات، ملخص: تعلم مبادئ علم البيانات وتحليل البيانات الضخمة."
    },
    {
        isbn: "9786677889900",
        title: "البرمجة بلغة C++",
        price: 5500,
        details: "الناشر: دار التقنية، التصنيف: برمجة، ملخص: تعلم البرمجة باستخدام C++."
    },
    {
        isbn: "9787788990011",
        title: "تصميم واجهات المستخدم",
        price: 6800,
        details: "الناشر: دار الإبداع، التصنيف: تصميم، ملخص: تعلم تصميم واجهات المستخدم الحديثة."
    },
    {
        isbn: "9788899001122",
        title: "التحليل الإحصائي",
        price: 7200,
        details: "الناشر: أكاديمية التحليل، التصنيف: إحصاء، ملخص: تعلم أدوات وتقنيات التحليل الإحصائي."
    }
];

// إنشاء جدول الكتب
function populateBooksTable() {
    const tableBody = document.getElementById("booksTable");
    books.forEach((book, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.isbn}</td>
            <td>${book.title}</td>
            <td>${book.price}</td>
            <td><button onclick="showDetails(this, ${index})">عرض التفاصيل</button></td>
            <td><input type="checkbox" name="selectBook"></td>
        `;
        tableBody.appendChild(row);
    });
}

// عرض التفاصيل
function showDetails(button, index) {
    const row = button.parentElement.parentElement;
    const detailsCell = document.createElement("td");
    detailsCell.setAttribute("colspan", "5");
    detailsCell.textContent = books[index].details;

    const detailsRow = document.createElement("tr");
    detailsRow.appendChild(detailsCell);

    row.parentElement.insertBefore(detailsRow, row.nextSibling);
    button.disabled = true;
}

// إظهار النموذج
function proceedToForm() {
    const selectedBooks = Array.from(document.querySelectorAll("input[name='selectBook']:checked"));
    if (selectedBooks.length === 0) {
        alert("يرجى اختيار كتاب واحد على الأقل للمتابعة.");
    } else {
        document.getElementById("orderForm").style.display = "block";
    }
}

// التحقق من النموذج وإرساله
function validateAndSubmitForm(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const nationalId = document.getElementById("nationalId").value.trim();
    const birthDate = document.getElementById("birthDate").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();

    const arabicNameRegex = /^[\u0621-\u064A\s]+$/;
    const nationalIdRegex = /^(0[1-9]|1[0-4])\d{9}$/;
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
    const mobileRegex = /^09\d{8}$/;

    if (fullName && !arabicNameRegex.test(fullName)) {
        alert("يرجى إدخال اسم يحتوي على أحرف عربية فقط.");
        return;
    }

    if (!nationalIdRegex.test(nationalId)) {
        alert("يرجى إدخال رقم وطني صحيح.");
        return;
    }

    if (birthDate && !dateRegex.test(birthDate)) {
        alert("يرجى إدخال تاريخ الميلاد بالشكل dd-mm-yyyy.");
        return;
    }

    if (mobile && !mobileRegex.test(mobile)) {
        alert("يرجى إدخال رقم موبايل صحيح.");
        return;
    }

    alert("تم إرسال الطلب بنجاح!");
}

// تشغيل الوظائف عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", populateBooksTable);