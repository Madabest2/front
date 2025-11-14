"use client";

import { cn } from "@/lib/utils";
import { MapPin, Maximize2, Minus, Plus } from "lucide-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";

interface MapboxEmbedProps {
  className?: string;
  center?: [number, number]; // [longitude, latitude]
  zoom?: number;
}

// Token Mapbox public (peut être remplacé par le vôtre)
const MAPBOX_TOKEN =
  process.env.NEXT_PUBLIC_MAPBOX_TOKEN ||
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";

export function MapboxEmbed({
  className,
  center = [49.2966, -12.2797], // Diego Suarez coordinates
  zoom = 13,
}: MapboxEmbedProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [viewMode, setViewMode] = useState<"map" | "satellite">("satellite");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Configurer le token Mapbox
    mapboxgl.accessToken = MAPBOX_TOKEN;

    // Initialiser la carte
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style:
          viewMode === "map"
            ? "mapbox://styles/mapbox/streets-v12"
            : "mapbox://styles/mapbox/satellite-streets-v12",
        center: center,
        zoom: zoom,
        attributionControl: false,
      });

      // Ajouter un marqueur personnalisé
      const el = document.createElement("div");
      el.className = "custom-marker";
      el.style.width = "40px";
      el.style.height = "40px";
      el.innerHTML = `
        <svg viewBox="0 0 24 24" fill="#EE3B3B" stroke="#EE3B3B" stroke-width="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3" fill="white"></circle>
        </svg>
      `;

      new mapboxgl.Marker(el).setLngLat(center).addTo(map.current);

      map.current.on("load", () => {
        setIsLoaded(true);
      });

      // Désactiver la rotation de la carte
      map.current.dragRotate.disable();
      map.current.touchZoomRotate.disableRotation();
    } catch (error) {
      console.error("Erreur lors de l'initialisation de la carte:", error);
    }

    return () => {
      map.current?.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [center, zoom]); // Ne pas inclure viewMode ici pour éviter de recréer la carte

  // Changer le style de la carte quand viewMode change
  useEffect(() => {
    if (!map.current || !isLoaded) return;

    const newStyle =
      viewMode === "map"
        ? "mapbox://styles/mapbox/streets-v12"
        : "mapbox://styles/mapbox/satellite-streets-v12";

    map.current.setStyle(newStyle);
  }, [viewMode, isLoaded]);

  const handleZoomIn = () => {
    if (map.current) {
      map.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (map.current) {
      map.current.zoomOut();
    }
  };

  const handleRecenter = () => {
    if (map.current) {
      map.current.flyTo({ center: center, zoom: zoom });
    }
  };

  return (
    <div className={cn("relative mx-auto my-8 w-full max-w-[1300px] px-4", className)}>
      <div className="relative h-[305px] overflow-hidden rounded-[25px] border-2 border-[#E2531F]">
        {/* Conteneur de la carte */}
        <div ref={mapContainer} className="h-full w-full" />

        {/* Message de chargement */}
        {!isLoaded && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#D9D9D9]">
            <div className="text-center">
              <div className="mb-2 text-lg font-medium text-gray-700">
                Chargement de la carte...
              </div>
              <div className="text-sm text-gray-500">Veuillez patienter</div>
            </div>
          </div>
        )}

        {/* Contrôles de zoom (en haut à gauche) */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-0 overflow-hidden rounded-[3px] bg-[#212121] shadow-lg">
          <button
            onClick={handleZoomIn}
            className="flex h-[34px] w-[34px] items-center justify-center border-b border-white/20 text-white transition-colors hover:bg-[#313131]"
            aria-label="Zoom avant"
          >
            <Plus className="h-4 w-4" />
          </button>
          <button
            onClick={handleZoomOut}
            className="flex h-[34px] w-[34px] items-center justify-center text-white transition-colors hover:bg-[#313131]"
            aria-label="Zoom arrière"
          >
            <Minus className="h-4 w-4" />
          </button>
        </div>

        {/* Bouton recentrer (en bas à droite) */}
        <button
          onClick={handleRecenter}
          className="group absolute right-4 bottom-4 z-20 flex h-[39px] w-[39px] items-center justify-center rounded-[3px] bg-[#212121] shadow-lg transition-colors hover:bg-[#313131]"
          aria-label="Recentrer la carte"
        >
          <Maximize2 className="h-4 w-4 text-white" />
        </button>

        {/* Marqueur de la position de l'agence (en bas à gauche) */}
        <div className="absolute bottom-8 left-4 z-20 flex h-[37px] w-[37px] items-center justify-center rounded-full bg-[#212121] shadow-lg">
          <MapPin className="h-6 w-6 fill-white text-white" />
        </div>

        {/* Toggle Map/Satellite (en bas à gauche au dessus du marqueur) */}
        <div className="absolute bottom-16 left-4 z-20 flex overflow-hidden rounded-[3px] bg-[#212121] shadow-lg">
          <button
            onClick={() => setViewMode("map")}
            className={cn(
              "px-4 py-2 text-sm transition-all",
              viewMode === "map" ? "font-bold text-white" : "font-normal text-white/70"
            )}
          >
            Map
          </button>
          <div className="h-full w-px bg-white/20" />
          <button
            onClick={() => setViewMode("satellite")}
            className={cn(
              "px-4 py-2 text-sm transition-all",
              viewMode === "satellite" ? "font-bold text-[#F8F8F8]" : "font-normal text-white/70"
            )}
          >
            Satellite
          </button>
        </div>
      </div>
    </div>
  );
}
