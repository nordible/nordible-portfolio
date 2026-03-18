import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, Calendar, User, Mail, Phone, DollarSign, FileText, Clock } from 'lucide-react';

interface Lead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  description: string;
  status: 'new' | 'reviewed' | 'pursued' | 'declined';
  submittedAt: string;
}

interface LeadDashboardProps {
  onBack: () => void;
}

export default function LeadDashboard({ onBack }: LeadDashboardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  // Mock data for demonstration
  const [leads, setLeads] = useState<Lead[]>([
    {
      id: '1',
      fullName: 'John Smith',
      email: 'john.smith@techcorp.com',
      phone: '+1 (555) 123-4567',
      projectType: 'e-commerce',
      budget: '10k-25k',
      description: 'Looking to build a custom e-commerce platform for our B2B business. We need advanced inventory management and integration with our existing ERP system.',
      status: 'new',
      submittedAt: '2024-01-15T10:30:00Z'
    },
    {
      id: '2',
      fullName: 'Sarah Johnson',
      email: 'sarah@startupxyz.com',
      phone: '+1 (555) 987-6543',
      projectType: 'custom-application',
      budget: '5k-10k',
      description: 'Need a dashboard application for our internal team to manage customer data and generate reports.',
      status: 'pursued',
      submittedAt: '2024-01-14T14:15:00Z'
    },
    {
      id: '3',
      fullName: 'Michael Brown',
      email: 'mike.brown@email.com',
      phone: '+1 (555) 456-7890',
      projectType: 'business-website',
      budget: '1k-5k',
      description: 'Simple business website for my consulting firm. Need it to be professional and mobile-friendly.',
      status: 'declined',
      submittedAt: '2024-01-13T09:45:00Z'
    }
  ]);

  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check for demo - in production, this would be secure authentication
    if (password === 'demo123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid password. Use "demo123" for this demo.');
    }
  };

  const handleDeclineLead = (leadId: string) => {
    setLeads(leads.map(lead => 
      lead.id === leadId 
        ? { ...lead, status: 'declined' as const }
        : lead
    ));
    // In real implementation, this would trigger an email to the client
    alert('Lead declined. Polite rejection email would be sent to the client.');
  };

  const handlePursueLead = (lead: Lead) => {
    setSelectedLead(lead);
    setShowAppointmentModal(true);
  };

  const handleBookAppointment = () => {
    if (selectedLead) {
      setLeads(leads.map(lead => 
        lead.id === selectedLead.id 
          ? { ...lead, status: 'pursued' as const }
          : lead
      ));
      setShowAppointmentModal(false);
      setSelectedLead(null);
      // In real implementation, this would integrate with calendar APIs and send notifications
      alert('Appointment booked! Confirmation emails, SMS, and WhatsApp messages would be sent to the client with calendar invites and reminders.');
    }
  };

  const getStatusColor = (status: Lead['status']) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'pursued':
        return 'bg-green-100 text-green-800';
      case 'declined':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getProjectTypeLabel = (type: string) => {
    switch (type) {
      case 'e-commerce':
        return 'E-Commerce';
      case 'business-website':
        return 'Business Website';
      case 'custom-application':
        return 'Custom Application';
      default:
        return 'Other';
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8">
          <div>
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Website</span>
            </button>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">Lead Dashboard</h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
              Enter password to access lead management system
            </p>
          </div>
          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Sign in
            </button>
          </form>
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">Demo password: demo123</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Website</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Lead Management Dashboard</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Manage and track all incoming project inquiries</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {leads.map((lead) => (
            <div key={lead.id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <User className="h-6 w-6 text-gray-400 dark:text-gray-500" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{lead.fullName}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Submitted {new Date(lead.submittedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(lead.status)}`}>
                    {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                  </span>
                </div>
              </div>

              <div className="px-6 py-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{lead.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{lead.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{getProjectTypeLabel(lead.projectType)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">${lead.budget}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                    {lead.description}
                  </p>
                </div>

                {lead.status === 'new' && (
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleDeclineLead(lead.id)}
                      className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                    >
                      <XCircle className="h-4 w-4" />
                      <span>Decline Lead</span>
                    </button>
                    <button
                      onClick={() => handlePursueLead(lead)}
                      className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span>Pursue Lead</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Appointment Booking Modal */}
        {showAppointmentModal && selectedLead && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Book Appointment</h3>
                <button
                  onClick={() => setShowAppointmentModal(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Client: {selectedLead.fullName}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Project: {getProjectTypeLabel(selectedLead.projectType)}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Appointment Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    min={new Date().toISOString().slice(0, 16)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Meeting Type
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                    <option value="video">Video Call</option>
                    <option value="phone">Phone Call</option>
                    <option value="in-person">In Person</option>
                  </select>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={() => setShowAppointmentModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleBookAppointment}
                    className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Book Appointment</span>
                  </button>
                </div>
              </div>

              <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Clock className="h-4 w-4 text-purple-500 dark:text-purple-400 mt-0.5" />
                  <div className="text-xs text-purple-700 dark:text-purple-300">
                    <p className="font-medium">Automated notifications will be sent:</p>
                    <ul className="mt-1 space-y-1">
                      <li>• Immediate confirmation (Email, SMS, WhatsApp)</li>
                      <li>• 24-hour reminder</li>
                      <li>• 1-hour reminder</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}