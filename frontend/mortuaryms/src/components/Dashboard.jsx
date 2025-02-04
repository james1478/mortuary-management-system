// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({
    deceasedCount: 0,
    staffCount: 0,
    inventoryCount: 0,
    bookingCount: 0,
    inventoryTotalCost: 0,
    totalSalary: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Replace these URLs with your actual API endpoints
        const deceasedRes = await axios.get('http://localhost:3090/api/getDeceased/getDeceased');
        const staffRes = await axios.get('http://localhost:3090/api/staff/getstaff');
        const inventoryRes = await axios.get('http://localhost:3090/api/inventory/getinventory');
        const bookingRes = await axios.get('http://localhost:3090/api/booking/getbookings');

        // Extract arrays from responses (adjust the keys if needed)
        const deceasedList = deceasedRes.data.deceasedList || [];
        const staffList = staffRes.data.staffList || [];
        const inventoryItems = inventoryRes.data.items || [];
        const bookings = bookingRes.data.bookings || [];

        // Calculate total inventory cost
        const totalInventoryCost = inventoryItems.reduce((acc, item) => {
          const quantity = Number(item.quantity) || 0;
          const unitPrice = Number(item.unitPrice) || 0;
          return acc + quantity * unitPrice;
        }, 0);

        // Calculate total salary to be paid
        const totalSalary = staffList.reduce((acc, staff) => {
          return acc + Number(staff.salary || 0);
        }, 0);

        setStats({
          deceasedCount: deceasedList.length,
          staffCount: staffList.length,
          inventoryCount: inventoryItems.length,
          bookingCount: bookings.length,
          inventoryTotalCost: totalInventoryCost,
          totalSalary: totalSalary,
        });
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <DashboardContainer>
      <Card>
        <CardTitle>Total Deceased</CardTitle>
        <CardValue>{stats.deceasedCount}</CardValue>
      </Card>
      <Card>
        <CardTitle>Total Staff</CardTitle>
        <CardValue>{stats.staffCount}</CardValue>
      </Card>
      <Card>
        <CardTitle>Total Inventory</CardTitle>
        <CardValue>{stats.inventoryCount}</CardValue>
      </Card>
      <Card>
        <CardTitle>Total Bookings</CardTitle>
        <CardValue>{stats.bookingCount}</CardValue>
      </Card>
      <Card>
        <CardTitle>Total Inventory Cost(ksh)</CardTitle>
        <CardValue>{stats.inventoryTotalCost.toFixed(2)}</CardValue>
      </Card>
      <Card>
        <CardTitle>Total Salary(ksh)</CardTitle>
        <CardValue>{stats.totalSalary.toFixed(2)}</CardValue>
      </Card>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem;
  background: #f1f3f5;
`;

const Card = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
  flex: 1;
  min-width: 200px;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;

const CardValue = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
`;
