import Image from "next/image";
import Navbar from "@/Components/navbar";


import Link from "next/link";

export default function AboutMe() {
  return (
    <div className=" min-h-screen p-6">

      <Navbar />

      {/* About Me Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg">
          Hello! My name is Rachel Reyes, and this is a little corner where I
          share my passions, projects, and journey.
        </p>
      </div>

      {/* Hobbies Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Hobbies</h2>
        <ul className="space-y-8">
          {/* Outdoors Hobby */}
          <li>
            <p>
              <strong>Outdoors:</strong> I love exploring the beauties of nature
              through camping, mountain walks, and road trips with friends and
              family.
            </p>
            <div className="flex justify-center mt-4">
              <img
                src="/Photos/IMG_2043.JPG"
                alt="Rachel and her boyfriend hugging dearly in front of their tent while camping"
                className="w-40 h-52 object-cover rounded-lg shadow-lg"
              />
            </div>
          </li>

          {/* Books Hobby */}
          <li>
            <p>
              <strong>Books:</strong> I'm an avid reader who enjoys diving into
              the world of literature and sharing book recommendations.
            </p>
            <div className="flex justify-center mt-4">
              <img
                src="/Photos/MemoirsOfAGeisha.jpg"
                alt="Cover of Memoirs of a Geisha book"
                className="w-40 h-52 object-cover rounded-lg shadow-lg"
              />
            </div>
          </li>

          {/* Food Hobby */}
          <li>
            <p>
              <strong>Food:</strong> Discovering new recipes, trying out new
              restaurants, and sharing interesting food experiences is my
              passion.
            </p>
            <div className="flex justify-center mt-4">
              <img
                src="/Photos/kennysbbfsdinner.JPG"
                alt="Spread of food including a charcuterie board, steak, tomatoes, and salad"
                className="w-40 h-52 object-cover rounded-lg shadow-lg"
              />
            </div>
          </li>

          {/* Health Hobby */}
          <li>
            <p>
              <strong>
                <Link href="/health" className=" hover:underline">
                  Health and Fitness
                </Link>
              </strong>{" "}
              Fitness is a big part of my life, and I enjoy creating workout
              routines, staying active, and sharing motivation with others.
            </p>
          </li>

          {/* Coding Hobby */}
          <li>
            <p>
              <strong>
                <Link href="/project" className=" hover:underline">
                Coding
                </Link>
              </strong>{" "}
              As an aspiring software engineer, I love creating projects that
              solve real-world problems and improve lives.
            </p>
          </li>
        </ul>
      </div>

      {/* Background Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Background</h2>
        <p>
          I am a software engineering student with a love for combining
          creativity and logic to build impactful solutions while learning as
          much as I can personally and through my computer science career. My
          journey so far has been enriched by a mix of personal projects,
          internships, and continuous learning.
        </p>
      </div>
    </div>
  );
}

