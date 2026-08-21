# เรซูเม่ของ สุริยา คะคะเนปะ

เว็บไซต์เรซูเม่สำหรับ GitHub Pages  
ออกแบบตาม PDF ต้นฉบับ + เพิ่มเอฟเฟกต์สมัยใหม่

## วิธีอัปขึ้น GitHub Pages

1. ไปที่ GitHub → สร้าง Repository ชื่อ **`Oper2548.github.io`** (ถ้ายังไม่มี)  
   หรือใช้ repo ที่มีอยู่แล้ว (`oper2548.github.io`)

2. อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ขึ้นไป:
   - `index.html`
   - `styles.css`
   - `script.js`
   - โฟลเดอร์ `assets/` (มีรูป profile.png)

3. ไปที่ **Settings → Pages**
   - Source: Deploy from a branch
   - Branch: `main` (หรือ `master`)
   - Folder: `/ (root)`

4. รอสัก 1-2 นาที แล้วเข้าดูที่  
   **https://oper2548.github.io/**

## ฟีเจอร์ที่มี

- หน้าแรกออกแบบตาม PDF เรซูเม่ต้นฉบับ
- Dark / Light Mode (จำค่าได้)
- Scroll Reveal Animation
- Responsive (มือถือสวย)
- Background ฟองอากาศเบา ๆ
- Timeline ประสบการณ์
- Skill Tags แบบ interactive
- ปุ่มดาวน์โหลดเรซูเม่ (แก้ลิงก์ PDF ได้)

## แก้ข้อมูล

แก้ข้อความใน `index.html` ได้เลย  
ถ้าอยากเปลี่ยนรูป → แทนที่ `assets/profile.png`

## เพิ่มปุ่มดาวน์โหลด PDF จริง

1. ใส่ไฟล์ `resume.pdf` ไว้ในโฟลเดอร์เดียวกับ index.html
2. แก้ใน `script.js` บรรทัด downloadBtn ให้เป็น:

```js
window.open('resume.pdf', '_blank');
```

---

สร้างด้วยความตั้งใจสำหรับคุณครับ  
ถ้าอยากปรับสี / เพิ่ม section / แก้ layout บอกได้เลย!
