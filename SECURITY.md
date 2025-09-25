# دليل الأمان - الصندوق السيادي السوري

## الإعدادات الأمنية المطبقة

### 1. إعدادات Next.js الأمنية
- ✅ تفعيل فحص ESLint و TypeScript
- ✅ إضافة رؤوس أمنية
- ✅ إخفاء رأس X-Powered-By
- ✅ تفعيل ضغط الملفات

### 2. رؤوس الأمنية المطبقة
- `X-Frame-Options: DENY` - منع التضمين في iframe
- `X-Content-Type-Options: nosniff` - منع تخمين نوع المحتوى
- `Referrer-Policy: strict-origin-when-cross-origin` - التحكم في معلومات المرجع
- `X-XSS-Protection: 1; mode=block` - حماية من XSS
- `Permissions-Policy` - التحكم في الصلاحيات
- `Strict-Transport-Security` - إجبار HTTPS

### 3. إعدادات TypeScript المحسنة
- ✅ تفعيل الفحص الصارم
- ✅ منع المتغيرات غير المستخدمة
- ✅ فحص أنواع البيانات بدقة

## متغيرات البيئة المطلوبة

```bash
# انسخ هذا إلى .env.local
NEXT_PUBLIC_APP_URL=https://syrian-fund.vercel.app
NEXT_PUBLIC_APP_NAME="الصندوق السيادي السوري"
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=https://syrian-fund.vercel.app
```

## فحص التبعيات

```bash
npm audit
npm audit fix
```

## نصائح أمنية إضافية

1. **تحديث التبعيات بانتظام**
2. **فحص التبعيات شهرياً**
3. **استخدام HTTPS دائماً**
4. **عدم تخزين معلومات حساسة في الكود**
5. **استخدام متغيرات البيئة للمعلومات الحساسة**

## الإبلاغ عن الثغرات الأمنية

إذا اكتشفت ثغرة أمنية، يرجى التواصل عبر:
- البريد الإلكتروني: security@ssf.gov.sy
- لا تشارك التفاصيل علناً قبل الإصلاح
