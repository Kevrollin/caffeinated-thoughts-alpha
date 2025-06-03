# ☕ CoffeeBlog — Blog with M-Pesa - DarajaAPI Integration

CoffeeBlog is a simple, developer-focused personal blogging site that lets readers support your work by sending tips directly via M-Pesa STK Push. No database needed. Just static blog posts, a clean UI, and direct payments to your mobile number.


## ✨ Features

- 📝 Markdown-based blogging
- ⚡ Fast and responsive design (Next.js + Tailwind CSS)
- ☕ "Buy Me Coffee" button at the end of every post
- 📲 M-Pesa STK Push Integration via Safaricom Daraja API
- 🔐 Secure payment endpoint
- ✅ No database needed (minimalist setup)


## 🔧 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Payments**: [M-Pesa Daraja API](https://developer.safaricom.co.ke/)
- **Deployment**: [Vercel](https://vercel.com/)


## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/coffeeblog.git
cd coffeeblog
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Environment Variables

Create a `.env.local` file with the following:

```env
MPESA_CONSUMER_KEY=your_consumer_key
MPESA_CONSUMER_SECRET=your_consumer_secret
MPESA_SHORTCODE=your_shortcode
MPESA_PASSKEY=your_passkey
MPESA_CALLBACK_URL=https://yourdomain.com/api/mpesa-callback
```

For testing, use Safaricom’s [sandbox credentials](https://developer.safaricom.co.ke/test_credentials).


### 4. Run the Dev Server

```bash
npm run dev
```

Navigate to `http://localhost:3000`


## 💳 How the M-Pesa Payment Flow Works

1. Reader clicks **"Buy Me Coffee"** button
2. A modal prompts for **phone number** and **amount**
3. On submit, a POST request is sent to `/api/stk-push`
4. The M-Pesa STK Push prompt appears on the reader's phone
5. Reader enters PIN to confirm
6. Upon success, they see a **"Thank You"** message

---

## 📁 Folder Structure (Important Bits)

```
/pages
  /api
    stk-push.js        # Handles M-Pesa payment logic
  /blog
    [slug].js          # Renders each blog post
/components
  BuyCoffeeModal.js    # Modal for payment input
  Toast.js             # Feedback UI
/posts
  *.md                 # Your blog content
```

---

## 📦 Deployment

1. Push to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Deploy!

---

## 🛠️ To-Do / Future Features

* Add payment history (when DB is introduced)
* Admin dashboard
* Dark mode toggle
* Email confirmations on successful payment


## 🤝 Support

If you found this useful or want to support, try the **Buy Me Coffee** button at the bottom of any article 😉.

---

## 👨‍💻 Developer Info

**Name:** Kelvin Mukaria  
**AKA:** KevDev / MK / KevRollin  
**Role:** Web Developer | Ethical Hacker | CS Student | AI Enthusiast @ Egerton University  
**Skills:** Full-Stack Web Dev, Cybersecurity, Automation, UI/UX, and Technical Projects  
**Portfolio:** [MK](https://kelvin-mukaria-kev-dev.vercel.app/)  
**Email:** kelvinmukaria2023@gmail.com  
**WhatsApp:** [+254 757 086742](https://wa.me/254757086742)  
**GitHub:** [@KelvinMukaria](https://github.com/Kevrollin/)  
**X (Twitter):** [@KevRollin](https://x.com/kevrollin012/)  

> Building tools and platforms that actually help people. Let’s collaborate and code something dope.


## 📜 License

MIT — feel free to use, remix, and improve.

```
