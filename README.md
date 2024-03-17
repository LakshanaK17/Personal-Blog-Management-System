# Personal Blog Management System
Overview
This is a Personal Blog Management System built using React, Next.js, and MySQL. The system allows users to create, read, update, and delete blog posts. It features a simple authentication mechanism to allow users to manage their posts securely.

Requirements
Node.js (v14 or higher)
MySQL
Git (optional)
Setup
Clone the repository:

bash
Copy code
git clone <repository_url>
Or download the ZIP file and extract it to your desired location.

Install dependencies:

bash
Copy code
cd personal-blog-management-system
npm install
Set up MySQL database:

Make sure MySQL server is installed and running on your machine.
Log in to your MySQL server and create a new database for the project (e.g., personal_blog_db).
Update the database configuration in utils/db.js with your MySQL credentials:
javascript
Copy code
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'personal_blog_db'
});
Environment variables:
If needed, create a .env file in the project root directory and add any required environment variables.

Run the development server:

bash
Copy code
npm run dev
This will start the Next.js development server. By default, the application should be accessible at http://localhost:3000.

Usage
Visit http://localhost:3000 in your web browser to access the application.
Sign up or log in to create, edit, and delete blog posts.
