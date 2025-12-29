# Top-Class 10m Air Pistol & Air Rifle Shooting Academy Website

A modern, fast-loading static website for a professional shooting academy featuring student galleries, performance tracking, and public notices.

## 🎯 Features

- **Modern Design**: Olympic-level shooting academy theme with clean, professional UI
- **Responsive**: Mobile-first design that works on all devices
- **Fast Loading**: Pure HTML/CSS/JavaScript - no heavy frameworks
- **Dynamic Content**: JSON-based data management for easy updates
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📁 Project Structure

```
shooting-academy/
├── index.html          # Home page with hero section
├── about.html           # Academy overview and trainer profiles
├── notices.html         # Notice board with announcements
├── gallery.html         # Student photo gallery with lightbox
├── students.html        # Student profiles and information
├── scores.html          # Performance scores with filtering
├── contact.html         # Contact information and location
├── css/
│   └── style.css       # Main stylesheet with responsive design
├── js/
│   └── script.js       # JavaScript for interactivity and data loading
├── data/
│   ├── notices.json    # Training schedules and announcements
│   ├── students.json   # Student information and profiles
│   ├── scores.json     # Performance data and scores
│   └── gallery.json    # Photo gallery metadata
└── images/
    ├── students/       # Student photos
    ├── gallery/        # Gallery images
    └── backgrounds/    # Background images
```

## 🚀 Quick Start

1. **Clone or Download** this repository
2. **Add Images**: Place student photos in `images/students/` and gallery photos in `images/gallery/`
3. **Update Data**: Modify JSON files in the `data/` folder with your academy's information
4. **Deploy**: Upload to any web hosting service or GitHub Pages

## 📝 Updating Content

### Adding New Students
Edit `data/students.json`:
```json
{
  "id": 9,
  "name": "New Student Name",
  "event": "10m Air Pistol",
  "level": "Beginner",
  "photo": "images/students/newstudent.jpg"
}
```

### Adding New Scores
Edit `data/scores.json`:
```json
{
  "id": 11,
  "name": "Student Name",
  "event": "10m Air Rifle",
  "score": 595,
  "date": "2024-01-15"
}
```

### Adding New Notices
Edit `data/notices.json`:
```json
{
  "id": 6,
  "title": "New Training Schedule",
  "content": "Updated training timings...",
  "date": "2024-01-20",
  "type": "schedule"
}
```

### Adding Gallery Photos
Edit `data/gallery.json`:
```json
{
  "id": 7,
  "name": "Student Name",
  "event": "10m Air Pistol",
  "image": "images/gallery/photo.jpg",
  "description": "Competition photo"
}
```

## 🌐 GitHub Pages Deployment

1. **Create Repository**: Create a new repository on GitHub
2. **Upload Files**: Upload all website files to the repository
3. **Enable Pages**: Go to Settings > Pages > Source: Deploy from a branch > main
4. **Access Website**: Your site will be available at `https://username.github.io/repository-name`

## 🎨 Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #1a1a1a;      /* Dark theme color */
    --secondary-color: #f5f5f5;    /* Light background */
    --accent-color: #dc2626;       /* Red accent color */
}
```

### Contact Information
Update contact details in `contact.html`:
- Phone: +91 9163015361
- Email: kalyanishooting@gmail.com
- Address: A-8/102, Opposite Vidyasagar Manch, Kalyani, West Bengal

### Trainer Information
Update trainer profiles in `about.html`:
- Mr. Dhiman Chattopadhyay (Owner & Chief Trainer)
- Mr. Diganta Chattopadhyay (Senior Trainer)

## 📱 Mobile Responsive

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- All screen sizes

## ⚡ Performance Features

- **Lightweight**: No external dependencies or heavy frameworks
- **Fast Loading**: Optimized images and minimal CSS/JS
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant design elements

## 🔧 Technical Requirements

- **No Backend**: Pure static website
- **No Database**: JSON files for data storage
- **Modern Browsers**: Works on all modern web browsers
- **GitHub Pages Compatible**: Ready for free hosting

## 📞 Support

For technical support or customization requests, contact the academy at:
- Email: kalyanishooting@gmail.com
- Phone: +91 9163015361

## 📄 License

This website template is created for Top-Class 10m Air Pistol & Air Rifle Shooting Academy.

---

**Built with ❤️ for Olympic-level shooting excellence**