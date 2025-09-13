import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import Header from '@/components/Header';

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <AnalyticsDashboard />
      </div>
    </div>
  );
}