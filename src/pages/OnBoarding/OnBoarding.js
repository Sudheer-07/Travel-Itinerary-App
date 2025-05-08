import { Header } from './components/Header';
import { TravelPlanner } from './components/Planner';

export const OnBoarding = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-black py-10 px-4 sm:px-8 w-full">
            <div className="w-full max-w-md mx-auto">
            <Header />
            <TravelPlanner />
            </div>
        </div>
    )
}