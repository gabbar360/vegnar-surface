"use client";

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Sample data for countries and markers
const sampleData = {
  countries: [
    {
      name: "India",
      lat: 22.3193,
      lng: 70.7922,
      projects: "Manufacturing Hub & Headquarters",
      description: "Main manufacturing facility and corporate headquarters located in Rajkot, Gujarat."
    },
    // {
    //   name: "United States",
    //   lat: 39.8283,
    //   lng: -98.5795,
    //   projects: "150+ Premium Residential Projects",
    //   description: "Leading supplier of luxury porcelain tiles for high-end residential and commercial spaces."
    // },
    // {
    //   name: "United Kingdom", 
    //   lat: 55.3781,
    //   lng: -3.4360,
    //   projects: "80+ Commercial & Residential Projects",
    //   description: "Trusted partner for modern architectural projects across England, Scotland, and Wales."
    // },
    // {
    //   name: "Australia",
    //   lat: -25.2744,
    //   lng: 133.7751,
    //   projects: "120+ Luxury Developments",
    //   description: "Premium tile solutions for Australia's growing construction and renovation market."
    // }
  ],
  markers: [
    {
      lat: 22.3193,
      lng: 70.7922,
      name: "Vegnar Surfaces HQ",
      logo: "/lovable-uploads/2b3bfeb0-ccc4-4eda-87c4-d2bb408e3dec.png",
      info: "B-623 RK Iconic, Shital Park, Rajkot, Gujarat 360001, India - Main headquarters and manufacturing facility."
    },
    // {
    //   lat: 40.7128,
    //   lng: -74.0060,
    //   name: "New York Office",
    //   logo: "/lovable-uploads/2b3bfeb0-ccc4-4eda-87c4-d2bb408e3dec.png",
    //   info: "Regional headquarters serving North American markets with premium tile collections."
    // },
    // {
    //   lat: 51.5074,
    //   lng: -0.1278,
    //   name: "London Showroom",
    //   logo: "/lovable-uploads/2b3bfeb0-ccc4-4eda-87c4-d2bb408e3dec.png",
    //   info: "European flagship showroom featuring our complete range of luxury surfaces."
    // },
    // {
    //   lat: -33.8688,
    //   lng: 151.2093,
    //   name: "Sydney Distribution",
    //   logo: "/lovable-uploads/2b3bfeb0-ccc4-4eda-87c4-d2bb408e3dec.png",
    //   info: "Pacific region distribution center ensuring fast delivery across Australia and New Zealand."
    // }
  ]
};

interface GlobeProps {
  rotationSpeed?: number;
}

const Globe3D: React.FC<GlobeProps> = ({ rotationSpeed = 0.5 }) => {
  const globeRef = useRef<any>();
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [Globe, setGlobe] = useState<any>(null);

  useEffect(() => {
    // Dynamic import to avoid SSR issues
    const loadGlobe = async () => {
      const GlobeComponent = (await import('react-globe.gl')).default;
      setGlobe(() => GlobeComponent);
    };
    loadGlobe();
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      // Set initial camera position
      globeRef.current.pointOfView({ altitude: 2.5 });
      
      // Configure controls with zoom limits
      globeRef.current.controls().enableZoom = true;
      globeRef.current.controls().minDistance = 101;
      globeRef.current.controls().maxDistance = 1000;
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = rotationSpeed;
      globeRef.current.controls().enablePan = true;
      globeRef.current.controls().enableDamping = true;
      globeRef.current.controls().dampingFactor = 0.1;
    }
  }, [Globe, rotationSpeed]);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (globeRef.current) {
        const container = globeRef.current.renderer().domElement.parentElement;
        if (container) {
          const width = Math.min(container.clientWidth, 1200);
          const height = Math.min(600, window.innerHeight * 0.7);
          globeRef.current.width(width).height(height);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [Globe]);

  if (!Globe) {
    return (
      <div className="w-full h-[400px] md:h-[600px] bg-gradient-to-r from-gray-900 to-black rounded-2xl flex items-center justify-center">
        <div className="text-white text-lg md:text-xl">Loading Interactive Globe...</div>
      </div>
    );
  }

  const getGlobeSize = () => {
    if (typeof window === 'undefined') return { width: 1200, height: 600 };
    const isMobile = window.innerWidth < 768;
    const width = window.innerWidth;
    const height = isMobile ? 400 : 600;
    return { width, height };
  };

  const { width, height } = getGlobeSize();

  return (
    <div className="relative w-full h-[400px] md:h-[600px] bg-gradient-to-r from-gray-900 to-black overflow-hidden">
      <Globe
        ref={globeRef}
        width={width}
        height={height}
        backgroundColor="rgba(0,0,0,0)"
        backgroundImageUrl="https://unpkg.com/three-globe/example/img/night-sky.png"
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
        showAtmosphere={true}
        atmosphereColor="#87CEEB"
        atmosphereAltitude={0.25}
        rendererConfig={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        
        // Countries data
        polygonsData={sampleData.countries}
        polygonCapColor={() => 'rgba(255, 107, 53, 0.4)'}
        polygonSideColor={() => 'rgba(255, 107, 53, 0.15)'}
        polygonStrokeColor={() => '#FF6B35'}
        polygonAltitude={0.015}
        polygonLabel={(d: any) => {
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
          return `
            <div style="background: rgba(0,0,0,0.9); color: white; padding: ${isMobile ? '8px' : '12px'}; border-radius: 8px; max-width: ${isMobile ? '200px' : '250px'}; backdrop-filter: blur(10px);">
              <h3 style="margin: 0 0 6px 0; color: #FF6B35; font-size: ${isMobile ? '14px' : '16px'}; font-weight: bold;">${d.name}</h3>
              <p style="margin: 0 0 4px 0; font-size: ${isMobile ? '12px' : '14px'}; font-weight: bold;">${d.projects}</p>
              <p style="margin: 0; font-size: ${isMobile ? '10px' : '12px'}; opacity: 0.9; line-height: 1.3;">${d.description}</p>
            </div>
          `;
        }}
        onPolygonClick={(polygon: any) => setSelectedItem(polygon)}
        
        // Markers data
        htmlElementsData={sampleData.markers}
        htmlElement={(d: any) => {
          const el = document.createElement('div');
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
          const size = isMobile ? 24 : 30;
          const imgSize = isMobile ? 16 : 20;
          
          el.innerHTML = `
            <div style="
              width: ${size}px; 
              height: ${size}px; 
              background: white; 
              border: 3px solid #FF6B35; 
              border-radius: 50%; 
              display: flex; 
              align-items: center; 
              justify-content: center;
              cursor: pointer;
              box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4);
              transition: transform 0.2s;
            ">
              <img src="${d.logo}" alt="Logo" style="width: ${imgSize}px; height: ${imgSize}px; object-fit: contain;" />
            </div>
          `;
          el.style.pointerEvents = 'auto';
          el.style.cursor = 'pointer';
          el.addEventListener('mouseenter', () => {
            el.style.transform = 'scale(1.2)';
          });
          el.addEventListener('mouseleave', () => {
            el.style.transform = 'scale(1)';
          });
          el.addEventListener('click', () => setSelectedItem(d));
          return el;
        }}
      />
      
      {/* Modal/Tooltip */}
      {selectedItem && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10 p-4" onClick={() => setSelectedItem(null)}>
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 pr-4">
                {selectedItem.name}
              </h3>
              <button 
                onClick={() => setSelectedItem(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl flex-shrink-0"
              >
                ×
              </button>
            </div>
            
            {selectedItem.projects && (
              <div className="mb-4">
                <p className="text-base md:text-lg font-semibold text-orange-600 mb-2">
                  {selectedItem.projects}
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  {selectedItem.description}
                </p>
              </div>
            )}
            
            {selectedItem.info && (
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <img src={selectedItem.logo} alt="Logo" className="w-6 h-6 md:w-8 md:h-8 mr-3" />
                  <span className="font-semibold text-gray-800 text-sm md:text-base">{selectedItem.name}</span>
                </div>
                <p className="text-sm md:text-base text-gray-600">
                  {selectedItem.info}
                </p>
              </div>
            )}
            
            <button 
              onClick={() => setSelectedItem(null)}
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors text-sm md:text-base"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Globe3D