export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="mb-4 md:mb-0">
            <p>
              &copy; {new Date().getFullYear()} Hammad Tariq. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
