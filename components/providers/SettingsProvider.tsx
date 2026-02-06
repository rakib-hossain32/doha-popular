"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface Settings {
  siteName: string;
  email: string;
  phone: string;
  address: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  metaDescription: string;
  operationalHours: string;
}

const defaultSettings: Settings = {
  siteName: "Doha Popular",
  email: "inquiry@dohapopular.com.qa", // Updated email address
  phone: "+974 4400 0000",
  address: "West Bay, Doha, Qatar",
  facebook: "",
  instagram: "",
  linkedin: "",
  metaDescription: "Doha Popular - Premium Integrated Facility Management, Cleaning, and Manpower Services in Qatar.",
  operationalHours: "Sun - Thu: 08:00 AM - 06:00 PM",
};

const SettingsContext = createContext<{
  settings: Settings;
  loading: boolean;
}>({
  settings: defaultSettings,
  loading: true,
});

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSettings() {
      try {
        const res = await fetch("/api/settings");
        if (res.ok) {
          const data = await res.json();
          // Merge with defaults to ensure all fields exist
          setSettings({ ...defaultSettings, ...data });
        }
      } catch (err) {
        console.error("Failed to fetch settings:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchSettings();
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, loading }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => useContext(SettingsContext);
