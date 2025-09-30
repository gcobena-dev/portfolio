import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          "home": "Home",
          "skills": "Skills",
          "experience": "Experience",
          "projects": "Projects",
          "contact": "Contact",
          "send": "Send",
          "theme": "Switch Theme",
          "language": "Language",
          "education": "Education",
          "summary": `Experienced Software Developer with 8+ of expertise in developing high-quality mobile and web applications. 
          I thrive in collaborative environments, emphasizing teamwork and fostering positive work environments. 
          Proficient in full-stack development and skilled in various technologies such as Flutter, Python, 
          Javascript, Java, and .NET, I am dedicated to continuously enhancing products and driving innovation. 
          My passion lies in leveraging technology to contribute to the advancement of diverse industries and make 
          a positive impact on the world.`,
          "download_cv": "Download CV",

          //Education
          "education_title": "Education & Certifications",
          "certifications": "Certifications",
          "degree_msc": "MSc. in Management Information Systems",
          "degree_eng": "BSc. in Systems and Computer Engineering",
          "cert_deutsch": "German A1",
          "cert_code_challenge": "Tech Code Challenge",
          "cert_cross_culture": "Cross-Cultural Course",
          "cert_soft_skills": "Soft Skills Training",
          "cert_it_prep": "IT Professional Preparation",
          "cert_professional_dev": "Professional Profile Development",

          //Projects
          "client_projects": "Client Projects",
          "personal_projects": "Personal Projects",
          "projects_note": "Featured projects developed for clients under confidentiality agreements",
          "personal_projects_note": "Open source and personal projects available for exploration",
          "view_code": "View Code",
          "view_demo": "View Demo",
          "view_api": "View API",

          "project_title_1": "AI-LMS Platform",
          "project_title_2": "Forms Core Backend",
          "project_title_3": "AI Chat Library",
          "project_title_4": "Donation & Social Network Platform",
          "project_title_5": "AI Content Creation Platform",
          "project_title_6": "Personnel Management System",

          "project_category_mobile": "Mobile & Web Development",
          "project_category_ai": "AI & Cloud Solutions",
          "project_category_edutech": "AI & EdTech Solutions",
          "project_category_backend": "Backend Solutions",
          "project_category_enterprise": "Enterprise Solutions",
          "project_category_agritech": "AgriTech Solutions",

          "project_ailms_desc": "AI-powered educational content generation platform with RAG capabilities. Creates comprehensive course materials, quizzes, and assignments using OpenAI and vector search with Pinecone. Includes multi-format export to Canvas, Moodle, and other LMS platforms.",
          "project_forms_desc": "Core backend library for forms management with AI chat capabilities. Provides authentication engines, multi-provider support, and comprehensive API for form-based applications. Built with Flask and PostgreSQL for scalable enterprise solutions.",
          "project_sentellent_core_desc": "Core application infrastructure for AI-powered content generation and processing. Implements advanced AI/ML algorithms for intelligent automation and cloud-based workflows.",
          "project_easy_donate_desc": "Donation platform that also functions as a social network, enabling automated content creation and community engagement.",
          "project_sentellent_desc": "Platform for automated social media content creation using LLM technology and advanced AI algorithms.",
          "project_perseo_desc": "Personnel Management Platform for Marine Infantry that enables real-time information access on task assignments and deployments.",

          "personal_project_title_1": "LecheFácil - Frontend",
          "personal_project_title_2": "LecheFácil - Backend",
          "personal_project_lechefacil_frontend_desc": "Comprehensive dairy farm management web and mobile application for tracking milk production, animal health, and business operations. Built with offline capabilities using Capacitor.",
          "personal_project_lechefacil_backend_desc": "Multi-tenant REST API backend for dairy farm management system. Provides authentication, data persistence, and business logic for managing farms, animals, production records, and analytics.",

          //Experience
          "company_ioet": "IOET, Nevada (United States)",
          "role_ioet": "Full-Stack Developer",
          "period_ioet": "November 2021 – Present (2 years 10 months)",
          "activities_ioet": [
            "Plan, lead, and oversee the design, web, mobile, and back-end development for a micro-financing company.",
            "Implemented new features and performed unit testing using Flutter, Python, GitHub Actions, AWS, Clean Architecture, LLM, AWS Lambdas, Terraform, Docker, Pinecone.",
            "Developed and deployed a donation platform that also functions as a social network (easy-donate).",
            "Developed and deployed a platform that enables automated content creation for social media using LLM (sentellent).",
            "Improved workflows by implementing DevOps and CI/CD, reducing processing times from approximately 7 hours to 35 minutes.",
            "Developed a platform to enhance recruitment processes using ChatGPT, LLM, Pinecone, and Python.",
            "Optimized the company’s cloud infrastructure, resulting in a 23% cost savings."
          ],
          "skills_ioet": ["Flutter", "Python", "GitHub Actions", "AWS", "CI/CD", "Terraform", "Docker", "Pinecone"],

          "company_banco": "BANCO DEL PACÍFICO, Guayaquil (Ecuador)",
          "role_banco": "Full-Stack Developer",
          "period_banco": "March 2019 – August 2021 (2 years 5 months)",
          "activities_banco": [
            "Developed the functionality for updating customer data through the bank’s web platform, reducing customer service congestion by 7%.",
            "Implemented an investment account opening option through the web platform, generating $13 million in revenue in the first half of 2021.",
            "Produced efficient code for front-end and back-end development. Implemented unit tests, debugged issues, and introduced a new module for the mobile banking app, allowing users to schedule appointments with banking service representatives.",
            "Contributed to the development of a loan application for the 'Reactivar Ecuador' credit program, which allocated $410 million to support small businesses during the pandemic."
          ],
          "skills_banco": ["JavaScript", "Unit Testing", "React"],

          "company_navy": "ECUADORIAN NAVY, Guayaquil (Ecuador)",
          "role_navy": "Junior Full-Stack Developer",
          "period_navy": "October 2015 – June 2018 (2 years 9 months)",
          "activities_navy": [
            "Developed the 'Perseo' Platform for Marine Infantry Personnel Management – Ecuadorian Armed Forces, enabling real-time information access on task assignments, deployments, and personnel allocation for mission-specific workgroups.",
            "Contributed to improving efficiency and effectiveness in military talent management.",
            "Led the front-end and back-end development of the Vehicle Management Information System for the Marine Infantry Battalion of Esmeraldas.",
            "Created a platform for fleet management and tracking, providing better control and accurate scheduling of preventive and corrective maintenance.",
            "Enhanced the vehicle management capabilities of the Marine Battalion, resulting in improved operational efficiency and resource utilization."
          ],
          "skills_navy": [".NET", "HTML", "CSS", "JavaScript", "SQL", "MySQL", "PHP", "GIS"]
        }
      },
      es: {
        translation: {
          "home": "Inicio",
          "skills": "Habilidades",
          "experience": "Experiencia",
          "projects": "Proyectos",
          "contact": "Contacto",
          "send": "Enviar",
          "theme": "Cambiar Tema",
          "language": "Idioma",
          "education": "Educación",
          "summary": `Desarrollador de Software con más de 8 años de experiencia en el desarrollo de aplicaciones 
          móviles y web de alta calidad. Me desenvuelvo bien en entornos colaborativos, fomentando el trabajo
           en equipo y creando ambientes de trabajo positivos. Con experiencia en desarrollo full-stack y 
           habilidades en diversas tecnologías como Flutter, Python, Javascript, Java y .NET, estoy comprometido 
           con la mejora continua de productos y la innovación. Mi pasión radica en aprovechar la tecnología 
           para contribuir al avance de diversas industrias y generar un impacto positivo en el mundo.`,
          "download_cv": "Descargar CV",

          //Education
          "education_title": "Educación y Certificaciones",
          "certifications": "Certificaciones",
          "degree_msc": "MSc. en Sistemas de Información de Gestión",
          "degree_eng": "Ingeniería en Sistemas y Computación",
          "cert_deutsch": "Alemán A1",
          "cert_code_challenge": "Tech Code Challenge",
          "cert_cross_culture": "Curso Intercultural",
          "cert_soft_skills": "Capacitación en Habilidades Blandas",
          "cert_it_prep": "Preparación en IT",
          "cert_professional_dev": "Desarrollo y Gestión del Perfil Profesional",

          //Projects
          "client_projects": "Proyectos de Clientes",
          "personal_projects": "Proyectos Personales",
          "projects_note": "Proyectos destacados desarrollados para clientes bajo acuerdos de confidencialidad",
          "personal_projects_note": "Proyectos personales y de código abierto disponibles para exploración",
          "view_code": "Ver Código",
          "view_demo": "Ver Demo",
          "view_api": "Ver API",

          "project_title_1": "Plataforma AI-LMS",
          "project_title_2": "Forms Core Backend",
          "project_title_3": "Librería de Chat con IA",
          "project_title_4": "Plataforma de Donación y Red Social",
          "project_title_5": "Plataforma de Creación de Contenido con IA",
          "project_title_6": "Sistema de Gestión de Personal",

          "project_category_mobile": "Desarrollo Móvil y Web",
          "project_category_ai": "Soluciones de IA y Cloud",
          "project_category_edutech": "Soluciones de IA y EdTech",
          "project_category_backend": "Soluciones Backend",
          "project_category_enterprise": "Soluciones Empresariales",
          "project_category_agritech": "Soluciones AgriTech",

          "project_ailms_desc": "Plataforma de generación de contenido educativo con capacidades RAG. Crea materiales de cursos completos, quizzes y tareas usando OpenAI y búsqueda vectorial con Pinecone. Incluye exportación multi-formato a Canvas, Moodle y otras plataformas LMS.",
          "project_forms_desc": "Librería backend core para gestión de formularios con capacidades de chat IA. Proporciona motores de autenticación, soporte multi-proveedor y API completa para aplicaciones basadas en formularios. Construido con Flask y PostgreSQL para soluciones empresariales escalables.",
          "project_sentellent_core_desc": "Infraestructura de aplicación core para generación y procesamiento de contenido con IA. Implementa algoritmos avanzados de IA/ML para automatización inteligente y flujos de trabajo basados en la nube.",
          "project_easy_donate_desc": "Plataforma de donación que también funciona como red social, permitiendo la creación automatizada de contenido y participación comunitaria.",
          "project_sentellent_desc": "Plataforma para creación automática de contenido en redes sociales usando tecnología LLM y algoritmos avanzados de IA.",
          "project_perseo_desc": "Plataforma de Gestión de Personal para Infantería de Marina que permite acceso en tiempo real a asignaciones de tareas y despliegues.",

          "personal_project_title_1": "LecheFácil - Frontend",
          "personal_project_title_2": "LecheFácil - Backend",
          "personal_project_lechefacil_frontend_desc": "Aplicación web y móvil integral para gestión de fincas lecheras. Rastrea producción de leche, salud animal y operaciones comerciales. Construida con capacidades offline usando Capacitor.",
          "personal_project_lechefacil_backend_desc": "API REST multi-tenant backend para sistema de gestión de fincas lecheras. Proporciona autenticación, persistencia de datos y lógica de negocio para gestionar fincas, animales, registros de producción y análisis.",

          //Experience
          "company_ioet": "IOET, Nevada (Estados Unidos)",
          "role_ioet": "Desarrollador Full-Stack",
          "period_ioet": "Noviembre de 2021 – Presente (2 años 10 meses)",
          "activities_ioet": [
            "Planifico, lidero y superviso el diseño, desarrollo web, móvil y back-end para una empresa de micro-financiación.",
            "He implementado nuevas funcionalidades realizando pruebas unitarias usando Flutter, Python, GitHub Actions, AWS, Clean Architecture, LLM, AWS Lambdas, Terraform, Docker, Pinecone.",
            "Desarrollé e implementé una plataforma de donación que también funciona como red social (easy-donate).",
            "Desarrollé e implementé una plataforma que permite la creación automática de contenido en redes sociales mediante LLM (sentellent).",
            "Mejoré los flujos de trabajo mediante la implementación de DevOps y CI/CD, reduciendo los tiempos de procesamiento de aproximadamente 7 horas a 35 minutos.",
            "Desarrollé una plataforma que permite la mejora en procesos de selección de personal usando ChatGPT, LLM, Pinecone y Python.",
            "Mejoré la infraestructura de nube de la empresa, resultando en un ahorro de costos del 23%."
          ],
          "skills_ioet": ["Flutter", "Python", "GitHub Actions", "AWS", "CI/CD", "Terraform", "Docker", "Pinecone"],

          "company_banco": "BANCO DEL PACÍFICO, Guayaquil (Ecuador)",
          "role_banco": "Desarrollador Full-Stack",
          "period_banco": "Marzo de 2019 – Agosto de 2021 (2 años 5 meses)",
          "activities_banco": [
            "Desarrollé la funcionalidad de actualización de datos a través de la plataforma web del banco, ayudando a aliviar la congestión del servicio al cliente en un 7%.",
            "Implementé una opción de apertura de inversiones a través de la plataforma web, generando ingresos por $13 millones en el primer semestre de 2021.",
            "Produje código eficiente para el desarrollo front-end y back-end. Implementé pruebas unitarias, depuré problemas e implementé un nuevo módulo para la aplicación de banca móvil, que permite a los usuarios programar citas con representantes de servicios bancarios.",
            "Contribuí al desarrollo de una solicitud para el crédito 'Reactivar Ecuador', para el cual el gobierno destinó durante la pandemia $410 millones para apoyar a las pequeñas empresas."
          ],
          "skills_banco": ["JavaScript", "Unit Testing", "React"],

          "company_navy": "ARMADA DEL ECUADOR, Guayaquil (Ecuador)",
          "role_navy": "Desarrollador Junior Full-Stack",
          "period_navy": "Octubre de 2015 – Junio de 2018 (2 años 9 meses)",
          "activities_navy": [
            "Desarrollé la Plataforma 'Perseo' para la Gestión de Personal de la Infantería de Marina – Fuerzas Armadas del Ecuador, que permite obtener información en tiempo real sobre asignaciones de tareas, despliegues y asignación de personal para grupos de trabajo de misiones específicas.",
            "Contribuí a mejorar la eficiencia y eficacia de la gestión del talento dentro de las fuerzas armadas.",
            "Lideré el desarrollo front-end y back-end del Sistema de Información para la Gestión de Vehículos del Batallón de Infantería de Marina de Esmeraldas.",
            "Creé una plataforma para la gestión y seguimiento de la flota de vehículos, proporcionando un mejor control y programación precisa del mantenimiento preventivo y correctivo.",
            "Se mejoraron las capacidades de gestión de vehículos del batallón de marines, lo que resultó en una mejor eficiencia operativa y utilización de recursos."
          ],
          "skills_navy": [".NET", "HTML", "CSS", "JavaScript", "SQL", "MySQL", "PHP", "GIS"]
        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
