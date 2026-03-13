import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, Users, Settings, LogOut } from 'lucide-react';

const AdminLayout = () => {
    return (
        <div className="flex h-screen bg-surface">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-brand-100 flex flex-col">
                <div className="h-20 flex items-center px-6 border-b border-brand-100">
                    <span className="text-lg font-serif font-bold text-brand-800">Admin Panel</span>
                </div>
                <nav className="flex-1 py-6 px-4 space-y-2">
                    <NavLink to="/admin" end className={({ isActive }) => `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-brand-50 text-brand-800 font-medium' : 'text-textSec hover:bg-surface hover:text-textPrime'}`}>
                        <LayoutDashboard className="w-5 h-5" />
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink to="/admin/products" className={({ isActive }) => `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-brand-50 text-brand-800 font-medium' : 'text-textSec hover:bg-surface hover:text-textPrime'}`}>
                        <Package className="w-5 h-5" />
                        <span>Products</span>
                    </NavLink>
                    <NavLink to="/admin/orders" className={({ isActive }) => `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-brand-50 text-brand-800 font-medium' : 'text-textSec hover:bg-surface hover:text-textPrime'}`}>
                        <ShoppingCart className="w-5 h-5" />
                        <span>Orders</span>
                    </NavLink>
                    <NavLink to="/admin/customers" className={({ isActive }) => `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-brand-50 text-brand-800 font-medium' : 'text-textSec hover:bg-surface hover:text-textPrime'}`}>
                        <Users className="w-5 h-5" />
                        <span>Customers</span>
                    </NavLink>
                </nav>
                <div className="p-4 border-t border-brand-100 space-y-2">
                    <button className="w-full flex items-center space-x-3 px-4 py-3 text-textSec hover:bg-surface hover:text-textPrime rounded-lg transition-colors">
                        <Settings className="w-5 h-5" />
                        <span>Settings</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <LogOut className="w-5 h-5" />
                        <span>Log Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto bg-surface/50 p-8">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
