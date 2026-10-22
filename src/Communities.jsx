import Header from "./header";

export default function Communities() {
  return (
    <main className='bg-amber-500'>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Communities</h1>
        <p className="text-lg text-white text-center max-w-md">
          Welcome to our company! We are dedicated to providing the best services and solutions to our clients. Our team of experts works tirelessly to ensure customer satisfaction and deliver exceptional results.
        </p>
      </div>
    </main>
  );
}