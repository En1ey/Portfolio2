// app/page.js
'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './page.module.css';
import Link from 'next/link';


// Helper component for the Navigation Bar
const Navbar = () => {
    // Note: Link component from 'next/link' is used for client-side routing
    return (
        <nav className="nav">
            <ul>
                <li><Link href="#profile">Profile</Link></li>
                <li><Link href="#projects">Projects</Link></li>
                <li><Link href="#credentials">Credentials</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

// Helper component for the Back to Top button
const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            id="backToTop"
            className={isVisible ? 'visible' : ''}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            ↑
        </button>
    );
};

// Main Page Component
export default function Home() {
    const projectData = [
        { type: "Web Application", title: "EcotechRecycle", description: "A project I developed during my academic year, aimed at providing easy access to information, locating recycling centers, and using technology to foster connections within the recycling community.", imgSrc: "/img/project3.png" },
        { type: "Product Mock-up", title: "Ideas to Products", description: "I can turn your ideas into products or anything else you envision. Here are some samples that demonstrate what I can create in a short amount of time. These mock-ups highlight my capabilities and the quality of work I deliver.", imgSrc: "/img/mockups.png" },
        { type: "Logo & Poster", title: "Wedding and Web Application", description: "KiosCorp: An inventory management system. CookingIna: A food recipe application. John&Jade: A wedding logo. Each design is carefully crafted to reflect its core purpose. The idea behind these logos is that, with just a glance, you can easily identify what each represents, showcasing a strong connection to its intended function.", imgSrc: "/img/poster.png" },
        { type: "Brochure Design", title: "Brochure of Chile", description: "<p>This brochure highlights the country of Chile, covering its climate, traditions, culture, and cuisine. It presents key information in a way that&apos;s both informative and engaging.</p>", imgSrc: "/img/chile.png" },
        { type: "Desktop/Web Application", title: "KiosCorp", description: "KiosCorp is an in-house system used by Universal Auto Supply and Bolt Center to improve customer service and inventory work. It tracks stock in real time, reduces errors in recording parts and prices, and speeds up customer transactions. It helps staff locate items faster and supports a smoother checkout process. It gives the business faster service, fewer mistakes, and stronger control over inventory.", imgSrc: "/img/kioskcorp.png" },
    ];
    
    const [slideIndex, setSlideIndex] = useState(1);
    const slideIntervalRef = useRef(null);

    // Slideshow logic combined into a single function
    const showSlide = (n) => {
        let newIndex = n;
        if (newIndex > projectData.length) {
            newIndex = 1;
        }
        if (newIndex < 1) {
            newIndex = projectData.length;
        }
        setSlideIndex(newIndex);
    };

    const changeSlide = (n) => {
        showSlide(slideIndex + n);
    };

    const currentSlide = (n) => {
        showSlide(n);
    };

    // Auto-advance slideshow logic using useEffect
    useEffect(() => {
        const startAutoSlide = () => {
            slideIntervalRef.current = setInterval(() => {
                setSlideIndex(prevIndex => {
                    let newIndex = prevIndex + 1;
                    if (newIndex > projectData.length) {
                        newIndex = 1;
                    }
                    return newIndex;
                });
            }, 5000);
        };

        startAutoSlide();

        // Cleanup function to clear the interval on unmount
        return () => {
            if (slideIntervalRef.current) {
                clearInterval(slideIntervalRef.current);
            }
        };
    }, [projectData.length]); 

    return (
        <>
            <Navbar />
            
            <section id="profile" className={`section ${styles.profile}`}>
                <div className="container">
                    <div className={styles.profileContent}>
                        <div className={styles.profileImage}>
                            <img src="/img/042A3734.png" alt="Profile Picture" />
                        </div>
                        <div className={styles.profileText}>
                            <h1>John Henley Llamos</h1>
                            <p>I&apos;m creative professional specializing in web design, product mockups, and video editing.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="section">
                <div className="container">
                    <h2>Projects</h2>
                    <div className={styles.slideshowContainer}>
                        {projectData.map((project, index) => (
                            <div key={index} className={`${styles.slide} ${slideIndex === index + 1 ? styles.active : ''}`}>
                                <span className={styles.projectType}>{project.type}</span>
                                <div className={styles.slideImage}>
                                    <img src={project.imgSrc} alt={`Project ${index + 1}`} />
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        ))}

                        <button className={`${styles.navButton} ${styles.prev}`} onClick={() => changeSlide(-1)}>❮</button>
                        <button className={`${styles.navButton} ${styles.next}`} onClick={() => changeSlide(1)}>❯</button>
                    </div>
                    <div className={styles.dots}>
                        {projectData.map((_, index) => (
                            <span 
                                key={index}
                                className={`${styles.dot} ${slideIndex === index + 1 ? styles.active : ''}`} 
                                onClick={() => currentSlide(index + 1)}
                            ></span>
                        ))}
                    </div>
                </div>
            </section>

            <section id="tools" className="section">
    <div className="container">
        <h2>Tools</h2>

        <div className={styles.toolsGrid}>
            <div className={styles.toolCard}>
                <div className={styles.toolLogo}>
                    <img src="/img/2.png" alt="Canva" />
                </div>
                <h3>Canva</h3>
                <p>Used for layout design, mockups, marketing materials, and presentations.</p>
            </div>

            <div className={styles.toolCard}>
                <div className={styles.toolLogo}>
                    <img src="/img/2.png" alt="Canva" />
                </div>
                <h3>Capcut</h3>
                <p>Used for layout design, mockups, marketing materials, and presentations.</p>
            </div>

            <div className={styles.toolCard}>
                <div className={styles.toolLogo}>
                    <img src="/img/1.png" alt="Figma" />
                </div>
                <h3>Figma</h3>
                <p>Used for UI design, prototyping, and collaborative system planning.</p>
            </div>

            <div className={styles.toolCard}>
                <div className={styles.toolLogo}>
                    <img src="/img/3.png" alt="Next.js" />
                </div>
                <h3>Next.js</h3>
                <p>Used for building fast and scalable web applications.</p>
            </div>

            <div className={styles.toolCard}>
                <div className={styles.toolLogo}>
                    <img src="/img/7.png" alt="Adobe Apps" />
                </div>
                <h3>Adobe Photoshop</h3>
                <p>Photoshop, Illustrator, and Premiere Pro for creative work.</p>
            </div>
        </div>
    </div>
</section>  

            <section id="credentials" className="section">
                <div className="container">
                    <h2>Credentials</h2>
                    <div className={styles.credentialsGrid}>
                        <div className={styles.credentialCard}>
                            <h3>Bachelor of Science in Information Technology</h3>
                            <p className={styles.year}>2021 - 2025</p>
                            <p>University pf Science and Technology of Southern Philippines</p>
                            <p>Focused on web development, UI/UX design, and digital media production.</p>
                        </div>
                        <div className={styles.credentialCard}>
                            <h3>Certificate for SinaTech: Technical Architecture & UI/UX Design</h3>
                            <h3>Certificate for SinaTech: Design Thinking & Introduction to SDGs</h3>
                            <p className={styles.year}>2023</p>
                            <p>Certification</p>
                            <p>These certificates show that you are capable of designing effective, user-friendly digital solutions while considering both technical structure and social impact. They highlight your skills in system architecture, UI/UX design, creative problem-solving, and awareness of global sustainability goals, making you a well-rounded professional who can bridge technology, design, and responsible innovation.</p>
                        </div>
                        <div className={styles.credentialCard}>
                            <h3>CITC Digital Solution Showcase</h3>
                            <p className={styles.year}>2024</p>
                            <p>Participation Certificate</p>
                            <p>An event where participants present their digital projects, applications, or innovations. It highlights practical skills in technology, design, and problem-solving, allowing creators to demonstrate their solutions to real-world challenges, network with peers and industry professionals, and gain recognition for their work.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="section">
                <div className="container">
                    <h2>Contacts</h2>
                    <div className={styles.contactGrid}>
                        <div className={styles.contactCard}>
                            <div className={styles.contactIcon}>📱</div>
                            <h3>Phone</h3>
                            <Link href="https://wa.me/qr/FSAYOBPCSI4KD1">+63 965 876 1741</Link>
                        </div>

                        <div className={styles.contactCard}>
                            <div className={styles.contactIcon}>✉️</div>
                            <h3>Email</h3>
                            <Link href="mailto:llamosjohnhenleyseno@gmail.com">llamosjohnhenleyseno@gmail.com</Link>
                        </div>

                        <div className={styles.contactCard}>
                            <div className={styles.contactIcon}>💼</div>
                            <h3>LinkedIn</h3>
                            <Link href="https://www.linkedin.com/in/john-henley-llamos-93667a336/" target="_blank">lhttps://www.linkedin.com/in/john-henley-llamos-93667a336/</Link>
                        </div>
                    </div>
                </div>
            </section>

            <BackToTopButton />

            <footer className="footer">
                <p>2025 John Henley Llamos. All rights reserved.</p>
            </footer>
        </>
    );
}