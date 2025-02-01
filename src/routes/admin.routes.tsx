import AdminDashboard from "@/pages/admin/AdminDashboard";



export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />,
    },
    // {
    //     name: 'Academic Management',
    //     children: [
    //         {
    //             name: 'Create A. Semester',
    //             path: 'create-academic-semester',
    //             element: <CreateAcademicSemester />,
    //         },
    //         {
    //             name: 'Academic Semester',
    //             path: 'academic-semester',
    //             element: <AcademicSemester />,
    //         },
    //         {
    //             name: 'Create A. Faculty',
    //             path: 'create-academic-faculty',
    //             element: <CreateAcademicFaculty />,
    //         },
    //         {
    //             name: 'Academic Faculty',
    //             path: 'academic-faculty',
    //             element: <AcademicFaculty />,
    //         },
    //         {
    //             name: 'Create A. Department',
    //             path: 'create-academic-department',
    //             element: <CreateAcademicDepartment />,
    //         },
    //         {
    //             name: 'Academic Department',
    //             path: 'academic-department',
    //             element: <AcademicDepartment />,
    //         },
    //     ],
    // },
    // {
    //     name: 'User Management',
    //     children: [
    //         {
    //             name: 'Create Admin',
    //             path: 'create-admin',
    //             element: <CreateAdmin />,
    //         },
    //         {
    //             name: 'Create Faculty',
    //             path: 'create-faculty',
    //             element: <CreateFaculty />,
    //         },
    //         {
    //             name: 'Create Student',
    //             path: 'create-student',
    //             element: <CreateStudent />,
    //         },
    //         {
    //             name: 'Students',
    //             path: 'students-data',
    //             element: <StudentData />,
    //         },
    //         {
    //             path: 'student-data/:studentId',
    //             element: <StudentDetails />,
    //         },
    //     ],
    // },
    // {
    //     name: 'Course Management',
    //     children: [
    //         {
    //             name: 'Semester Registration',
    //             path: 'semester-registration',
    //             element: <SemesterRegistration />,
    //         },
    //         {
    //             name: 'Registered Semesters',
    //             path: 'registered-semesters',
    //             element: <RegisteredSemesters />,
    //         },
    //         {
    //             name: 'Create Course',
    //             path: 'create-course',
    //             element: <CreateCourse />,
    //         },
    //         {
    //             name: 'Courses',
    //             path: 'courses',
    //             element: <Courses />,
    //         },
    //         {
    //             name: 'Offer Course',
    //             path: 'offer-course',
    //             element: <OfferCourse />,
    //         },
    //         {
    //             name: 'Offered Courses',
    //             path: 'offered-courses',
    //             element: <OfferedCourses />,
    //         },
    //     ],
    // },
];
