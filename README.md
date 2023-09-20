# Road Runner

## About

Road-Runner is a user-friendly web application created to simplify the car rental process. This website caters to users seeking a convenient way to discover and reserve rental cars. With Road-Runner, you can effortlessly browse our catalog of vehicles and add your favorite cars to a personal list for easy reference

## Link

You can use our site by following the [Road Runner](https://kreidina.github.io/road-runner/)

## Getting Started

### Dependencies

* *Operating System:* Your application can run on a variety of operating systems, such as Windows, macOS, or Linux.

* *Node.js:* Make sure you have Node.js installed on your computer. You can download it from the official [Node.js website](https://nodejs.org/uk).

### Installing

1. *Downloading the app:* You can get a copy of the app by cloning the repository or by downloading the ZIP archive from the project's GitHub page.

Clone this repository to your local machine using:

  ``` JavaScript
  git clone <https://github.com/Kreidinia/road-runner>
  ```

* *If you want to run a project using Vite, follow these steps:*
  
  * Go to the root folder of the project and in the vite.config.js file, replace the name of the repository with your own:

   ```JavaScript
  export default defineConfig({
  plugins: [react(), svgr()],
  base: "/YOUR_REPO_NAME/",
  });
  ```

  * Then, after the repository has been deployed, you need to go to the **package.json** file and replace the homepage with
  the deployed site link

  ```JavaScript
  "homepage": "https://YOUR_LINK/",
  ```

2. *Installing Dependencies:* After downloading the app, run **npm install** or **yarn install** in the root of the project to install all required dependencies.

### Executing program

* *Starting the server:* Open a command prompt in the root of the project and run **'npm start'** or **'yarn start'** to start the React server, to start on the Vite server type **'npm run dev'** . This command will start the development server and open your application in a web browser at <http://localhost:3000> on React or <http://localhost:5173> on Vite.

* *Development and testing:* You can edit the source code of your site by making changes to the project files. Changes are automatically updated in the web browser during development.

* *Stopping the server:* To stop the React server, simply press **'Ctrl + C'** on the command line where it is running.

## Site

The site opens to the **Home** page with a general description of the services provided by the company, as well as navigation to the **Catalog** and **Favorites**, clicking on the Rental Car button redirects you to the **Catalog**

![home](/assets/home-line.jpg)

On the **Catalog** page, you can view all available cars for rent and open a **modal** with detailed information

![catalog](/assets/catalog-arrow.jpg)

**Modal** provides more detailed information about the car, the **Rental Car** button provides an opportunity to connect with the company by phone number

![home](/assets/modal-line.jpg)

A page with ads that have been added to **Favorites**. If you click on the **heart** on the ad card, it is either added or removed from the list of favorites, depending on whether it was previously added

![home](/assets/favorite-line.jpg)

Also, on the site, it is possible to filter ads by car brand, rental price and mileage range. The user may not filter ads by all of these criteria at once.

![home](/assets/filter-line.jpg)

## Authors

[Anna Kreidina](https://github.com/Kreidina)
I am always open to your suggestions and questions, so feel free to contact me at [email](mailto:kav99mail@gmail.com)
