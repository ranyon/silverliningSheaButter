import React from 'react';
import { DollarSign, Package, Users, TrendingUp } from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-serif text-brand-900">Dashboard Overview</h1>
                <p className="text-textSec mt-2">Welcome back to Silver Lining Admin</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl border border-brand-100 shadow-sm flex items-start justify-between">
                    <div>
                        <p className="text-sm text-textSec font-medium mb-1">Total Revenue</p>
                        <h3 className="text-2xl font-serif text-brand-900">$12,450.00</h3>
                        <p className="text-xs text-green-600 mt-2 flex items-center"><TrendingUp className="w-3 h-3 mr-1" />+15% this month</p>
                    </div>
                    <div className="bg-brand-50 p-3 rounded-lg text-brand-700">
                        <DollarSign className="w-6 h-6" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-brand-100 shadow-sm flex items-start justify-between">
                    <div>
                        <p className="text-sm text-textSec font-medium mb-1">Total Orders</p>
                        <h3 className="text-2xl font-serif text-brand-900">342</h3>
                        <p className="text-xs text-green-600 mt-2 flex items-center"><TrendingUp className="w-3 h-3 mr-1" />+5% this month</p>
                    </div>
                    <div className="bg-brand-50 p-3 rounded-lg text-brand-700">
                        <Package className="w-6 h-6" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-brand-100 shadow-sm flex items-start justify-between">
                    <div>
                        <p className="text-sm text-textSec font-medium mb-1">Total Customers</p>
                        <h3 className="text-2xl font-serif text-brand-900">1,204</h3>
                        <p className="text-xs text-textSec mt-2 flex items-center">8 new today</p>
                    </div>
                    <div className="bg-brand-50 p-3 rounded-lg text-brand-700">
                        <Users className="w-6 h-6" />
                    </div>
                </div>
            </div>

            {/* Recent Orders Section */}
            <div className="bg-white rounded-xl border border-brand-100 shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-brand-100">
                    <h2 className="text-xl font-serif text-brand-900">Recent Orders</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-textSec">
                        <thead className="text-xs uppercase bg-surface text-textPrime">
                            <tr>
                                <th className="px-6 py-4 font-medium">Order ID</th>
                                <th className="px-6 py-4 font-medium">Customer</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium">Amount</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-brand-100">
                            {[1, 2, 3, 4, 5].map(i => (
                                <tr key={i} className="hover:bg-brand-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-brand-900">#ORD-{1000 + i}</td>
                                    <td className="px-6 py-4">Jane Doe</td>
                                    <td className="px-6 py-4">Oct 24, 2023</td>
                                    <td className="px-6 py-4">$45.00</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Completed</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
