# Contrail

## Introduction
**Contrail** is a simple web app for posting tweets, built with Django. With Contrail, users can create, read, update, and delete tweets. Each tweet can include a title, description, and an optional image. The app also has a strong focus on secure user authentication to keep accounts safe.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## Features
- **Tweet CRUD Operations**: Users can create, view, edit, and delete tweets.
- **Add Images**: Users can attach images to their tweets.
- **Secure Authentication**: User login and registration are built with extra security in mind.

## Installation

To set up **Contrail** on your computer:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/lsahmed/contrail.git
    cd contrail
    ```

2. **Set Up a Virtual Environment** (optional but recommended):
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install the Required Libraries**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Run Database Migrations**:
    ```bash
    python manage.py migrate
    ```

5. **Start the Development Server**:
    ```bash
    python manage.py runserver
    ```

Now you can open the app in your browser at `http://127.0.0.1:8000/`.

## Usage

1. **Sign Up or Log In**: Users need to register or log in to start tweeting.
2. **Tweet Actions**:
   - **Create a Tweet**: Add a title, description, and (optionally) an image.
   - **View Tweets**: See all tweets from users.
   - **Edit a Tweet**: Update the title, description, or image of an existing tweet.
   - **Delete a Tweet**: Permanently delete a tweet.

## Dependencies

This project uses:
- **Django**: Web framework for building the app.
- **Pillow**: Library for handling images.

Add these dependencies to your `requirements.txt`:
```plaintext
Django>=3.0
pillow
```
## Troubleshooting

- **Server Errors**: Make sure all migrations are applied. If you still see errors, check your database settings.
- **Image Issues**: Make sure Pillow is installed correctly so you can upload images.
- **Login Issues**: Make sure cookies and sessions are enabled in Django settings.

## Contributors

- **[@lsahmed](https://github.com/lsahmed)** - Creator and maintainer

