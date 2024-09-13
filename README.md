# Group Project FOP

Welcome to the Group Project FOP! This guide will help you set up the project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Python 3.x**
- **PostgreSQL**
- **Node.js** (includes npm)
- **Git**

## Installation Guide

Follow the steps below to get the project up and running:

### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/Star-tide/group_project_fop.git
cd group_project_fop
```

### 2. Set Up a Virtual Environment

Create a virtual environment in the root directory (group_project_fop) and activate it:

For Windows:
```bash
python -m venv env
.\env\Scripts\activate
```

For maxOS/linux:
```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Create the PostgreSQL Database

Create a new PostgreSQL database named 'fop_db':

```bash
createdb fop_db
```

### 4. Install Backend Dependencies

Navigate to the backend directory and install the required Python packages using 'requirements.txt':

```bash
cd backend
pip install -r requirements.txt
```

### 5. Install Frontend Dependencies

Navigate to the frontend directory and install the required npm packages:

```bash
cd ../frontend
npm install
```

### 6. Run the Project

Once everything is installed, you can run the backend and frontend servers as needed.

## Additional Information

* Backend: The backend is set up using Django
* Frontend: The frontend is set up using React and Vite.

For any issues or contributions, feel free to open a pull request or contact the maintainers.

Happy coding!
