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
  googleMapUrl: string;
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
  googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.6668704626155!2d51.53326131500965!3d25.32379798383742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c4c23063543b%3A0xc3b5e4069156740!2sWest%20Bay%2C%20Doha%2C%20Qatar!5e0!3m2!1sen!2sbd!4v1645524385967!5m2!1sen!2sbd",
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
