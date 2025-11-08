import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Experience from './pages/experience'

export default function App() {
return (
<div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
<Navbar />
<main className="max-w-6xl mx-auto px-4 md:px-6 py-8">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/projects" element={<Projects />} />
<Route path="/experience" element={<Experience />} />

<Route path="/contact" element={<Contact />} />
</Routes>
</main>
</div>
)
}