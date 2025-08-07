// Enhanced Theme Toggle with Professional Animation and Classy Black/Light Mode
        const themeToggle = document.getElementById('themeToggle');
        const icon = themeToggle.querySelector('i');
        let isDark = true;

        function setDarkMode() {
            document.documentElement.style.setProperty('--bg-primary', '#090909');
            document.documentElement.style.setProperty('--bg-secondary', '#131313');
            document.documentElement.style.setProperty('--bg-tertiary', '#18181b');
            document.documentElement.style.setProperty('--card-bg', 'rgba(18, 18, 18, 0.97)');
            document.documentElement.style.setProperty('--glass-bg', 'rgba(255,255,255,0.05)');
            document.documentElement.style.setProperty('--text-white', '#fff');
            document.documentElement.style.setProperty('--text-gray-light', '#e5e7eb');
            document.documentElement.style.setProperty('--text-gray', '#9ca3af');
            document.documentElement.style.setProperty('--text-gray-dark', '#6b7280');
            document.documentElement.style.setProperty('--border-color', 'rgba(255,255,255,0.1)');
            document.documentElement.style.setProperty('--navbar-bg', 'rgba(10, 10, 10, 0.95)');
            document.documentElement.style.setProperty('--vote-arrow-dark', '#fff');
            document.documentElement.style.setProperty('--vote-arrow-light', '#23272f');
            document.body.style.background = 'linear-gradient(135deg, #090909 0%, #131313 50%, #18181b 100%)';
            // Change logo to dark
            const logoImg = document.getElementById('devantraLogo');
            if (logoImg) logoImg.src = 'logo.png';
            // Change vote arrow color
            document.querySelectorAll('.vote-btn').forEach(btn => btn.style.color = getComputedStyle(document.documentElement).getPropertyValue('--vote-arrow-dark'));
        }
        function setLightMode() {
            document.documentElement.style.setProperty('--bg-primary', '#f8fafc');
            document.documentElement.style.setProperty('--bg-secondary', '#e5e7eb');
            document.documentElement.style.setProperty('--bg-tertiary', '#f1f5f9');
            document.documentElement.style.setProperty('--card-bg', 'rgba(255,255,255,0.97)');
            document.documentElement.style.setProperty('--glass-bg', 'rgba(0,0,0,0.03)');
            document.documentElement.style.setProperty('--text-white', '#18181b');
            document.documentElement.style.setProperty('--text-gray-light', '#374151');
            document.documentElement.style.setProperty('--text-gray', '#6b7280');
            document.documentElement.style.setProperty('--text-gray-dark', '#9ca3af');
            document.documentElement.style.setProperty('--border-color', 'rgba(0,0,0,0.08)');
            document.documentElement.style.setProperty('--navbar-bg', '#fff');
            document.documentElement.style.setProperty('--vote-arrow-dark', '#23272f');
            document.documentElement.style.setProperty('--vote-arrow-light', '#23272f');
            document.body.style.background = 'linear-gradient(135deg, #f8fafc 0%, #e5e7eb 50%, #f1f5f9 100%)';
            // Change logo to light
            const logoImg = document.getElementById('devantraLogo');
            if (logoImg) logoImg.src = 'logo.png';
            // Change vote arrow color
            document.querySelectorAll('.vote-btn').forEach(btn => btn.style.color = getComputedStyle(document.documentElement).getPropertyValue('--vote-arrow-light'));
        }
        themeToggle.addEventListener('click', () => {
            isDark = !isDark;
            themeToggle.style.transform = 'scale(0.8) rotate(360deg)';
            setTimeout(() => {
                if (isDark) {
                    icon.className = 'fas fa-sun';
                    setDarkMode();
                } else {
                    icon.className = 'fas fa-moon';
                    setLightMode();
                }
                themeToggle.style.transform = 'scale(1) rotate(0deg)';
            }, 200);
        });
        // Set initial mode
        setDarkMode();

        // Enhanced Filter Buttons with Ripple Effect
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Create ripple effect
                createRipple(button);
            });
        });

        // Professional Navigation with Smooth Transitions
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                navLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');
                
                // Add smooth transition effect
                link.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    link.style.transform = '';
                }, 150);
            });
        });

        // Enhanced Vote Buttons with Professional Animation
        const voteButtons = document.querySelectorAll('.vote-btn');
        
        voteButtons.forEach(button => {
            button.addEventListener('click', () => {
                button.style.transform = 'scale(1.5) rotate(15deg)';
                button.style.color = '#8b5cf6';
                
                setTimeout(() => {
                    button.style.transform = 'scale(1)';
                    button.style.color = '#ef4444';
                }, 300);
            });
        });

        // Professional Register Button Animation
        const registerBtn = document.querySelector('.register-btn');
        
        registerBtn.addEventListener('click', () => {
            registerBtn.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                registerBtn.style.transform = 'translateY(-3px)';
            }, 150);
            
            // Add success feedback
            const originalText = registerBtn.innerHTML;
            registerBtn.innerHTML = '<i class="fas fa-check"></i> <span>Registered!</span>';
            
            setTimeout(() => {
                registerBtn.innerHTML = originalText;
            }, 2000);
        });

        // Enhanced Search Input with Professional Effects
        const searchInput = document.querySelector('.search-input');
        
        searchInput.addEventListener('focus', () => {
            searchInput.style.transform = 'scale(1.02)';
            searchInput.parentElement.style.transform = 'translateY(-2px)';
        });
        
        searchInput.addEventListener('blur', () => {
            searchInput.style.transform = 'scale(1)';
            searchInput.parentElement.style.transform = 'translateY(0)';
        });

        // Professional Ripple Effect Function
        function createRipple(element) {
            const ripple = document.createElement('span');
            const rect = element.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${rect.width / 2 - size / 2}px;
                top: ${rect.height / 2 - size / 2}px;
                background: rgba(139, 92, 246, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            element.style.position = 'relative';
            element.style.overflow = 'hidden';
            element.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        }

        // Add CSS for ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Professional Intersection Observer for Scroll Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for professional scroll animations
        document.querySelectorAll('.widget, .post-card, .about-card, .nav-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            observer.observe(el);
        });

        // Professional Hover Effects for Cards
        document.querySelectorAll('.about-card, .nav-card, .widget, .main-content').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.borderColor = 'var(--border-hover)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.borderColor = 'var(--border-color)';
            });
        });

        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';

        // Professional loading animation
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            document.body.style.animation = 'fadeIn 1s ease-out forwards';
        });