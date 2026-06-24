"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { BookOpen, PlayCircle, FileText, Award, Clock, ChevronRight } from "lucide-react";

const courses = [
  { title: "Introduction to Stock Markets", level: "Beginner", lessons: 12, duration: "2h 30m", progress: 100 },
  { title: "Crypto Trading Fundamentals", level: "Beginner", lessons: 8, duration: "1h 45m", progress: 75 },
  { title: "Technical Analysis Masterclass", level: "Intermediate", lessons: 20, duration: "6h 10m", progress: 30 },
  { title: "Risk Management Strategies", level: "Intermediate", lessons: 10, duration: "3h 20m", progress: 0 },
  { title: "Options Trading Deep Dive", level: "Advanced", lessons: 15, duration: "5h 00m", progress: 0 },
  { title: "Algorithmic Trading with Python", level: "Advanced", lessons: 18, duration: "8h 00m", progress: 0 },
];

const tutorials = [
  { title: "How to Place Your First Trade", duration: "5:30", views: "12.4K" },
  { title: "Understanding Candlestick Patterns", duration: "8:15", views: "8.7K" },
  { title: "Setting Up Price Alerts", duration: "3:45", views: "5.2K" },
  { title: "Using Stop-Loss Orders Effectively", duration: "6:20", views: "9.1K" },
];

export default function EducationPage() {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden text-sm">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <BookOpen size={28} className="text-primary" /> Trading Academy
          </h1>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="glass-panel p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <BookOpen size={24} className="text-primary" />
              </div>
              <div>
                <div className="text-gray-400 text-xs">Courses Available</div>
                <div className="font-bold text-2xl">24</div>
              </div>
            </div>
            <div className="glass-panel p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-success/20 flex items-center justify-center">
                <Award size={24} className="text-success" />
              </div>
              <div>
                <div className="text-gray-400 text-xs">Completed</div>
                <div className="font-bold text-2xl">1</div>
              </div>
            </div>
            <div className="glass-panel p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-yellow-400/20 flex items-center justify-center">
                <Clock size={24} className="text-yellow-400" />
              </div>
              <div>
                <div className="text-gray-400 text-xs">Total Learning Time</div>
                <div className="font-bold text-2xl">4h 15m</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Courses */}
            <div className="lg:col-span-2">
              <h2 className="font-semibold text-lg mb-4">Courses</h2>
              <div className="space-y-4">
                {courses.map((course, i) => (
                  <div key={i} className="glass-panel p-5 hover:border-primary/30 transition-colors cursor-pointer group">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">{course.title}</h3>
                        <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                          <span className={`px-2 py-0.5 rounded font-medium ${
                            course.level === "Beginner" ? "bg-success/20 text-success" :
                            course.level === "Intermediate" ? "bg-yellow-400/20 text-yellow-400" :
                            "bg-danger/20 text-danger"
                          }`}>{course.level}</span>
                          <span>{course.lessons} lessons</span>
                          <span>•</span>
                          <span>{course.duration}</span>
                        </div>
                      </div>
                      <ChevronRight size={20} className="text-gray-600 group-hover:text-primary transition-colors" />
                    </div>
                    {/* Progress bar */}
                    <div className="w-full h-1.5 bg-background rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${course.progress === 100 ? "bg-success" : course.progress > 0 ? "bg-primary" : "bg-gray-700"}`}
                        style={{ width: `${Math.max(course.progress, 2)}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500 mt-1 text-right">{course.progress}% complete</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Tutorials */}
            <div>
              <h2 className="font-semibold text-lg mb-4">Quick Tutorials</h2>
              <div className="space-y-4">
                {tutorials.map((vid, i) => (
                  <div key={i} className="glass-panel p-4 hover:border-primary/30 transition-colors cursor-pointer group flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <PlayCircle size={24} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate group-hover:text-primary transition-colors">{vid.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <span>{vid.duration}</span>
                        <span>•</span>
                        <span>{vid.views} views</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
