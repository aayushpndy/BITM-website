

 /* ============================================
           GLOBAL VARIABLES
           ============================================ */
        let currentCourse = '';
        let currentSemester = 0;




function toggleTheme() {
            const body = document.body;
            const navbar = document.getElementById('navbar');
            const moonIcon = document.getElementById('moonIcon');
            const sunIcon = document.getElementById('sunIcon');
            
            if (body.classList.contains('light-mode')) {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                navbar.classList.remove('light-mode');
                navbar.classList.add('dark-mode');
                moonIcon.classList.add('hidden');
                sunIcon.classList.remove('hidden');
            } else {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                navbar.classList.remove('dark-mode');
                navbar.classList.add('light-mode');
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
            }
        }

        // Page Navigation
        function showPage(pageName) {
            const pages = ['homePage', 'coursesPage', 'aboutPage', 'contactPage', 'semesterPage', 'documentPage'];
            
            pages.forEach(function(page)  {
                document.getElementById(page).classList.add('hidden');
            });
            
            document.getElementById(pageName + 'Page').classList.remove('hidden');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

       

            /* ============================================
           DOCUMENT LIBRARY
           Store all PDFs, images, and documents here
           Format: course_semester_subject_resourceType
           ============================================ */
        const documentLibrary = {
            // ============ BCA SEMESTER 1 ============
            'bca_1_Computer Fundamentals_notes': 'path/to/your/pdf/bca_s1_computer_fundamentals_notes.pdf',
            'bca_1_Computer Fundamentals_questions': 'path/to/your/pdf/bca_s1_computer_fundamentals_questions.pdf',
            'bca_1_Computer Fundamentals_syllabus': 'path/to/your/pdf/bca_s1_computer_fundamentals_syllabus.pdf',
            
            'bca_1_Programming in C_notes': 'path/to/your/pdf/bca_s1_c_programming_notes.pdf',
            'bca_1_Programming in C_questions': 'path/to/your/pdf/bca_s1_c_programming_questions.pdf',
            'bca_1_Programming in C_syllabus': 'path/to/your/pdf/bca_s1_c_programming_syllabus.pdf',
            
            'bca_1_Mathematics I_notes': 'path/to/your/pdf/bca_s1_math1_notes.pdf',
            'bca_1_Mathematics I_questions': 'path/to/your/pdf/bca_s1_math1_questions.pdf',
            'bca_1_Mathematics I_syllabus': 'path/to/your/pdf/bca_s1_math1_syllabus.pdf',

            // ============ BCA SEMESTER 2 ============
            'bca_2_Data Structures_notes': 'path/to/your/pdf/bca_s2_data_structures_notes.pdf',
            'bca_2_Data Structures_questions': 'path/to/your/pdf/bca_s2_data_structures_questions.pdf',
            'bca_2_Data Structures_syllabus': 'path/to/your/pdf/bca_s2_data_structures_syllabus.pdf',

            // ============ BITM SEMESTER 1 ============
            'bitm_1_Introduction to IT Management_notes': 'path/to/your/pdf/bitm_s1_it_management_notes.pdf',
            'bitm_1_Introduction to IT Management_questions': 'path/to/your/pdf/bitm_s1_it_management_questions.pdf',
            'bitm_1_Introduction to IT Management_syllabus': 'path/to/your/pdf/bitm_s1_it_management_syllabus.pdf',
            
            'bitm_1_Business Communication_notes': 'path/to/your/pdf/bitm_s1_business_comm_notes.pdf',
            'bitm_1_Business Communication_questions': 'path/to/your/pdf/bitm_s1_business_comm_questions.pdf',
            'bitm_1_Business Communication_syllabus': 'path/to/your/pdf/bitm_s1_business_comm_syllabus.pdf',

            // ============ BITM SEMESTER 2 ============
            'bitm_2_Database Management Systems_notes': 'path/to/your/pdf/bitm_s2_dbms_notes.pdf',
            'bitm_2_Database Management Systems_questions': 'path/to/your/pdf/bitm_s2_dbms_questions.pdf',
            'bitm_2_Database Management Systems_syllabus': 'path/to/your/pdf/bitm_s2_dbms_syllabus.pdf',

             // ============ BITM SEMESTER 3 ============
            'bitm_3_Network Administration_notes': 'path/to/your/pdf/bitm_s2_dbms_notes.pdf',
            'bitm_3_Network Administration_questions': 'path/to/your/pdf/bitm_s2_dbms_questions.pdf',
            'bitm_3_Network Administration_syllabus': 'C:\Users\lenovo\Desktop\projects\website1\BIM 3rd Semester Syllabus 2023.pdf',

            // ADD MORE DOCUMENTS HERE FOR ALL SUBJECTS
            // Copy the pattern above for each subject in each semester
            // Replace 'path/to/your/pdf/filename.pdf' with actual file paths
        };


        // Semester data
        const semesterData = {
            bca: {
                name: 'BCA - Bachelor of Computer Applications',
                semesters: {
                    1: ['Computer Fundamentals', 'Programming in C', 'Mathematics I', 'Digital Electronics', 'English Communication'],
                    2: ['Data Structures', 'Programming in C++', 'Mathematics II', 'Computer Organization', 'Environmental Studies'],
                    3: ['Database Management Systems', 'Object-Oriented Programming (Java)', 'Operating Systems', 'Software Engineering', 'Discrete Mathematics'],
                    4: ['Web Technologies (HTML, CSS, JS)', 'Python Programming', 'Computer Networks', 'Theory of Computation', 'Numerical Methods'],
                    5: ['Linux & Shell Programming', 'Computer Graphics', 'PHP & MySQL', 'Data Mining', 'Compiler Design'],
                    6: ['Artificial Intelligence', 'Mobile Application Development', 'Cloud Computing', 'Information Security', 'Project Work I'],
                    7: ['Machine Learning', 'Big Data Analytics', 'Blockchain Technology', 'DevOps', 'Project Work II'],
                    8: ['Deep Learning', 'Internet of Things (IoT)', 'Cyber Security', 'Quantum Computing', 'Final Project & Internship']
                }
            },
            bitm: {
                name: 'BITM - Bachelor of Information Technology Management',
                semesters: {
                    1: ['Introduction to IT Management', 'Foundation OF Business Management', 'Mathematics ', 'C Programming '],
                    2: ['Digital logic', 'Descrete Structure', 'Business Communication', 'Object-Oriented Programming with JAVA', 'Organizational Behavior and HRM'],
                    3: ['Data Structures & Algorithms', 'Network Administration', 'Financial Management', 'Software Engineering', 'IT Project Management'],
                    4: ['System Analysis & Design', 'E-Commerce', 'Enterprise Resource Planning', 'Mobile Application Development', 'Business Intelligence'],
                    5: ['Cloud Computing', 'IT Security Management', 'Strategic Management', 'Data Analytics', 'Digital Marketing'],
                    6: ['Artificial Intelligence', 'IT Governance', 'Supply Chain Management', 'Big Data Technologies', 'Innovation Management'],
                    7: ['Blockchain Technology', 'IT Service Management', 'Business Process Management', 'IoT Applications', 'Capstone Project I'],
                    8: ['Digital Transformation', 'IT Audit & Compliance', 'Change Management', 'Emerging Technologies', 'Capstone Project II']
                }
            }
        };

        // Show Semester Page
        function showSemesterPage(course, semester) {

            // Store current course and semester for later use
            currentCourse = course;
            currentSemester = semester;
            const semesterTitle = document.getElementById('semesterTitle');
            const semesterCourse = document.getElementById('semesterCourse');
            const semesterHeader = document.getElementById('semesterHeader');
            const subjectsContainer = document.getElementById('subjectsContainer');

           


              // Update header information
            semesterTitle.textContent = 'Semester ' + semester;
            semesterCourse.textContent = semesterData[course].name;
            
            // Update header styling based on course
            if (course === 'bitm') {
                semesterHeader.classList.add('bitm');
            } else {
                semesterHeader.classList.remove('bitm');
            }

            // Load subjects
            const subjects = semesterData[course].semesters[semester];
            subjectsContainer.innerHTML = '';


             // Create a card for each subject
            subjects.forEach(function(subject) {
                const subjectCard = document.createElement('div');
                subjectCard.className = 'subject-card ' + course;
                subjectCard.innerHTML = '<h3 class="subject-name">' + subject + '</h3>' +
                    '<div class="resource-buttons">' +
                        '<button class="resource-btn notes">' +
                            '<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>' +
                            '</svg>' +
                            'Notes' +
                        '</button>' +
                        '<button class="resource-btn questions">' +
                            '<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>' +
                            '</svg>' +
                            'Question Papers' +
                        '</button>' +
                        '<button class="resource-btn syllabus">' +
                            '<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>' +
                            '</svg>' +
                            'Syllabus' +
                        '</button>' +
                    '</div>';
                subjectsContainer.appendChild(subjectCard);
            });

                 /* ✅ Add event listeners here — after cards are created */
    document.querySelectorAll('.resource-btn').forEach(function(button) {
        button.addEventListener('click', function() {
            const subject = this.closest('.subject-card').querySelector('.subject-name').textContent.trim();
            const resourceType = this.classList.contains('notes')
                ? 'notes'
                : this.classList.contains('questions')
                ? 'questions'
                : 'syllabus';
            showDocument(currentCourse, currentSemester, subject, resourceType);
        });
    });

            

            // Show semester page
            showPage('semester');
        }


        /* ============================================
           SHOW DOCUMENT FUNCTION
           Displays PDF or image when resource button is clicked
           ============================================ */
        function showDocument(course, semester, subject, resourceType) {
            // Update page title and subtitle
            document.getElementById('documentTitle').textContent = subject;
            document.getElementById('documentSubtitle').textContent = 
                semesterData[course].name + ' - Semester ' + semester + ' - ' + 
                resourceType.charAt(0).toUpperCase() + resourceType.slice(1);

            // Create document key to look up in library
            const documentKey = course + '_' + semester + '_' + subject + '_' + resourceType;
            const documentPath = documentLibrary[documentKey];

            const documentContainer = document.getElementById('documentContainer');
            documentContainer.innerHTML = '';

            if (documentPath) {
                // Check if file is an image or PDF
                const fileExtension = documentPath.split('.').pop().toLowerCase();
                
                if (fileExtension === 'pdf') {
                    // Display PDF
                    documentContainer.innerHTML = 
                        '<embed src="' + documentPath + '" type="application/pdf" class="pdf-embed">';
                } else if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(fileExtension)) {
                    // Display Image
                    documentContainer.innerHTML = 
                        '<img src="' + documentPath + '" alt="' + subject + ' ' + resourceType + '" class="image-display">';
                } else {
                    // Display download link for other file types
                    documentContainer.innerHTML = 
                        '<div class="no-document">' +
                            '<svg class="no-document-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>' +
                            '</svg>' +
                            '<p class="no-document-text">Document Available for Download</p>' +
                            '<a href="' + documentPath + '" download class="explore-btn" style="margin-top: 1rem;">Download File</a>' +
                        '</div>';
                }
            } else {
                // No document found - show message
                documentContainer.innerHTML = 
                    '<div class="no-document">' +
                        '<svg class="no-document-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>' +
                        '</svg>' +
                        '<p class="no-document-text">Document Not Available</p>' +
                        '<p class="no-document-subtitle">This document will be uploaded soon. Please check back later.</p>' +
                    '</div>';
            }

            // Show document page
            showPage('document');
        }

        /* ============================================
           GO BACK TO SEMESTER FUNCTION
           Returns from document viewer to semester page
           ============================================ */
        function goBackToSemester() {
            showSemesterPage(currentCourse, currentSemester);
        }


        // Update visitor count (simulated)
        function updateVisitorCount() {
            const today = Math.floor(Math.random() * 100) + 50;
            const month = Math.floor(Math.random() * 3000) + 1500;
            const total = 15234;

            document.getElementById('todayCount').textContent = today;
            document.getElementById('monthCount').textContent = month;
            document.getElementById('totalCount').textContent = total;
        }

         /* ============================================
           HANDLE CONTACT FORM SUBMISSION
           Processes feedback form data
           ============================================ */
        function handleFormSubmit(event) {
            // Prevent default form submission
            event.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Here you would typically send the data to a server
            // For now, we'll just log it and show a success message
            console.log('Form submitted:', { name, email, message });

            // Show success message
            const successMessage = document.getElementById('successMessage');
            successMessage.classList.add('show');

            // Reset form
            document.getElementById('contactForm').reset();

            // Hide success message after 5 seconds
            setTimeout(function() {
                successMessage.classList.remove('show');
            }, 5000);

            // Scroll to top to show success message
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Initialize on page load
        window.addEventListener('DOMContentLoaded', function() {
            updateVisitorCount();
        });