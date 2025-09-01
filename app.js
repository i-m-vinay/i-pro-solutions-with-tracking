// I-Pro Solutions Website JavaScript - Fixed Version with Working Animations & Navigation

// Global variables
let currentSection = 'home';
let isTransitioning = false;
let countersAnimated = false;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing enhanced website functionality...');
    
    // Initialize functionality
    initNavigation();
    initMobileMenu();
    initContactForm();
    initScrollAnimations();
    initSmoothTransitions();
    enhanceFormValidation();
    initPremiumEffects();
    initScrollSparkles(); // Initialize scroll sparkles
    initClickAnimations(); // Initialize click animations
    
    // Handle initial page load
    handleInitialLoad();
    
    // Initialize hero animations immediately if on home page
    setTimeout(() => {
        if (currentSection === 'home') {
            initHeroAnimations();
        }
    }, 1000);
    
    console.log('All enhanced functionality initialized successfully');
});

// Initialize scroll sparkles - FIXED
function initScrollSparkles() {
    console.log('Initializing scroll sparkles...');
    
    let scrollTimer = null;
    let sparkleCount = 0;
    const maxSparkles = 2; // Limit sparkles for subtle effect
    
    window.addEventListener('scroll', function() {
        // Clear existing timer
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        
        // Throttle sparkle creation - more gentle
        if (sparkleCount < maxSparkles && Math.random() > 0.7) { // 30% chance
            createScrollSparkle();
            sparkleCount++;
        }
        
        // Reset sparkle count after a brief pause
        scrollTimer = setTimeout(() => {
            sparkleCount = 0;
        }, 300);
    });
    
    function createScrollSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'scroll-sparkle';
        
        // Random position within viewport
        const x = Math.random() * (window.innerWidth - 50) + 25;
        const y = Math.random() * (window.innerHeight - 50) + 25;
        
        sparkle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 6px;
            height: 6px;
            background: radial-gradient(circle, #60a5fa 0%, #38D9A9 50%, transparent 80%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: sparkleFloat 2.5s ease-out forwards;
            box-shadow: 0 0 8px #60a5fa;
        `;
        
        document.body.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.remove();
            }
        }, 2500);
    }
    
    console.log('Scroll sparkles initialized successfully');
}

// Initialize click animations - FIXED
function initClickAnimations() {
    console.log('Initializing enhanced click animations...');
    
    // Add click effect to all buttons and interactive elements
    document.addEventListener('click', function(e) {
        const clickableElement = e.target.closest('.btn, .glow-effect, .service-card, .nav-link, .footer-link, .accordion-header, .faq-question, .feature, .testimonial, .founder-card, .pricing-card, .benefit-card, .portal-card, .step, .service-category');
        
        if (clickableElement && !clickableElement.disabled) {
            addEnhancedClickEffect(clickableElement, e);
        }
    });
    
    console.log('Enhanced click animations initialized successfully');
}

// Enhanced click effect with scale animation and ripple - FIXED
function addEnhancedClickEffect(element, event) {
    // Add scale animation
    element.style.transform = 'scale(0.95)';
    element.style.transition = 'transform 0.1s ease';
    
    setTimeout(() => {
        element.style.transform = '';
        element.style.transition = '';
    }, 150);
    
    // Create ripple effect
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    
    // Calculate click position relative to element
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const size = Math.max(rect.width, rect.height) * 0.6;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x - size/2}px;
        top: ${y - size/2}px;
        background: radial-gradient(circle, rgba(56, 217, 169, 0.4) 0%, rgba(96, 165, 250, 0.2) 50%, transparent 100%);
        border-radius: 50%;
        transform: scale(0);
        animation: rippleExpand 0.6s ease-out;
        pointer-events: none;
        z-index: 100;
    `;
    
    // Ensure element can contain the ripple
    const originalPosition = getComputedStyle(element).position;
    if (originalPosition === 'static') {
        element.style.position = 'relative';
    }
    element.style.overflow = 'hidden';
    
    element.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.remove();
        }
        // Restore original positioning if needed
        if (originalPosition === 'static') {
            element.style.position = '';
        }
    }, 600);
}

// Initialize hero banner animations
function initHeroAnimations() {
    console.log('Initializing hero banner animations...');
    
    // Ensure we're on the home section
    const homeSection = document.getElementById('home');
    if (!homeSection || !homeSection.classList.contains('active')) {
        console.log('Not on home section, skipping hero animations');
        return;
    }
    
    // Reset all animations first
    const animateTextElements = document.querySelectorAll('.animate-text');
    const fadeUpElements = document.querySelectorAll('.animate-fade-up');
    const statsElements = document.querySelectorAll('.animate-stats');
    
    // Reset styles
    animateTextElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
    });
    
    fadeUpElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
    });
    
    statsElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
    });
    
    // Trigger text animations
    setTimeout(() => {
        animateTextElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 500);
    
    // Trigger fade-up animations
    setTimeout(() => {
        fadeUpElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 300);
        });
    }, 800);
    
    // Trigger stats animation and counter
    setTimeout(() => {
        statsElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
        
        // Start counter animation
        if (!countersAnimated) {
            setTimeout(() => {
                animateCounters();
                countersAnimated = true;
            }, 500);
        }
    }, 1700);
    
    console.log('Hero banner animations initialized successfully');
}

// Animate counters in statistics
function animateCounters() {
    console.log('Starting counter animations...');
    
    const counters = document.querySelectorAll('.animate-counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const strongElement = counter.querySelector('strong');
        
        if (!strongElement || !target) {
            return;
        }
        
        let current = 0;
        const increment = Math.ceil(target / 60);
        const isPercentage = target === 98;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (isPercentage) {
                strongElement.textContent = Math.floor(current) + '%';
            } else {
                strongElement.textContent = Math.floor(current) + '+';
            }
        }, 30);
    });
    
    console.log('Counter animations started successfully');
}

// Initialize navigation functionality - FIXED
function initNavigation() {
    console.log('Initializing navigation...');
    
    // Get all navigation links and add proper event listeners
    const navLinks = document.querySelectorAll('.nav-link, .footer-link, .service-link');
    
    navLinks.forEach(link => {
        if (link.classList.contains('whatsapp-nav')) {
            // Handle WhatsApp nav link
            link.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                openWhatsApp('Hi! I want to chat about your IP services.');
            });
        } else if (link.onclick || link.getAttribute('onclick')) {
            // Handle existing onclick handlers
            const onclickAttr = link.getAttribute('onclick');
            if (onclickAttr) {
                link.removeAttribute('onclick');
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    executeOnclickFunction(onclickAttr);
                });
            }
        } else {
            // Handle links by text content
            link.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                handleLinkClick(this);
            });
        }
    });
    
    // Handle brand click
    const navBrand = document.querySelector('.nav-brand');
    if (navBrand) {
        navBrand.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('home');
        });
    }
    
    console.log('Navigation initialized successfully');
}

// Handle link clicks based on text content - FIXED
function handleLinkClick(link) {
    const text = link.textContent.toLowerCase().trim();
    
    // Navigation mappings
    if (text.includes('home')) {
        showSection('home');
    } else if (text.includes('trademark')) {
        if (text.includes('registration') || text.includes('services')) {
            showSection('trademarks');
        } else if (text.includes('global') || text.includes('international')) {
            showSection('global-trademark');
        } else {
            showSection('trademarks');
        }
    } else if (text.includes('copyright')) {
        showSection('copyrights');
    } else if (text.includes('patent')) {
        showSection('patents');
    } else if (text.includes('global') && text.includes('trademark')) {
        showSection('global-trademark');
    } else if (text.includes('business setup')) {
        showSection('business-setup');
    } else if (text.includes('about')) {
        showSection('about');
    } else if (text.includes('contact')) {
        showSection('contact');
    } else if (text.includes('track')) {
        showSection('track');
    } else if (text.includes('whatsapp') || text.includes('chat')) {
        openWhatsApp('Hi, I want to chat about your services.');
    } else if (text.includes('audit')) {
        openWhatsApp('I want a free trademark audit');
    } else if (text.includes('learn more')) {
        // Handle service card learn more buttons
        const serviceCard = link.closest('.service-card');
        if (serviceCard) {
            const heading = serviceCard.querySelector('h3');
            if (heading) {
                const service = heading.textContent.toLowerCase();
                if (service.includes('trademark')) showSection('trademarks');
                else if (service.includes('patent')) showSection('patents');
                else if (service.includes('copyright')) showSection('copyrights');
                else if (service.includes('global')) showSection('global-trademark');
                else if (service.includes('business')) showSection('business-setup');
            }
        }
    }
}

// Execute onclick function string - FIXED
function executeOnclickFunction(onclickStr) {
    try {
        if (onclickStr.includes('showSection(')) {
            const match = onclickStr.match(/showSection\(['"](.*?)['"]\)/);
            if (match) {
                showSection(match[1]);
            }
        } else if (onclickStr.includes('openWhatsApp(')) {
            const match = onclickStr.match(/openWhatsApp\(['"](.*?)['"]\)/);
            if (match) {
                openWhatsApp(match[1]);
            } else {
                openWhatsApp('Hi, I want to chat about your services.');
            }
        } else if (onclickStr.includes('toggleAccordion(')) {
            // Find the accordion header element
            const accordionHeaders = document.querySelectorAll('.accordion-header');
            accordionHeaders.forEach(header => {
                if (header.getAttribute('onclick') === onclickStr) {
                    toggleAccordion(header);
                }
            });
        } else if (onclickStr.includes('toggleFAQ(')) {
            // Find the FAQ question element
            const faqQuestions = document.querySelectorAll('.faq-question');
            faqQuestions.forEach(question => {
                if (question.getAttribute('onclick') === onclickStr) {
                    toggleFAQ(question);
                }
            });
        }
    } catch (error) {
        console.error('Error executing onclick function:', error);
    }
}

// Enhanced navigation function with animations
function showSection(sectionId) {
    if (isTransitioning || currentSection === sectionId) return;
    
    console.log('Navigating to section:', sectionId);
    isTransitioning = true;
    
    // Reset counter animation flag if leaving home
    if (currentSection === 'home' && sectionId !== 'home') {
        countersAnimated = false;
    }
    
    // Get current and target sections
    const currentSectionEl = document.querySelector('.section.active');
    const targetSection = document.getElementById(sectionId);
    
    if (!targetSection) {
        console.error('Section not found:', sectionId);
        isTransitioning = false;
        return;
    }
    
    // Hide current section
    if (currentSectionEl) {
        currentSectionEl.style.opacity = '0';
        currentSectionEl.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            currentSectionEl.classList.remove('active');
            currentSectionEl.style.display = 'none';
            currentSectionEl.style.opacity = '';
            currentSectionEl.style.transform = '';
        }, 300);
    }
    
    // Show target section with animation
    setTimeout(() => {
        targetSection.style.opacity = '0';
        targetSection.style.transform = 'translateY(20px)';
        targetSection.style.display = 'block';
        
        requestAnimationFrame(() => {
            targetSection.classList.add('active');
            targetSection.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            targetSection.style.opacity = '1';
            targetSection.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                targetSection.style.transition = '';
                isTransitioning = false;
                
                // Trigger hero animations if navigating to home
                if (sectionId === 'home') {
                    setTimeout(() => {
                        initHeroAnimations();
                    }, 200);
                }
            }, 600);
        });
        
        currentSection = sectionId;
        
        // Update URL
        updateURL(sectionId);
        
        // Close mobile menu
        closeMobileMenu();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        console.log('Successfully navigated to:', sectionId);
    }, 200);
}

// WhatsApp function
function openWhatsApp(message, phone = '919324090425') {
    console.log('Opening WhatsApp with message:', message);
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    try {
        window.open(whatsappURL, '_blank', 'noopener,noreferrer');
        showNotification('WhatsApp opened successfully! 🚀', 'success');
        console.log('WhatsApp opened successfully');
    } catch (error) {
        console.error('Error opening WhatsApp:', error);
        showNotification('Error opening WhatsApp. Please try again.', 'error');
    }
}

// Enhanced accordion toggle function
function toggleAccordion(header) {
    console.log('Toggling accordion:', header.textContent.trim());
    
    const accordionItem = header.parentElement;
    const accordionContent = accordionItem.querySelector('.accordion-content');
    const icon = header.querySelector('i');
    
    if (!accordionContent) {
        console.error('Accordion content not found');
        return;
    }
    
    const isActive = accordionItem.classList.contains('active');
    
    // Close all other accordions
    const accordionGroup = accordionItem.closest('.services-accordion, .category-accordion');
    if (accordionGroup) {
        const allItems = accordionGroup.querySelectorAll('.accordion-item');
        allItems.forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
                const content = item.querySelector('.accordion-content');
                const itemIcon = item.querySelector('.accordion-header i');
                
                if (content) content.style.maxHeight = '0px';
                if (itemIcon) itemIcon.style.transform = 'rotate(0deg)';
            }
        });
    }
    
    // Toggle current accordion
    if (!isActive) {
        accordionItem.classList.add('active');
        if (icon) icon.style.transform = 'rotate(180deg)';
        if (accordionContent) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }
        
        // Add glow effect
        accordionItem.style.boxShadow = '0 0 30px rgba(56, 217, 169, 0.3)';
        setTimeout(() => {
            accordionItem.style.boxShadow = '';
        }, 1000);
    } else {
        accordionItem.classList.remove('active');
        if (icon) icon.style.transform = 'rotate(0deg)';
        if (accordionContent) accordionContent.style.maxHeight = '0px';
    }
}

// Enhanced FAQ toggle function
function toggleFAQ(question) {
    console.log('Toggling FAQ:', question.textContent.trim());
    
    const faqItem = question.parentElement;
    const faqAnswer = faqItem.querySelector('.faq-answer');
    const icon = question.querySelector('i');
    
    const isActive = faqItem.classList.contains('active');
    
    // Close all other FAQ items
    const faqList = faqItem.closest('.faq-list');
    if (faqList) {
        const allItems = faqList.querySelectorAll('.faq-item');
        allItems.forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
                const answer = item.querySelector('.faq-answer');
                const itemIcon = item.querySelector('.faq-question i');
                
                if (answer) answer.style.maxHeight = '0px';
                if (itemIcon) itemIcon.style.transform = 'rotate(0deg)';
            }
        });
    }
    
    // Toggle current FAQ
    if (!isActive) {
        faqItem.classList.add('active');
        if (icon) icon.style.transform = 'rotate(180deg)';
        if (faqAnswer) {
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
        }
        
        // Add highlight effect
        faqItem.style.borderColor = 'rgba(56, 217, 169, 0.6)';
        faqItem.style.boxShadow = '0 0 20px rgba(56, 217, 169, 0.2)';
        setTimeout(() => {
            faqItem.style.borderColor = '';
            faqItem.style.boxShadow = '';
        }, 1000);
    } else {
        faqItem.classList.remove('active');
        if (icon) icon.style.transform = 'rotate(0deg)';
        if (faqAnswer) faqAnswer.style.maxHeight = '0px';
    }
}

// Mobile menu functionality
function initMobileMenu() {
    console.log('Initializing mobile menu...');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isActive = navMenu.classList.contains('active');
            
            if (!isActive) {
                navMenu.classList.add('active');
                
                const spans = this.querySelectorAll('span');
                spans.forEach((span, index) => {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(6px, 6px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(6px, -6px)';
                });
                
                document.body.style.overflow = 'hidden';
            } else {
                closeMobileMenu();
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                if (navMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
            }
        });
        
        console.log('Mobile menu initialized successfully');
    }
}

function closeMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    
    if (navMenu && navToggle && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        
        const spans = navToggle.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = '';
            span.style.opacity = '';
        });
        
        document.body.style.overflow = '';
    }
}

// Contact form functionality
function initContactForm() {
    console.log('Initializing contact form...');
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            const formData = new FormData(this);
            const name = formData.get('name')?.trim();
            const email = formData.get('email')?.trim();
            const phone = formData.get('phone')?.trim();
            const service = formData.get('service');
            const message = formData.get('message')?.trim();
            
            if (!name || !email || !message) {
                showNotification('Please fill in all required fields.', 'error');
                resetSubmitButton(submitBtn, originalText);
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                resetSubmitButton(submitBtn, originalText);
                return;
            }
            
            setTimeout(() => {
                let whatsappMessage = `🌟 *New Contact Form Inquiry* 🌟\n\n`;
                whatsappMessage += `👤 *Name:* ${name}\n`;
                whatsappMessage += `📧 *Email:* ${email}\n`;
                if (phone) whatsappMessage += `📱 *Phone:* ${phone}\n`;
                if (service && service !== '') {
                    const serviceNames = {
                        'trademark': 'Trademark Registration',
                        'patent': 'Patent Services',
                        'copyright': 'Copyright Registration',
                        'global-ip': 'Global IP Protection',
                        'business-setup': 'Business Setup India',
                        'consultation': 'General Consultation'
                    };
                    whatsappMessage += `🎯 *Service:* ${serviceNames[service] || service}\n`;
                }
                whatsappMessage += `\n💬 *Message:*\n${message}\n\n`;
                whatsappMessage += `📅 *Submitted:* ${new Date().toLocaleString()}`;
                
                openWhatsApp(whatsappMessage);
                showNotification('Your message has been prepared for WhatsApp! We will respond shortly. ✨', 'success');
                
                this.reset();
                resetSubmitButton(submitBtn, originalText);
            }, 1500);
        });
    }
}

function resetSubmitButton(button, originalText) {
    button.innerHTML = originalText;
    button.disabled = false;
}

// Notification system
function showNotification(message, type = 'info') {
    const existingNotifications = document.querySelectorAll('.premium-notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `premium-notification premium-notification-${type}`;
    
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">
                ${type === 'success' ? '<i class="fas fa-check-circle"></i>' : 
                  type === 'error' ? '<i class="fas fa-exclamation-circle"></i>' : 
                  '<i class="fas fa-info-circle"></i>'}
            </div>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    const styles = {
        success: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        error: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
        info: 'linear-gradient(135deg, #38D9A9 0%, #2cc595 100%)'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10000;
        background: ${styles[type]};
        color: ${type === 'info' ? '#000000' : 'white'};
        padding: 16px 20px;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        max-width: 400px;
        transform: translateX(120%);
        transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(120%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 600);
        }
    }, 5000);
}

// Scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    const animateElements = document.querySelectorAll(
        '.service-card, .feature, .testimonial, .founder-card, .pricing-card, .benefit-card, .portal-card, .step, .service-category'
    );
    
    animateElements.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// Initialize smooth transitions
function initSmoothTransitions() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
}

// Initialize premium effects
function initPremiumEffects() {
    const cards = document.querySelectorAll('.glow-card, .shimmer-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15), 0 0 30px rgba(255, 255, 255, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Handle initial page load
function handleInitialLoad() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    const hash = window.location.hash;
    let targetSectionId = 'home';
    
    if (hash && hash.length > 1) {
        const hashId = hash.substring(1);
        const targetSection = document.getElementById(hashId);
        if (targetSection && targetSection.classList.contains('section')) {
            targetSectionId = hashId;
        }
    }
    
    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.classList.add('active');
        targetSection.style.opacity = '1';
        targetSection.style.transform = 'translateY(0)';
    }
    
    currentSection = targetSectionId;
}

// URL management
function updateURL(sectionId) {
    const newURL = window.location.pathname + '#' + sectionId;
    window.history.replaceState({section: sectionId}, '', newURL);
}

// Form validation placeholder functions
function enhanceFormValidation() {
    // Placeholder for form validation enhancement
}

// Handle browser navigation
window.addEventListener('popstate', function(e) {
    handleInitialLoad();
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

// Add enhanced CSS animations
const enhancedStyles = document.createElement('style');
enhancedStyles.textContent = `
    @keyframes sparkleFloat {
        0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
        }
        20% {
            opacity: 1;
            transform: scale(1) rotate(90deg);
        }
        100% {
            opacity: 0;
            transform: scale(0.3) rotate(180deg) translateY(-30px);
        }
    }
    
    @keyframes rippleExpand {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .notification-icon {
        font-size: 18px;
        flex-shrink: 0;
    }
    
    .notification-message {
        flex: 1;
        line-height: 1.4;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        padding: 4px;
        border-radius: 50%;
        opacity: 0.8;
        transition: opacity 0.2s ease;
    }
    
    .notification-close:hover {
        opacity: 1;
    }
`;
document.head.appendChild(enhancedStyles);

console.log('🚀 I-Pro Solutions website loaded with fixed navigation, click animations & scroll sparkles!');
console.log('✨ All features working: darker backgrounds, black text on turquoise, click effects, scroll sparkles');