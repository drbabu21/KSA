// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});

// Load and display notices
async function loadNotices() {
    try {
        const response = await fetch('data/notices.json');
        const notices = await response.json();
        const container = document.getElementById('notices-container');
        
        if (container) {
            container.innerHTML = notices.map(notice => `
                <div class="notice-item">
                    <div class="notice-date">${notice.date}</div>
                    <h3>${notice.title}</h3>
                    <p>${notice.content}</p>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error loading notices:', error);
    }
}

// Load and display students
async function loadStudents() {
    try {
        const response = await fetch('data/students.json');
        const students = await response.json();
        const container = document.getElementById('students-container');
        
        if (container) {
            container.innerHTML = students.map(student => `
                <div class="student-card">
                    <div class="student-photo">
                        ${student.photo ? `<img src="${student.photo}" alt="${student.name}">` : 'Photo Placeholder'}
                    </div>
                    <div class="student-info">
                        <div class="student-name">${student.name}</div>
                        <div class="student-event">${student.event}</div>
                        <div class="student-level">${student.level}</div>
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error loading students:', error);
    }
}

// Load and display gallery
async function loadGallery() {
    try {
        const response = await fetch('data/gallery.json');
        const photos = await response.json();
        const container = document.getElementById('gallery-container');
        
        if (container) {
            container.innerHTML = photos.map(photo => `
                <div class="gallery-item" onclick="openLightbox('${photo.image}', '${photo.name}', '${photo.event}')">
                    <img src="${photo.image}" alt="${photo.name}" loading="lazy">
                    <div class="gallery-overlay">
                        <h4>${photo.name}</h4>
                        <p>${photo.event}</p>
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error loading gallery:', error);
    }
}

// Load and display scores
async function loadScores() {
    try {
        const response = await fetch('data/scores.json');
        const scores = await response.json();
        const tbody = document.getElementById('scores-tbody');
        
        if (tbody) {
            // Sort by score (highest first)
            scores.sort((a, b) => b.score - a.score);
            
            tbody.innerHTML = scores.map(score => `
                <tr>
                    <td>${score.name}</td>
                    <td>${score.event}</td>
                    <td>${score.date}</td>
                    <td><strong>${score.score}</strong></td>
                </tr>
            `).join('');
        }
    } catch (error) {
        console.error('Error loading scores:', error);
    }
}

// Filter scores by event
function filterScores(event) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const filter = event.target.dataset.filter;
    const rows = document.querySelectorAll('#scores-tbody tr');
    
    rows.forEach(row => {
        const eventCell = row.cells[1].textContent;
        if (filter === 'all' || eventCell.includes(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Simple lightbox for gallery
function openLightbox(imageSrc, name, event) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img src="${imageSrc}" alt="${name}">
            <div class="lightbox-info">
                <h3>${name}</h3>
                <p>${event}</p>
            </div>
        </div>
    `;
    
    // Add lightbox styles
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
    `;
    
    const content = lightbox.querySelector('.lightbox-content');
    content.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
        text-align: center;
    `;
    
    const img = lightbox.querySelector('img');
    img.style.cssText = `
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
    `;
    
    const close = lightbox.querySelector('.lightbox-close');
    close.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 30px;
        cursor: pointer;
    `;
    
    const info = lightbox.querySelector('.lightbox-info');
    info.style.cssText = `
        color: white;
        margin-top: 20px;
    `;
    
    document.body.appendChild(lightbox);
    
    // Close lightbox
    close.addEventListener('click', () => document.body.removeChild(lightbox));
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) document.body.removeChild(lightbox);
    });
}

// Initialize page-specific content
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    
    if (path.includes('notices.html') || path === '/notices.html') {
        loadNotices();
    } else if (path.includes('students.html') || path === '/students.html') {
        loadStudents();
    } else if (path.includes('gallery.html') || path === '/gallery.html') {
        loadGallery();
    } else if (path.includes('scores.html') || path === '/scores.html') {
        loadScores();
        
        // Add filter event listeners
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', filterScores);
        });
    }
});