class ResumeApp {
    constructor() {
        this.config = null;
        this.init();
    }

    async init() {
        try {
            await this.loadConfig();
            this.applyTheme();
            this.renderAll();
            this.initParticles();
            this.initNavigation();
            this.initScrollEffects();
            this.initAnimations();
        } catch (error) {
            console.error('初始化失败:', error);
            this.showError('加载数据失败，请刷新页面重试');
        }
    }

    async loadConfig() {
        const response = await fetch('data/config.json');
        if (!response.ok) {
            throw new Error('无法加载配置文件');
        }
        this.config = await response.json();
    }

    applyTheme() {
        if (this.config.theme) {
            const { primaryColor, secondaryColor, accentColor, backgroundColor } = this.config.theme;
            document.documentElement.style.setProperty('--primary-color', primaryColor);
            document.documentElement.style.setProperty('--secondary-color', secondaryColor);
            document.documentElement.style.setProperty('--accent-color', accentColor);
            document.documentElement.style.setProperty('--bg-color', backgroundColor);
        }
    }

    renderAll() {
        this.renderPersonal();
        this.renderEducation();
        this.renderExperience();
        this.renderProjects();
        this.renderSkills();
        this.renderCertifications();
        this.renderLanguages();
        this.renderInterests();
        this.renderContact();
        this.renderFooter();
    }

    renderPersonal() {
        const { personal } = this.config;
        
        document.getElementById('page-title').textContent = `${personal.name} - 个人简历`;
        document.getElementById('name').textContent = personal.name;
        document.getElementById('title').textContent = personal.title;
        document.getElementById('availability').textContent = personal.availability;
        document.getElementById('summary').textContent = personal.summary;
        document.getElementById('location').textContent = personal.location;
        
        if (personal.avatar) {
            const avatarImg = document.getElementById('avatar');
            avatarImg.src = personal.avatar;
            avatarImg.alt = `${personal.name}的头像`;
        }
    }

    renderEducation() {
        const container = document.getElementById('education-timeline');
        const { education } = this.config;
        
        container.innerHTML = education.map(edu => `
            <div class="timeline-item">
                <div class="timeline-header">
                    <div>
                        <h3 class="timeline-title">${edu.school}</h3>
                        <p class="timeline-subtitle">${edu.degree}</p>
                    </div>
                    <div class="timeline-meta">
                        <span class="timeline-period">${edu.period}</span>
                        <span class="timeline-location">${edu.location}</span>
                    </div>
                </div>
                <ul class="timeline-highlights">
                    ${edu.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

    renderExperience() {
        const container = document.getElementById('experience-timeline');
        const { experience } = this.config;
        
        container.innerHTML = experience.map(exp => `
            <div class="timeline-item">
                <div class="timeline-header">
                    <div>
                        <h3 class="timeline-title">${exp.company}</h3>
                        <p class="timeline-subtitle">${exp.position}</p>
                    </div>
                    <div class="timeline-meta">
                        <span class="timeline-period">${exp.period}</span>
                        <span class="timeline-location">${exp.location}</span>
                    </div>
                </div>
                <p class="timeline-description">${exp.description}</p>
                <ul class="timeline-highlights">
                    ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
                </ul>
                <div class="tech-tags">
                    ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    renderProjects() {
        const container = document.getElementById('projects-grid');
        const { projects } = this.config;
        
        container.innerHTML = projects.map(project => `
            <div class="project-card">
                <div class="project-header">
                    <h3 class="project-name">${project.name}</h3>
                    <p class="project-role">${project.role} · ${project.period}</p>
                </div>
                <p class="project-description">${project.description}</p>
                <ul class="project-highlights">
                    ${project.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
                <div class="tech-tags" style="margin-bottom: 1rem;">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                ${project.link ? `
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">
                        <i class="fab fa-github"></i>
                        查看项目
                    </a>
                ` : ''}
            </div>
        `).join('');
    }

    renderSkills() {
        const { skills } = this.config;
        
        this.renderSkillCategory('programming-skills', skills.programming);
        this.renderSkillCategory('frameworks-skills', skills.frameworks);
        this.renderSkillCategory('databases-skills', skills.databases);
        this.renderSkillCategory('tools-skills', skills.tools);
        
        const softSkillsContainer = document.getElementById('soft-skills');
        softSkillsContainer.innerHTML = skills.soft.map(skill => 
            `<span class="skill-tag">${skill}</span>`
        ).join('');
    }

    renderSkillCategory(containerId, skills) {
        const container = document.getElementById(containerId);
        container.innerHTML = skills.map(skill => `
            <div class="skill-item">
                <div class="skill-header">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-level">${skill.level}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress" data-level="${skill.level}"></div>
                </div>
            </div>
        `).join('');
    }

    renderCertifications() {
        const container = document.getElementById('certifications-grid');
        const { certifications } = this.config;
        
        container.innerHTML = certifications.map(cert => `
            <div class="cert-card">
                <div class="cert-icon">
                    <i class="fas fa-award"></i>
                </div>
                <div class="cert-info">
                    <h4 class="cert-name">${cert.name}</h4>
                    <p class="cert-issuer">${cert.issuer}</p>
                    <p class="cert-date">${cert.date}</p>
                </div>
            </div>
        `).join('');
    }

    renderLanguages() {
        const container = document.getElementById('languages-container');
        const { languages } = this.config;
        
        container.innerHTML = languages.map(lang => `
            <div class="language-item">
                <h4 class="language-name">${lang.name}</h4>
                <p class="language-level">${lang.level}</p>
            </div>
        `).join('');
    }

    renderInterests() {
        const container = document.getElementById('interests-container');
        const { interests } = this.config;
        
        const icons = {
            '开源贡献': 'fa-code-branch',
            '技术写作': 'fa-pen-fancy',
            '马拉松': 'fa-running',
            '摄影': 'fa-camera',
            '阅读': 'fa-book',
            '旅行': 'fa-plane',
            '音乐': 'fa-music',
            '游戏': 'fa-gamepad'
        };
        
        container.innerHTML = interests.map(interest => `
            <div class="interest-tag">
                <i class="fas ${icons[interest] || 'fa-star'}"></i>
                ${interest}
            </div>
        `).join('');
    }

    renderContact() {
        const container = document.getElementById('contact-cards');
        const { contact } = this.config;
        
        const contactItems = [
            { icon: 'fa-envelope', label: '邮箱', value: contact.email, link: `mailto:${contact.email}` },
            { icon: 'fa-phone', label: '电话', value: contact.phone, link: `tel:${contact.phone}` },
            { icon: 'fa-github', label: 'GitHub', value: contact.github.replace('https://', ''), link: contact.github },
            { icon: 'fa-linkedin', label: 'LinkedIn', value: contact.linkedin.replace('https://', ''), link: contact.linkedin },
            { icon: 'fa-globe', label: '个人网站', value: contact.website.replace('https://', ''), link: contact.website },
            { icon: 'fa-weixin', label: '微信', value: contact.wechat }
        ];
        
        container.innerHTML = contactItems.map(item => `
            <a href="${item.link || '#'}" class="contact-card" ${item.link && item.link.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                <div class="contact-icon">
                    <i class="fas ${item.icon}"></i>
                </div>
                <p class="contact-label">${item.label}</p>
                <p class="contact-value">${item.value}</p>
            </a>
        `).join('');
    }

    renderFooter() {
        document.getElementById('year').textContent = new Date().getFullYear();
        document.getElementById('footer-name').textContent = this.config.personal.name;
    }

    initParticles() {
        const container = document.getElementById('particles');
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 15}s`;
            particle.style.animationDuration = `${15 + Math.random() * 10}s`;
            
            const colors = ['var(--primary-color)', 'var(--secondary-color)', 'var(--accent-color)'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
            
            container.appendChild(particle);
        }
    }

    initNavigation() {
        const navToggle = document.getElementById('navToggle');
        const navLinks = document.querySelector('.nav-links');
        const navLinksItems = document.querySelectorAll('.nav-link');
        
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        const sections = document.querySelectorAll('section[id]');
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinksItems.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);
        
        sections.forEach(section => observer.observe(section));
    }

    initScrollEffects() {
        const backToTop = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    initAnimations() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const animateSkillBars = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target;
                    const level = progress.getAttribute('data-level');
                    progress.style.width = `${level}%`;
                    observer.unobserve(progress);
                }
            });
        };
        
        const skillObserver = new IntersectionObserver(animateSkillBars, {
            threshold: 0.5
        });
        
        skillBars.forEach(bar => skillObserver.observe(bar));
        
        const fadeElements = document.querySelectorAll('.timeline-item, .project-card, .skills-category, .cert-card, .language-item, .interest-tag, .contact-card');
        
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        fadeElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            fadeObserver.observe(el);
        });
    }

    showError(message) {
        document.body.innerHTML = `
            <div style="
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                background: #0a0a1a;
                color: #fff;
                font-family: sans-serif;
                text-align: center;
                padding: 2rem;
            ">
                <div>
                    <h1 style="color: #00f5ff; margin-bottom: 1rem;">⚠️ 加载错误</h1>
                    <p style="color: #b0b0c0;">${message}</p>
                </div>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ResumeApp();
});
