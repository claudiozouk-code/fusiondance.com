export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-8">
            <img 
              src="artifact_image_0.png" 
              alt="FusionDance Logo" 
              className="h-16 w-auto mb-2" 
            />
          </div>
          
          <div className="text-gray-400 text-xs text-center">
            <p className="mb-2">© 2026 FusionDance — SoulZouk Methodology</p>
            <p>Created by <span className="text-soul-dark font-bold">Xina SoulZouk</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
