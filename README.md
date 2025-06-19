# Career-Path-Advisor

An intelligent and interactive web application that guides users in choosing the right study or career path based on their current education level.

---

## 🚀 Features

- 📘 Choose between **Study Options** or **Career Options**
- 🎯 Input your **education level** (from 3rd Class to Postgraduate)
- ✅ Get **customized suggestions** from a curated dataset
- 🌐 Built with **Flask (Python)** for backend and **HTML/JS frontend**
- ⚡ Fast response with helpful messages when options are not found
- 📁 Easily extendable and maintainable code structure

---

## 📂 Folder Structure

career-advisor-project/
│
├── data/
│ └── study_career_options_full.csv # CSV file containing education/career options
│
├── static/
│ └── style.css # (Optional) Custom styling
│
├── templates/
│ └── index.html # Main frontend UI page
│
├── advisor.py # Logic for processing user input and fetching options
├── app.py # Flask app and API endpoints
├── README.md # Project overview and instructions

yaml
Copy
Edit

---

## ⚙️ Tech Stack

- **Frontend**: HTML5, JavaScript (Vanilla), CSS  
- **Backend**: Python 3.x with Flask  
- **Data**: CSV-based career/study path mappings  
- **Hosting**: Runs on `localhost:5000`

---

## 📌 Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Cypher-IQ/Career-Path-Advisor.git
   cd Career-Path-Advisor
   ```
2. **Install dependencies**:
   ```bash
   pip install flask pandas
   ```
3. **Run the Flask app**:
   ```bash
   python app.py
   ```
4. **Access the application**:
   Open your browser and go to http://localhost:5000

---

## 📊 Data Format (CSV)

CSV file located in data/study_career_options_full.csv should follow:

| Education_Level     | Option_Type    | Available_Options                                   |
|---------------------|----------------|----------------------------------------------------|
| 10th Completed      | Study Option   | Polytechnic diploma; B.Voc; 11th/12th via NIOS    |
| 10th Completed      | Career Option  | Railway Group D; Hospitality jobs; Retail clerk   |
| Diploma Completed   | Study Option   | Lateral B.Tech; Management Diplomas; Certifications |
| Diploma Completed   | Career Option  | Junior Engineer; Site Supervisor; Technician      |
| ...                 | ...            | ...                                                |

---

## 🎯 Project Goal

To empower students and school leavers with informed decisions about their future academic or career paths based on their current qualifications—especially those in rural or underserved communities.

---

## 📝 Future Enhancements

- ✅ Dropdown autocomplete for education levels
- 🎞️ Add animated UI transitions (via index.html or frontend JS)
- 📱 Mobile responsive UI

---

## 🤝 Contributors

[VANAMA SAI SRI RAM] - Developer, Data Integrator, UI Designer

---

## 📃 License

Copyright (c) 2025 [VANAMA SAI SRI RAM]

All Rights Reserved.

This software and associated files are the intellectual property of [Your Name].

Unauthorized copying, distribution, modification, or use of this software,
via any medium, is strictly prohibited unless prior written permission is obtained
from the copyright holder.

This software is provided "AS IS" without warranty of any kind, express or implied,
including but not limited to the warranties of merchantability, fitness for a
particular purpose, and noninfringement.

For licensing requests or inquiries, contact: [saisriramv27@gmail.com]
