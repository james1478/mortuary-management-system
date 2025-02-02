import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({
    deceasedCount: 0,
    staffCount: 0,
    inventoryCount: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Adjust endpoints and ports according to your configuration
        const deceasedRes = await axios.get('http://localhost:3090/api/getDeceased/getDeceased');
        const staffRes = await axios.get('http://localhost:3090/api/staff/getstaff');
        const inventoryRes = await axios.get('http://localhost:3090/api/inventory/getinventory');
        console.log("Deceased Data:", deceasedRes.data);
      console.log("Staff Data:", staffRes.data);
      console.log("Inventory Data:", inventoryRes.data);

        setStats({
          deceasedCount: deceasedRes.data.deceasedList ? deceasedRes.data.deceasedList.length : 0,
          staffCount: staffRes.data.staffList ? staffRes.data.staffList.length : 0,
          inventoryCount: inventoryRes.data.items ? inventoryRes.data.items.length : 0,
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
