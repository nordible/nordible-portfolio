import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, User, Mail, Phone, DollarSign, FileText, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

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

export default function LeadDashboard() {
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
      alert('Appointment booked! Confirmation emails and notifications would be sent to the client.');
    }
  };

  const getStatusColor = (status: Lead['status']) => {
    switch (status) {
      case 'new':
        return 'bg-blue-50 text-nordible-blue border-blue-100';
      case 'pursued':
        return 'bg-green-50 text-green-700 border-green-100';
      case 'declined':
        return 'bg-red-50 text-red-700 border-red-100';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-100';
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
      <div className="min-h-screen bg-nordible-bg dark:bg-gray-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-10">
          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-gray-500 hover:text-nordible-blue mb-10 font-bold text-sm uppercase tracking-widest transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Website</span>
            </Link>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-2 shadow-lg shadow-blue-500/10 border border-nordible-border mx-auto mb-6">
              <img src="/images/logo-email.webp" alt="Nordible Logo" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-3xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">Admin Gateway</h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400 font-medium">
              Secure access to lead management system
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="card-premium p-8">
              <label htmlFor="password" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">
                Access Key
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-5 py-4 rounded-xl bg-nordible-bg dark:bg-gray-900 border border-nordible-border dark:border-gray-700 text-nordible-dark dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nordible-blue/50 transition-all font-semibold"
                placeholder="••••••••"
              />
              <button
                type="submit"
                className="w-full mt-6 btn-primary py-4"
              >
                Unlock Access
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Demo Key: demo123</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nordible-bg dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-gray-500 hover:text-nordible-blue mb-4 font-bold text-xs uppercase tracking-widest transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Website</span>
            </Link>
            <h1 className="text-4xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">Leads Dashboard</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400 font-medium text-lg">Manage and track all incoming project inquiries</p>
          </div>
          <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-2xl border border-nordible-border dark:border-gray-700">
             <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-gray-700 flex items-center justify-center">
                <Shield className="h-6 w-6 text-nordible-blue" />
             </div>
             <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Admin Status</div>
                <div className="text-sm font-extrabold text-nordible-dark dark:text-white uppercase tracking-tight">Encrypted Session</div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {leads.map((lead) => (
            <div key={lead.id} className="card-premium overflow-hidden !p-0">
              <div className="px-8 py-6 border-b border-nordible-border dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-sm">
                       <User className="h-6 w-6 text-nordible-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">{lead.fullName}</h3>
                      <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                        Submitted {new Date(lead.submittedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest border ${getStatusColor(lead.status)}`}>
                    {lead.status}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                  <div className="flex items-center space-x-3 group">
                    <div className="p-2 bg-nordible-bg dark:bg-gray-800 rounded-lg group-hover:bg-blue-50 transition-colors">
                      <Mail className="h-4 w-4 text-nordible-blue" />
                    </div>
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-300">{lead.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="p-2 bg-nordible-bg dark:bg-gray-800 rounded-lg group-hover:bg-blue-50 transition-colors">
                      <Phone className="h-4 w-4 text-nordible-blue" />
                    </div>
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-300">{lead.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="p-2 bg-nordible-bg dark:bg-gray-800 rounded-lg group-hover:bg-blue-50 transition-colors">
                      <FileText className="h-4 w-4 text-nordible-blue" />
                    </div>
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-300">{getProjectTypeLabel(lead.projectType)}</span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="p-2 bg-nordible-bg dark:bg-gray-800 rounded-lg group-hover:bg-blue-50 transition-colors">
                      <DollarSign className="h-4 w-4 text-nordible-blue" />
                    </div>
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-300">${lead.budget}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-gray-700 dark:text-gray-300 bg-nordible-bg dark:bg-gray-800 p-6 rounded-2xl border border-nordible-border dark:border-gray-700 font-medium leading-relaxed">
                    {lead.description}
                  </p>
                </div>

                {lead.status === 'new' && (
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => handleDeclineLead(lead.id)}
                      className="flex-1 flex items-center justify-center space-x-2 px-6 py-4 bg-red-50 text-red-700 font-extrabold uppercase tracking-widest text-xs rounded-xl hover:bg-red-100 transition-colors border border-red-100"
                    >
                      <XCircle className="h-4 w-4" />
                      <span>Decline Lead</span>
                    </button>
                    <button
                      onClick={() => handlePursueLead(lead)}
                      className="flex-1 flex items-center justify-center space-x-2 px-6 py-4 bg-nordible-blue text-white font-extrabold uppercase tracking-widest text-xs rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
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
          <div className="fixed inset-0 bg-nordible-dark/80 flex items-center justify-center p-4 z-50 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white dark:bg-gray-800 rounded-[32px] max-w-md w-full p-10 border border-nordible-border dark:border-gray-700 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-8 relative z-10">
                <h3 className="text-2xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight">Book Meet</h3>
                <button
                  onClick={() => setShowAppointmentModal(false)}
                  className="p-2 hover:bg-nordible-bg dark:hover:bg-gray-700 rounded-xl transition-colors"
                >
                  <XCircle className="h-6 w-6 text-gray-400" />
                </button>
              </div>

              <div className="mb-8 p-4 bg-nordible-bg dark:bg-gray-900 rounded-2xl relative z-10">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Project</div>
                <div className="text-sm font-extrabold text-nordible-dark dark:text-white uppercase tracking-tight">{getProjectTypeLabel(selectedLead.projectType)} for {selectedLead.fullName}</div>
              </div>

              <div className="space-y-6 relative z-10">
                <div>
                  <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">
                    Schedule Protocol
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full px-5 py-4 rounded-xl bg-nordible-bg dark:bg-gray-900 border border-nordible-border dark:border-gray-700 text-nordible-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-nordible-blue/50 font-semibold"
                    min={new Date().toISOString().slice(0, 16)}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">
                    Meeting Mode
                  </label>
                  <select className="w-full px-5 py-4 rounded-xl bg-nordible-bg dark:bg-gray-900 border border-nordible-border dark:border-gray-700 text-nordible-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-nordible-blue/50 font-semibold appearance-none">
                    <option value="video">Video Call (Google Meet)</option>
                    <option value="phone">Voice Call</option>
                    <option value="in-person">On-site Protocol</option>
                  </select>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setShowAppointmentModal(false)}
                    className="flex-1 px-6 py-4 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors"
                  >
                    Abort
                  </button>
                  <button
                    onClick={handleBookAppointment}
                    className="flex-1 btn-primary py-4 text-xs tracking-widest"
                  >
                    Confirm Meet
                  </button>
                </div>
              </div>

              <div className="mt-8 p-5 bg-blue-50 dark:bg-gray-900/50 rounded-2xl border border-blue-100 dark:border-gray-700 relative z-10">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-nordible-blue mt-0.5" />
                  <div className="text-xs text-nordible-dark dark:text-gray-300 leading-relaxed">
                    <p className="font-extrabold uppercase tracking-widest mb-2 text-[10px] text-blue-600">Automated Dispatch</p>
                    <ul className="space-y-1 font-medium">
                      <li>• Confirmation (Email, WhatsApp)</li>
                      <li>• 24-hour reminder protocol</li>
                      <li>• 1-hour final sync notification</li>
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
