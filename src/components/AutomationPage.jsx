// AutomationPage.jsx
import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  StopCircle, 
  Settings, 
  Clock, 
  Calendar,
  Activity,
  RefreshCw,
  Download,
  Upload,
  Trash2,
  Edit,
  Copy,
  CheckCircle,
  AlertCircle,
  Zap,
  BarChart3,
  Users,
  Mail,
  Database,
  FileText,
  Bell,
  Shield,
  Globe,
  Plus,
  Search,
  Filter,
  MoreVertical,
  TrendingUp,
  AlertTriangle,
  ChevronRight,
  Eye,
  EyeOff,
  Star,
  StarOff,
  Archive,
  PlayCircle,
  PauseCircle,
  CheckCircle2,
  XCircle,
  Clock4,
  CalendarDays,
  ArrowUpRight,
  ArrowDownRight,
  Menu,
  X,
  Sun,
  Moon,
  User,
  LogOut,
  HelpCircle,
  BellRing
} from 'lucide-react';

const AutomationPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedAutomation, setSelectedAutomation] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data
  const [automations, setAutomations] = useState([
    {
      id: 1,
      name: 'Daily Data Backup',
      description: 'Automated backup of user data every day at 2 AM',
      status: 'active',
      lastRun: '2024-01-15T02:00:00',
      nextRun: '2024-01-16T02:00:00',
      type: 'scheduled',
      category: 'database',
      successRate: 98.5,
      totalRuns: 1245,
      favorite: true,
      tags: ['backup', 'database', 'critical'],
      icon: 'database'
    },
    {
      id: 2,
      name: 'Welcome Email Sequence',
      description: 'Send personalized welcome emails to new users',
      status: 'active',
      lastRun: '2024-01-15T10:30:00',
      nextRun: '2024-01-16T10:30:00',
      type: 'trigger',
      category: 'email',
      successRate: 99.2,
      totalRuns: 3456,
      favorite: true,
      tags: ['email', 'marketing', 'onboarding'],
      icon: 'mail'
    },
    {
      id: 3,
      name: 'Weekly Analytics Report',
      description: 'Generate and distribute weekly performance reports',
      status: 'paused',
      lastRun: '2024-01-14T09:00:00',
      nextRun: 'Not scheduled',
      type: 'scheduled',
      category: 'analytics',
      successRate: 96.8,
      totalRuns: 567,
      favorite: false,
      tags: ['analytics', 'report', 'weekly'],
      icon: 'analytics'
    },
    {
      id: 4,
      name: 'User Data Sync',
      description: 'Synchronize user data across platforms',
      status: 'failed',
      lastRun: '2024-01-15T15:45:00',
      nextRun: '2024-01-16T15:45:00',
      type: 'scheduled',
      category: 'database',
      successRate: 92.3,
      totalRuns: 2345,
      favorite: false,
      tags: ['sync', 'database', 'integration'],
      icon: 'sync'
    },
    {
      id: 5,
      name: 'Security Scan',
      description: 'Daily security vulnerability assessment',
      status: 'active',
      lastRun: '2024-01-15T04:00:00',
      nextRun: '2024-01-16T04:00:00',
      type: 'scheduled',
      category: 'security',
      successRate: 100,
      totalRuns: 892,
      favorite: true,
      tags: ['security', 'scan', 'compliance'],
      icon: 'security'
    },
    {
      id: 6,
      name: 'Invoice Generator',
      description: 'Generate and send invoices to customers',
      status: 'active',
      lastRun: '2024-01-15T08:00:00',
      nextRun: '2024-01-16T08:00:00',
      type: 'scheduled',
      category: 'finance',
      successRate: 99.7,
      totalRuns: 1789,
      favorite: false,
      tags: ['finance', 'invoice', 'billing'],
      icon: 'invoice'
    }
  ]);

  // Recent activity data
  const recentActivity = [
    { id: 1, automation: 'Daily Data Backup', status: 'success', time: '5 minutes ago', duration: '2.3s' },
    { id: 2, automation: 'Welcome Email Sequence', status: 'success', time: '15 minutes ago', duration: '1.8s' },
    { id: 3, automation: 'User Data Sync', status: 'failed', time: '25 minutes ago', duration: '0.5s', error: 'Connection timeout' },
    { id: 4, automation: 'Security Scan', status: 'success', time: '1 hour ago', duration: '4.2s' },
    { id: 5, automation: 'Invoice Generator', status: 'success', time: '2 hours ago', duration: '3.1s' },
  ];

  // Stats data
  const stats = [
    { label: 'Total Automations', value: '24', change: '+12%', icon: Zap, color: 'blue' },
    { label: 'Active Workflows', value: '18', change: '+8%', icon: PlayCircle, color: 'green' },
    { label: 'Completed Today', value: '156', change: '+23%', icon: CheckCircle2, color: 'purple' },
    { label: 'Failed Jobs', value: '3', change: '-15%', icon: XCircle, color: 'red' },
    { label: 'Avg Response Time', value: '1.2s', change: '-0.3s', icon: Clock4, color: 'orange' },
    { label: 'Success Rate', value: '98.5%', change: '+2.1%', icon: TrendingUp, color: 'emerald' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800',
      paused: 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800',
      failed: 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800',
      pending: 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700'
    };
    return colors[status] || colors.pending;
  };

  const getIcon = (icon) => {
    const icons = {
      database: Database,
      mail: Mail,
      analytics: BarChart3,
      sync: RefreshCw,
      security: Shield,
      invoice: FileText,
      default: Settings
    };
    const IconComponent = icons[icon] || icons.default;
    return <IconComponent className="w-5 h-5" />;
  };

  const formatDate = (dateString) => {
    if (!dateString || dateString === 'Not scheduled') return 'Not scheduled';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const toggleFavorite = (id) => {
    setAutomations(automations.map(automation => 
      automation.id === id ? { ...automation, favorite: !automation.favorite } : automation
    ));
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="h-full flex flex-col">
            {/* Sidebar Header */}
            <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">AutoFlow</span>
              </div>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Sidebar Navigation */}
            <nav className="flex-1 overflow-y-auto p-4">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">Main</p>
                  <div className="space-y-1">
                    {[
                      { icon: Zap, label: 'Dashboard', active: true },
                      { icon: PlayCircle, label: 'Automations', badge: '12' },
                      { icon: Clock4, label: 'Schedule' },
                      { icon: Activity, label: 'Activity Log' },
                    ].map((item) => (
                      <a
                        key={item.label}
                        href="#"
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                          item.active 
                            ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="flex-1 text-sm font-medium">{item.label}</span>
                        {item.badge && (
                          <span className="px-2 py-0.5 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">Categories</p>
                  <div className="space-y-1">
                    {[
                      { icon: Database, label: 'Database', count: 4 },
                      { icon: Mail, label: 'Email', count: 3 },
                      { icon: BarChart3, label: 'Analytics', count: 2 },
                      { icon: Shield, label: 'Security', count: 1 },
                      { icon: FileText, label: 'Finance', count: 2 },
                    ].map((item) => (
                      <a
                        key={item.label}
                        href="#"
                        className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="flex-1 text-sm">{item.label}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{item.count}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">Settings</p>
                  <div className="space-y-1">
                    {[
                      { icon: Settings, label: 'Workflow Settings' },
                      { icon: Users, label: 'Team' },
                      { icon: Bell, label: 'Notifications' },
                      { icon: Shield, label: 'Security' },
                    ].map((item) => (
                      <a
                        key={item.label}
                        href="#"
                        className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="text-sm">{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold">
                  JD
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">John Doe</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Admin</p>
                </div>
                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <LogOut className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:pl-64' : ''}`}>
          {/* Header */}
          <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
            <div className="px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden"
                  >
                    <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </button>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Automations</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Manage and monitor your automated workflows
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  {/* Search */}
                  <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search automations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent w-64"
                    />
                  </div>

                  {/* Theme Toggle */}
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {darkMode ? <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
                  </button>

                  {/* Notifications */}
                  <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative">
                    <BellRing className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>

                  {/* Create Button */}
                  <button
                    onClick={() => setShowCreateModal(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span className="hidden sm:inline">New Automation</span>
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="p-4 sm:p-6 lg:p-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                const isPositive = stat.change.startsWith('+');
                return (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 bg-${stat.color}-100 dark:bg-${stat.color}-900/30 rounded-lg`}>
                        <IconComponent className={`w-4 h-4 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                      </div>
                      <span className={`text-xs font-medium ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Filters and View Toggle */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <div className="flex flex-wrap gap-2">
                    {['all', 'active', 'paused', 'failed', 'pending'].map((filterOption) => (
                      <button
                        key={filterOption}
                        onClick={() => setFilter(filterOption)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium capitalize transition-colors ${
                          filter === filterOption 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        {filterOption}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg ${
                      viewMode === 'grid' 
                        ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white' 
                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Menu className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg ${
                      viewMode === 'list' 
                        ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white' 
                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Menu className="w-4 h-4 rotate-90" />
                  </button>
                  <button className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Automations Grid/List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {automations.map((automation) => {
                  const StatusIcon = automation.status === 'active' ? PlayCircle : 
                                    automation.status === 'paused' ? PauseCircle :
                                    automation.status === 'failed' ? XCircle : Clock4;
                  
                  return (
                    <div
                      key={automation.id}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all cursor-pointer group"
                      onClick={() => setSelectedAutomation(automation.id)}
                    >
                      <div className="p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${
                              automation.status === 'active' ? 'bg-green-100 dark:bg-green-900/30' :
                              automation.status === 'paused' ? 'bg-yellow-100 dark:bg-yellow-900/30' :
                              automation.status === 'failed' ? 'bg-red-100 dark:bg-red-900/30' :
                              'bg-gray-100 dark:bg-gray-700'
                            }`}>
                              {getIcon(automation.icon)}
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 dark:text-white">{automation.name}</h3>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{automation.category}</p>
                            </div>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavorite(automation.id);
                            }}
                            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                          >
                            {automation.favorite ? 
                              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> : 
                              <StarOff className="w-4 h-4 text-gray-400" />
                            }
                          </button>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                          {automation.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {automation.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Status and Schedule */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <StatusIcon className={`w-4 h-4 ${
                                automation.status === 'active' ? 'text-green-500' :
                                automation.status === 'paused' ? 'text-yellow-500' :
                                automation.status === 'failed' ? 'text-red-500' :
                                'text-gray-500'
                              }`} />
                              <span className={`text-xs font-medium capitalize ${getStatusColor(automation.status)}`}>
                                {automation.status}
                              </span>
                            </div>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              Success: {automation.successRate}%
                            </span>
                          </div>
                          
                          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                            <Clock className="w-3 h-3 mr-1" />
                            Last: {formatDate(automation.lastRun)}
                          </div>
                          
                          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                            <Calendar className="w-3 h-3 mr-1" />
                            Next: {formatDate(automation.nextRun)}
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full mb-4">
                          <div 
                            className="h-1 bg-blue-600 rounded-full" 
                            style={{ width: `${automation.successRate}%` }}
                          ></div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" title="Run now">
                              <Play className="w-4 h-4 text-green-600 dark:text-green-400" />
                            </button>
                            <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" title="Pause">
                              <Pause className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                            </button>
                            <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" title="Edit">
                              <Edit className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </button>
                            <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" title="Duplicate">
                              <Copy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                            </button>
                          </div>
                          <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                            <MoreVertical className="w-4 h-4 text-gray-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* List View */
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Automation</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Last Run</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Next Run</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Success Rate</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {automations.map((automation) => (
                      <tr 
                        key={automation.id} 
                        className={`hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer ${
                          selectedAutomation === automation.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                        }`}
                        onClick={() => setSelectedAutomation(automation.id)}
                      >
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(automation.status)}`}>
                            {automation.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${
                              automation.status === 'active' ? 'bg-green-100 dark:bg-green-900/30' :
                              automation.status === 'paused' ? 'bg-yellow-100 dark:bg-yellow-900/30' :
                              automation.status === 'failed' ? 'bg-red-100 dark:bg-red-900/30' :
                              'bg-gray-100 dark:bg-gray-700'
                            }`}>
                              {getIcon(automation.icon)}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">{automation.name}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{automation.description}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-white capitalize">{automation.category}</td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{formatDate(automation.lastRun)}</td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{formatDate(automation.nextRun)}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-900 dark:text-white">{automation.successRate}%</span>
                            <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full">
                              <div 
                                className="h-1.5 bg-blue-600 rounded-full" 
                                style={{ width: `${automation.successRate}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                              <Play className="w-4 h-4 text-green-600 dark:text-green-400" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                              <Pause className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                              <Edit className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                              <MoreVertical className="w-4 h-4 text-gray-500" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Recent Activity and Upcoming Jobs */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
                  <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View all</button>
                </div>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className={`mt-0.5 ${
                        activity.status === 'success' ? 'text-green-500' :
                        activity.status === 'failed' ? 'text-red-500' : 'text-gray-500'
                      }`}>
                        {activity.status === 'success' ? <CheckCircle className="w-4 h-4" /> :
                         activity.status === 'failed' ? <XCircle className="w-4 h-4" /> :
                         <Clock className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.automation}</p>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`text-xs ${
                            activity.status === 'success' ? 'text-green-600 dark:text-green-400' :
                            activity.status === 'failed' ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'
                          }`}>
                            {activity.status === 'success' ? 'Completed' : 
                             activity.status === 'failed' ? `Failed: ${activity.error}` : 'Processing'}
                          </span>
                          {activity.duration && (
                            <>
                              <span className="text-xs text-gray-400">•</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">Duration: {activity.duration}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Jobs */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Schedule</h3>
                  <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Manage</button>
                </div>
                <div className="space-y-4">
                  {automations.filter(a => a.status === 'active' && a.nextRun !== 'Not scheduled').slice(0, 4).map((automation) => (
                    <div key={automation.id} className="flex items-center justify-between group hover:bg-gray-50 dark:hover:bg-gray-700/50 p-2 rounded-lg transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          automation.status === 'active' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-gray-100 dark:bg-gray-700'
                        }`}>
                          {getIcon(automation.icon)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{automation.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{formatDate(automation.nextRun)}</p>
                        </div>
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-all">
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Create Automation Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Create New Automation</h2>
                  <button 
                    onClick={() => setShowCreateModal(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <form className="space-y-6">
                  {/* Basic Info */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Automation Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="e.g., Daily Backup"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Description
                    </label>
                    <textarea 
                      rows="3" 
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Describe what this automation does"
                    ></textarea>
                  </div>

                  {/* Category and Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Category
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                        <option>Database</option>
                        <option>Email</option>
                        <option>Analytics</option>
                        <option>Security</option>
                        <option>Finance</option>
                        <option>Custom</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Trigger Type
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                        <option>Scheduled</option>
                        <option>Event-based</option>
                        <option>Webhook</option>
                        <option>Manual</option>
                        <option>API Call</option>
                      </select>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Schedule
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="e.g., Daily at 2 AM"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Timezone
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                        <option>UTC</option>
                        <option>EST</option>
                        <option>PST</option>
                        <option>GMT</option>
                        <option>IST</option>
                      </select>
                    </div>
                  </div>

                  {/* Notifications */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Notifications
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Email on success</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Email on failure</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Slack notifications</span>
                      </label>
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Tags
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Add tags (comma separated)"
                    />
                  </div>
                </form>
              </div>
              <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-3">
                <button 
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Create Automation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutomationPage;