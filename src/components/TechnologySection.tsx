import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Fetch technology data
  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch technology data");
        }

        return response.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to load technologies!");
        setLoading(false);
      });
  }, []);

  // Add technology
  const handleAdd = (technology: Technology) => {
    const alreadyExists = stack.some((item) => item.id === technology.id);

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [...previousStack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one technology
  const handleRemove = (id: string) => {
    setStack((previousStack) =>
      previousStack.filter((technology) => technology.id !== id),
    );

    toast.info("Technology removed from your stack!");
  };

  // Remove all
  const handleRemoveAll = () => {
    setStack([]);

    toast.info("All technologies removed!");
  };

  return (
    <>
      <section className="min-h-screen bg-white py-8 md:py-12">
        <div className="mx-auto max-w-[1100px] px-4">
          {/* Heading */}
          <div className="mb-5">
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
              Explore the <span className="text-pink-500">Technologies</span>
            </h1>

            <p className="mt-1 text-[10px] text-slate-500 md:text-xs">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex min-h-[400px] items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                {/* Spinner */}
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500"></div>

                <p className="text-sm font-medium text-slate-500">
                  Loading technologies...
                </p>
              </div>
            </div>
          ) : (
            /* Main Layout */
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_280px]">
              {/* Technology Cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    onAdd={handleAdd}
                    isAdded={stack.some((item) => item.id === technology.id)}
                  />
                ))}
              </div>

              {/* Your Stack */}
              <div className="lg:sticky lg:top-5 lg:h-fit">
                <StackSidebar
                  stack={stack}
                  onRemove={handleRemove}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

export default TechnologySection;
