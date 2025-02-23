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
