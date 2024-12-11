# JobHunt-MERN-JobPortal

JobHunt is a full-stack job portal application built using ReactJS, Node.js, Express, and MongoDB. The platform provides a seamless experience for users to register, sign in, browse job listings, apply for jobs, and manage their profiles. Users can search for jobs using various filters, view detailed job descriptions, and track the status of their applications in real time. The admin panel enables administrators to create and update company profiles, post job listings, and manage applicant submissions by accepting or rejecting applications. The application ensures secure authentication for both users and admins, while also offering file upload capabilities using Multer for resume submissions. The backend is powered by Express.js, with MongoDB handling data storage, and route protection implemented for enhanced security. On the front end, ReactJS combined with Redux ensures efficient state management, while Vite optimizes the development process with fast builds. This project demonstrates strong full-stack development capabilities, highlighting key skills such as database integration, user authentication, and a responsive, user-friendly interface.

<br><br>

## 🚀 Features  

### User Features:  
- **Sign Up & Sign In**: User authentication for secure access.  
- **Profile Management**: Edit and update user profiles.  
- **Search Jobs**: Browse and filter job listings with detailed descriptions.  
- **Apply for Jobs**: Submit applications for desired job postings.  
- **Track Application Status**: View the status of job applications (accepted, rejected, or pending).  

### Admin Features:  
- **Company Management**: Create and update company profiles.  
- **Job Management**: Add, edit, and delete job listings.  
- **Application Management**: Review user applications and accept or reject them.


<br><br>

## Authors

<br>

- [@Sanil-Sandeep](https://github.com/Sanil-Sandeep)


<br><br>


## 🛠️ Technology Stack  



### Front-End:  
- **ReactJS**: User interface and component-based design.  
- **Redux**: State management for seamless user experience.  
- **Vite**: Fast development and optimized builds.  

### Back-End:  
- **Node.js**: JavaScript runtime environment.  
- **Express.js**: Web framework for building RESTful APIs.  
- **Multer**: File upload middleware for handling resumes or other files.  
- **Route Protection**: Secure routes to protect sensitive data.  

### Database:  
- **MongoDB**: NoSQL database for efficient and scalable data storage.

<br><br>


## Deployment

<br>

To deploy this project run

#### For backend
```bash
  npm i
  npm run dev
```

<br>

#### For frontend
```bash
  npm i
  npm run dev
```


<br><br>


## 🚀 About Me

<br>

I'm a full stack developer...

I am a student at the Sri Lanka Institute of Information Technology (SLIIT), currently studying Information Technology. I am passionate about software development and have worked on various projects that focus on improving business processes. One of my key projects is the CraftMart Payment Management System, which handles secure payment processing, income and expense tracking, and net profit calculations for an online marketplace.

I am continually enhancing my skills in web development, database management, and system integration, and I am excited to pursue a career in software development, creating innovative solutions to solve real-world challenges.




<br><br>

## 🛠 Skills

<br>

- Javascript
- HTML
- MongoDB
- React
- Node
- Express
- CSS

<br><br>


## .env File Structure

<br>

```bash
MONGO_URI = your_mongodb_connection_string
PORT = your_server_port
SECRET_KEY = your_secret_key (this is any string value)
CLOUD_NAME = your_Cloudinary_name
API_KEY = your_api_key
API_SECRET = your_api_secret_key
```

<br><br>

## Run Locally

<br>

Clone the project

```bash
  git clone https://github.com/Sanil-Sandeep/Feedback-Management-CraftMart-MERN.git
```

Go to the project directory

```bash
  cd backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


<br><br>

## 📂 Folder Structure  

```plaintext

JobHunt/  
├── backend/  
│   ├── controllers/  
│   │   ├── application.controller.js  
│   │   ├── company.controller.js  
│   │   ├── job.controller.js  
│   │   └── user.controller.js  
│   ├── middlewares/  
│   │   ├── isAuthenticated.js  
│   │   └── multer.js  
│   ├── models/  
│   │   ├── application.model.js  
│   │   ├── company.model.js  
│   │   ├── job.model.js  
│   │   └── user.model.js  
│   ├── routes/  
│   │   ├── application.route.js  
│   │   ├── company.route.js  
│   │   ├── job.route.js  
│   │   └── user.route.js  
│   ├── utils/  
│   │   ├── cloudinary.js  
│   │   ├── datauri.js  
│   │   └── db.js  
│   ├── .env  
│   ├── index.js  
│   ├── package.json  
│   └── package-lock.json  

├── frontend/  
│   ├── public/  
│   │   └── vite.svg  
│   ├── src/  
│   │   ├── assets/  
│   │   │   └── react.svg  
│   │   ├── components/  
│   │   │   ├── AppliedJobTable.jsx  
│   │   │   ├── Browse.jsx  
│   │   │   ├── CategoryCarousel.jsx  
│   │   │   ├── FilterCard.jsx  
│   │   │   ├── HeroSection.jsx  
│   │   │   ├── Home.jsx  
│   │   │   ├── Job.jsx  
│   │   │   ├── JobDescription.jsx  
│   │   │   ├── Jobs.jsx  
│   │   │   ├── LatestJobCards.jsx  
│   │   │   ├── LatestJobs.jsx  
│   │   │   ├── Profile.jsx  
│   │   │   └── UpdateProfileDialog.jsx  
│   │   │   ├── admin/  
│   │   │   │   ├── AdminJobs.jsx  
│   │   │   │   ├── AdminJobsTable.jsx  
│   │   │   │   ├── Applicants.jsx  
│   │   │   │   ├── ApplicantsTable.jsx  
│   │   │   │   ├── Companies.jsx  
│   │   │   │   ├── CompaniesTable.jsx  
│   │   │   │   ├── CompanyCreate.jsx  
│   │   │   │   ├── CompanySetup.jsx  
│   │   │   │   ├── PostJob.jsx  
│   │   │   │   └── ProtectedRoute.jsx  
│   │   │   ├── auth/  
│   │   │   │   ├── Login.jsx  
│   │   │   │   └── Signup.jsx  
│   │   │   ├── shared/  
│   │   │   │   ├── Navbar.jsx  
│   │   │   │   └── Footer.jsx  
│   │   │   └── ui/  
│   │   │       ├── avatar.jsx  
│   │   │       ├── badge.jsx  
│   │   │       ├── button.jsx  
│   │   │       ├── carousel.jsx  
│   │   │       ├── dialog.jsx  
│   │   │       ├── input.jsx  
│   │   │       ├── label.jsx  
│   │   │       ├── popover.jsx  
│   │   │       ├── radio-group.jsx  
│   │   │       ├── select.jsx  
│   │   │       ├── sonner.jsx  
│   │   │       └── table.jsx  
│   │   ├── hooks/  
│   │   │   ├── useGetAllAdminJobs.jsx  
│   │   │   ├── useGetAllCompanies.jsx  
│   │   │   ├── useGetAllJobs.jsx  
│   │   │   ├── useGetAppliedJobs.jsx  
│   │   │   └── useGetCompanyById.jsx  
│   │   ├── lib/  
│   │   │   └── utils.js  
│   │   ├── redux/  
│   │   │   ├── applicationSlice.js  
│   │   │   ├── authSlice.js  
│   │   │   ├── companySlice.js  
│   │   │   ├── jobSlice.js  
│   │   │   └── store.js  
│   │   ├── utils/  
│   │   │   └── constant.js  
│   │   ├── App.css  
│   │   ├── App.jsx  
│   │   ├── index.css  
│   │   └── main.jsx  
│   ├── .gitignore  
│   ├── components.json  
│   ├── eslint.config.js  
│   ├── index.html  
│   ├── jsconfig.json  
│   ├── package.json  
│   ├── package-lock.json  
│   ├── postcss.config.js  
│   ├── README.md  
│   ├── tailwind.config.js  
│   └── vite.config.js  

```

