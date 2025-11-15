import React from "react";

export default function Projects() {
  return (
    <>
      <div className="p-10 pb-20 shadow-[0_4px_10px_rgba(128,128,128,0.4)]">
        <h1 className="text-4xl font-bold mb-10 text-center">
          <span className="text-(--tertiary)">Project </span>
          <span className="text-(--secondary)">Showcase</span>
        </h1>

        {/* MOBILE → 1 column  |  DESKTOP → 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4">

          {/* =============== PROJECT 1 =============== */}
          <div className="cursor-pointer">
            <b className="text-2xl text-(--secondary)">ToDo_App</b>

            {/* MOBILE SHORT DESCRIPTION */}
            <p className="mt-2 text-justify indent-7 md:hidden">
              A fast and clean To-Do app built with React + Vite, allowing users
              to add, complete, and delete tasks with a real-time summary.
            </p>

            {/* DESKTOP FULL DESCRIPTION */}
            <p className="mt-2 text-justify indent-7 hidden md:block">
              This To-Do App is a simple and efficient task manager built with
              React and Vite, designed to help users organize their daily
              activities with ease. It allows users to quickly add new tasks,
              mark them as completed, and delete them when no longer needed.
              Completed items automatically move to the bottom to keep the
              active list clean and readable. A live summary at the bottom
              displays the total number of tasks along with how many have been
              completed, giving a quick overview of progress. The app focuses on
              clean UI design, smooth interactions, and efficient state
              handling, making it both intuitive and responsive for everyday use.
            </p>

            {/* IMAGE BELOW ON MOBILE */}
            <div className="mt-4 flex justify-center items-center md:hidden">
              <a href="https://todo-app-b4xs.onrender.com" target="_blank">
                <img
                  src="/ProjectsPic/Project1.png"
                  alt="Project1"
                  className="h-50 rounded-xl border border-(--tertiary)"
                />
              </a>
            </div>
          </div>

          {/* DESKTOP IMAGE RIGHT SIDE */}
          <div className="hidden md:flex justify-center items-center">
            <a href="https://todo-app-b4xs.onrender.com" target="_blank">
              <img
                src="/ProjectsPic/Project1.png"
                alt="Project1"
                className="h-50 rounded-xl border border-(--tertiary)"
              />
            </a>
          </div>


          {/* =============== PROJECT 2 =============== */}
          <div className="cursor-pointer">
            <b className="text-2xl text-(--secondary)">
              Cricket Score Tracker App
            </b>

            {/* MOBILE SHORT DESCRIPTION */}
            <p className="mt-2 text-justify indent-7 md:hidden">
              A fast cricket scoring tool built with React, allowing ball-by-ball
              tracking, wickets, wides, and auto-grouped overs.
            </p>

            {/* DESKTOP FULL DESCRIPTION */}
            <p className="mt-2 text-justify indent-7 hidden md:block">
              This Cricket Score Tracker is a simple and fast scoring
              application built for local cricket matches to avoid confusion
              during gameplay. It allows players to record every ball—including
              runs, wides, and wickets—with clear visual indicators. Each
              delivery appears as a circular badge, and overs are automatically
              grouped for easy review. The app dynamically updates the score,
              overs left, wides count, and wickets in real time. Designed with
              React, Vite, and custom CSS, this tool provides a smooth interface
              that makes scoring fast, accurate, and accessible during casual
              matches.
            </p>

            {/* IMAGE BELOW ON MOBILE */}
            <div className="mt-4 flex justify-center items-center md:hidden">
              <a href="https://cricket-vmm0.onrender.com" target="_blank">
                <img
                  src="/ProjectsPic/Project2.png"
                  alt="Project2"
                  className="h-50 rounded-xl border border-(--tertiary)"
                />
              </a>
            </div>
          </div>

          {/* DESKTOP IMAGE */}
          <div className="hidden md:flex justify-center items-center">
            <a href="https://cricket-vmm0.onrender.com" target="_blank">
              <img
                src="/ProjectsPic/Project2.png"
                alt="Project2"
                className="h-50 rounded-xl border border-(--tertiary)"
              />
            </a>
          </div>


          {/* =============== PROJECT 3 =============== */}
          <div className="cursor-pointer">
            <b className="text-2xl text-(--secondary)">FoodApp</b>

            {/* MOBILE SHORT DESCRIPTION */}
            <p className="mt-2 text-justify indent-7 md:hidden">
              A simple recipe viewer built with React. Users can explore dishes
              and view step-by-step cooking details.
            </p>

            {/* DESKTOP FULL DESCRIPTION */}
            <p className="mt-2 text-justify indent-7 hidden md:block">
              This Food App is a simple recipe browsing interface built with
              React, where users can view a collection of food items displayed
              on the home page. Selecting any dish opens a detailed page showing
              its preparation steps, ingredients, and cooking procedure. All
              foods currently share the same recipe flow, making the project
              lightweight and easy to navigate. The app focuses on clean UI,
              smooth navigation, and organized component structure using React
              and CSS. It's a beginner-friendly project demonstrating routing,
              component reuse, and simple state handling.
            </p>

            {/* IMAGE BELOW ON MOBILE */}
            <div className="mt-4 flex justify-center items-center md:hidden">
              <a href="https://foodapp-d5bq.onrender.com" target="_blank">
                <img
                  src="/ProjectsPic/Project3.png"
                  alt="Project3"
                  className="h-50 rounded-xl border border-(--tertiary)"
                />
              </a>
            </div>
          </div>

          {/* DESKTOP IMAGE */}
          <div className="hidden md:flex justify-center items-center">
            <a href="https://foodapp-d5bq.onrender.com" target="_blank">
              <img
                src="/ProjectsPic/Project3.png"
                alt="Project3"
                className="h-50 rounded-xl border border-(--tertiary)"
              />
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
