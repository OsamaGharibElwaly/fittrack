import Header from "../components/Header";
import Footer from "../components/Footer";
import ExercisesClient from "./ExercisesClient";

export default function WorkoutsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <Header />
      <main className="flex-1">
        <ExercisesClient />
      </main>
      <Footer />
    </div>
  );
}


// Reload word must be visible[note]
// Filteres has not any vitable functionality [note] , add later