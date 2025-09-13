'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { api } from '@/lib/api';

interface AnalyticsData {
  id: number;
  consent_type: string;
  total_pages: number;
  session_duration: number;
  ip_address: string;
  location: string;
  createdAt: string;
}

export default function AnalyticsDashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const data = await api.getAllAnalytics();
      setAnalytics(data.data || []);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadExcel = async () => {
    try {
      setDownloading(true);
      const blob = await api.downloadExcelReport();
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `analytics-report-${new Date().toISOString().split('T')[0]}.xlsx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading report:', error);
    } finally {
      setDownloading(false);
    }
  };

  const acceptedCount = analytics.filter(item => item.consent_type === 'accepted').length;
  const deniedCount = analytics.filter(item => item.consent_type === 'denied').length;
  const totalSessions = analytics.length;

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-charcoal">Analytics Dashboard</h2>
        <Button 
          onClick={downloadExcel}
          disabled={downloading}
          className="bg-orange hover:bg-orange/90"
        >
          {downloading ? 'Downloading...' : 'Download Excel Report'}
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-charcoal">{totalSessions}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Cookies Accepted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{acceptedCount}</div>
            <div className="text-xs text-gray-500">
              {totalSessions > 0 ? Math.round((acceptedCount / totalSessions) * 100) : 0}% acceptance rate
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Cookies Denied</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{deniedCount}</div>
            <div className="text-xs text-gray-500">
              {totalSessions > 0 ? Math.round((deniedCount / totalSessions) * 100) : 0}% denial rate
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Date</th>
                  <th className="text-left p-2">Consent</th>
                  <th className="text-left p-2">Pages</th>
                  <th className="text-left p-2">Duration</th>
                  <th className="text-left p-2">Location</th>
                </tr>
              </thead>
              <tbody>
                {analytics.slice(0, 10).map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="p-2">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.consent_type === 'accepted' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {item.consent_type}
                      </span>
                    </td>
                    <td className="p-2">{item.total_pages}</td>
                    <td className="p-2">{item.session_duration}s</td>
                    <td className="p-2">{item.location || 'Unknown'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}