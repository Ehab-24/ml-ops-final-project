import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { 
  GraduationCap, 
  Brain, 
  Zap, 
  Eye, 
  Users, 
  BookOpen, 
  ArrowRight,
  Sparkles,
  Target,
  Shield,
  Clock,
  BarChart3,
  FileText,
  Star,
  Globe,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Menu,
  X
} from "lucide-react";

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/6 right-1/3 w-32 h-32 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-2xl animate-bounce delay-3000"></div>
        <div className="absolute bottom-1/6 left-1/3 w-48 h-48 bg-gradient-to-r from-orange-500/15 to-red-500/15 rounded-full blur-2xl animate-bounce delay-4000"></div>
        
        {/* Moving particles */}
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-purple-400/60 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/6 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-ping delay-1500"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-pink-400/60 rounded-full animate-ping delay-2000"></div>
        <div className="absolute top-1/6 left-1/2 w-2 h-2 bg-emerald-400/60 rounded-full animate-ping delay-2500"></div>
      </div>

      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-blue-900/20 to-slate-900/40"></div>
      
      {/* Animated geometric shapes */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-blue-400/20 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-purple-400/20 rotate-12 animate-spin-slow-reverse"></div>
      <div className="absolute top-1/2 right-1/6 w-8 h-8 border border-cyan-400/20 rotate-45 animate-spin-slow"></div>
      
      {/* Floating lines */}
      <div className="absolute top-1/3 left-1/6 w-24 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/6 w-32 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse delay-1000"></div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-4 lg:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            ClassManager
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          <Button variant="ghost" asChild className="text-blue-200 hover:text-white hover:bg-white/10 text-sm lg:text-base px-3 lg:px-4 py-2">
            <a href="#contact" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </Button>
          <Button variant="ghost" asChild className="text-blue-200 hover:text-white hover:bg-white/10 text-sm lg:text-base px-3 lg:px-4 py-2">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button asChild className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg text-sm lg:text-base px-3 lg:px-4 py-2">
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-blue-200 hover:text-white hover:bg-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden relative z-10 bg-white/5 backdrop-blur-sm border-b border-white/10">
          <div className="px-4 py-6 space-y-4">
            <Button 
              variant="ghost" 
              asChild 
              className="w-full justify-start text-blue-200 hover:text-white hover:bg-white/10 text-base py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <a href="#contact" className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Contact
              </a>
            </Button>
            <Button 
              variant="ghost" 
              asChild 
              className="w-full justify-start text-blue-200 hover:text-white hover:bg-white/10 text-base py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link to="/login">Sign In</Link>
            </Button>
            <Button 
              asChild 
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-base py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        {/* Additional hero background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large central glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-glow"></div>
          
          {/* Floating geometric patterns */}
          <div className="absolute top-1/4 left-1/5 w-20 h-20 border-2 border-blue-400/20 rounded-lg rotate-45 animate-spin-slow"></div>
          <div className="absolute top-1/3 right-1/5 w-16 h-16 border-2 border-purple-400/20 rounded-full animate-spin-slow-reverse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border-2 border-cyan-400/20 rotate-12 animate-spin-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-14 h-14 border-2 border-pink-400/20 rounded-lg animate-spin-slow-reverse"></div>
          
          {/* Subtle particle effects */}
          <div className="absolute top-1/5 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
          <div className="absolute top-2/5 right-1/3 w-1.5 h-1.5 bg-blue-300/40 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-1/5 left-1/2 w-1 h-1 bg-purple-300/40 rounded-full animate-ping delay-2000"></div>
          <div className="absolute bottom-2/5 right-1/2 w-1.5 h-1.5 bg-cyan-300/40 rounded-full animate-ping delay-3000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-8 relative z-20">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg animate-float">
            <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-white">AI-Powered Digital Classroom</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
                AI-Powered Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
                Classroom Platform
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed px-4 drop-shadow-md">
              Revolutionize education with AI-powered auto-grading, OCR text recognition, 
              and intelligent scoring using Google's Gemini AI. Built for the future of learning.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto hover:scale-105"
            >
              <Link to="/signup" className="flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-white/30 text-blue-600 hover:text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm w-full sm:w-auto hover:scale-105 transition-all duration-300"
            >
              <Link to="/login" className="flex items-center justify-center gap-2">
                Sign In
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 px-6 lg:px-12 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Powered by <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Advanced AI</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience the next generation of educational technology with cutting-edge AI capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Auto-Grading */}
            <div className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Auto-Grading</h3>
                <p className="text-blue-100 leading-relaxed">
                  Intelligent scoring using Google's Gemini AI that compares student submissions with provided solutions for accurate, consistent grading.
                </p>
              </div>
            </div>

            {/* OCR Integration */}
            <div className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">OCR Text Recognition</h3>
                <p className="text-blue-100 leading-relaxed">
                  Advanced optical character recognition for handwritten submissions, ensuring no student work goes ungraded.
                </p>
              </div>
            </div>

            {/* Real-time Updates */}
            <div className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Real-time Updates</h3>
                <p className="text-blue-100 leading-relaxed">
                  Live feedback and notifications keep teachers and students connected with instant updates on assignments and grades.
                </p>
              </div>
            </div>

            {/* Role-based Access */}
            <div className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Role-based Access</h3>
                <p className="text-blue-100 leading-relaxed">
                  Separate interfaces for teachers and students with secure authentication and permission management.
                </p>
              </div>
            </div>

            {/* Class Management */}
            <div className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Class Management</h3>
                <p className="text-blue-100 leading-relaxed">
                  Create and manage classes with student enrollment, assignment distribution, and progress tracking.
                </p>
              </div>
            </div>

            {/* Manual Scoring */}
            <div className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Manual Scoring</h3>
                <p className="text-blue-100 leading-relaxed">
                  Teachers can manually set and override scores with flexible decimal scoring and bulk operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative z-10 px-6 lg:px-12 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              How It <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Simple steps to transform your classroom experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">1. Create & Join</h3>
              <p className="text-blue-100 leading-relaxed">
                Teachers create classes and share codes. Students join with a simple code to access their digital classroom.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">2. Assign & Submit</h3>
              <p className="text-blue-100 leading-relaxed">
                Teachers upload assignments and solutions. Students submit their work digitally or through handwritten uploads.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">3. AI Grading</h3>
              <p className="text-blue-100 leading-relaxed">
                Our AI analyzes submissions, extracts text from handwritten work, and provides intelligent scoring with detailed feedback.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative z-10 px-6 lg:px-12 py-32 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">ClassManager</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience the advantages of AI-powered education technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Save Time</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Reduce grading time by up to 90% with automated AI scoring
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Better Insights</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Get detailed analytics and progress tracking for every student
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Secure & Private</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Enterprise-grade security with encrypted data and privacy protection
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Accessible</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Works on any device, anywhere, with offline capabilities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative z-10 px-6 lg:px-12 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Educators <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Say</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join thousands of satisfied teachers and students worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                "ClassManager has revolutionized how I grade assignments. The AI is incredibly accurate and saves me hours every week."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">SM</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Sarah Mitchell</div>
                  <div className="text-blue-200 text-sm">Math Teacher, Stanford University</div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                "The OCR feature is amazing! It can read my handwritten math problems perfectly. This is the future of education."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">DJ</span>
                </div>
                <div>
                  <div className="font-semibold text-white">David Johnson</div>
                  <div className="text-blue-200 text-sm">Physics Professor, MIT</div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                "As a student, I love getting instant feedback on my assignments. The platform is intuitive and makes learning more engaging."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">EM</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Emma Rodriguez</div>
                  <div className="text-blue-200 text-sm">Computer Science Student, Berkeley</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 px-6 lg:px-12 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <div className="text-xl text-blue-100">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <div className="text-xl text-blue-100">Assignments Graded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-xl text-blue-100">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-xl text-blue-100">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="relative z-10 px-6 lg:px-12 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Education?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of educators and students who are already experiencing the future of learning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
              >
                <Link to="/signup" className="flex items-center justify-center gap-2">
                  Get Started Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="border-white/30 text-blue-600 hover:text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm w-full sm:w-auto"
              >
                <Link to="/login" className="flex items-center justify-center gap-2">
                  Sign In
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="relative z-10 px-6 lg:px-12 py-32 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Have questions about ClassManager? Want to collaborate or provide feedback? I'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="group text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Email</h3>
              <p className="text-blue-100 mb-6 leading-relaxed flex-grow">
                Send me an email for any inquiries, feedback, or collaboration opportunities.
              </p>
              <a 
                href="mailto:zainrazzaq2003@gmail.com" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 w-full"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm sm:text-base">zainrazzaq2003@gmail.com</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* LinkedIn */}
            <div className="group text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">LinkedIn</h3>
              <p className="text-blue-100 mb-6 leading-relaxed flex-grow">
                Connect with me on LinkedIn for professional networking and updates about my projects.
              </p>
              <a 
                href="https://www.linkedin.com/in/zain-razzaq-96a084228/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 w-full"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm sm:text-base">Connect on LinkedIn</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* GitHub */}
            <div className="group text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">GitHub</h3>
              <p className="text-blue-100 mb-6 leading-relaxed flex-grow">
                Check out my code repositories, contributions, and open-source projects on GitHub.
              </p>
              <a 
                href="https://github.com/Zain-Razzaq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 w-full"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm sm:text-base">View on GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">About This Project</h3>
              <p className="text-blue-100 leading-relaxed max-w-4xl mx-auto">
                ClassManager is my personal project, showcasing modern web development practices, 
                AI integration, and full-stack architecture. Built with React, Django, and powered by Google's Gemini AI, 
                this platform demonstrates the future of educational technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 px-6 lg:px-12 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              ClassManager
            </span>
          </div>
          <div className="text-blue-200 text-sm">
            © 2024 ClassManager. Built for the future of education.
          </div>
        </div>
      </footer>
    </div>
  );
}
