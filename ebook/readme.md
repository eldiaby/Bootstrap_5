# Ebook Blog

**Version**: 1.0.0  
**Author**: Eldiaby Hosny  
**License**: ISC

This website provides a free e-book that serves as a step-by-step guide to help you start your own blog. Learn essential tips, tools, and resources for successful blogging.

## Features

- Modern and business-oriented design
- Responsive layout
- Sticky navbar with style changes on scroll
- Bootstrap modals
- Custom form & input styles
- Testimonials section
- Contact page with embedded Google Map
- Free E-book download to guide you through starting your own blog

## Technologies Used

- **Bootstrap**: For responsive layout and components
- **Sass**: For custom styling and efficient CSS management
- **Font Awesome**: For scalable icons
- **Node.js**: For local development environment and build tools

## Installation & Setup

To set up this project locally, follow these steps:

1. Install [Node.js](https://nodejs.org/en/).

2. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/ebook-blog.git
   cd ebook-blog

    Install dependencies:

    npm install

    This will install all necessary dependencies, including Bootstrap, Sass, and Font Awesome.
   ```

Development
Building the CSS

To compile your Sass files into CSS, run:

npm run sass:build

This will generate the style.comp.css file.
Watching for Changes

To automatically compile your Sass files whenever you make changes, run:

npm run sass:watch

Customizing Bootstrap

You can customize Bootstrap’s default variables by modifying the bootstrap.scss file. For a list of all variables, check out the file at:

node_modules/bootstrap/dist/scss/\_variables.scss

Do not edit the variables.scss file directly, as it will be overwritten when you update Bootstrap.
Adding Custom Styles

For any custom styles, add your code to the styles.scss file.
Running the Development Server

To start a local server for development, run:

npm run devserver

This will open the site in a browser and you can make changes in real time.
Build the Project for Production

To build the project for production, you can run:

npm run build:project

This will:

    Minify HTML, CSS, and JavaScript files
    Copy necessary assets like images and fonts to the dist folder
    Prepare the project for deployment

Deployment

After building the project, deploy the contents of the dist folder to your hosting service.
License

This project is licensed under the ISC License.
