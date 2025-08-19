
import React, { useContext, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Loader from '../../components/loader/Loader';
import { Link } from 'react-router-dom';

function AdminVisualizations() {
  const context = useContext(myContext);
  const { loading, order } = context;
  const [orderDataForChart, setOrderDataForChart] = useState([]);

  useEffect(() => {
    const userid = JSON.parse(localStorage.getItem('user'))?.user?.uid;
    if (!userid || !order) return;

    const filteredOrder = order
      .filter(obj => obj.userid === userid)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    const chartData = filteredOrder.map(allOrder => ({
      date: allOrder.date,
      totalAmount: allOrder.cartItems.reduce((total, item) => total + parseFloat(item.price), 0),
      cartItems: allOrder.cartItems,
    }));
    setOrderDataForChart(chartData);
  }, [order]);

  useEffect(() => {
    if (orderDataForChart.length > 0) {
      createTopSellingPhonesChart();
      createBrandComparisonChart();
      createPriceSegmentSalesChart();
    }
  }, [orderDataForChart]);

  const createTopSellingPhonesChart = () => {
    const phonesSold = {};
    orderDataForChart.forEach(allorder => {
      allorder.cartItems.forEach(item => {
        const { title } = item;
        if (phonesSold[title]) {
          phonesSold[title] += 1;
        } else {
          phonesSold[title] = 1;
        }
      });
    });

    const sortedPhones = Object.keys(phonesSold).sort((a, b) => phonesSold[b] - phonesSold[a]).slice(0, 10);

    const labels = sortedPhones;
    const data = sortedPhones.map(phone => phonesSold[phone]);

    const ctx = document.getElementById('topSellingPhonesChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Number of Sales',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  const createBrandComparisonChart = () => {
    const brandsSales = {};

    orderDataForChart.forEach(allorder => {
      allorder.cartItems.forEach(item => {
        const { brand } = item;
        if (brandsSales[brand]) {
          brandsSales[brand] += 1; // Counting the number of products sold per brand
        } else {
          brandsSales[brand] = 1;
        }
      });
    });

    const labels = Object.keys(brandsSales);
    const data = Object.values(brandsSales);

    const ctx = document.getElementById('brandComparisonChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Number of Products Sold',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  const createPriceSegmentSalesChart = () => {
    const priceSegments = {};
  
    // Grouping sales based on price segments
    orderDataForChart.forEach(allorder => {
      allorder.cartItems.forEach(item => {
        const { price } = item;
        const segment = Math.floor(price / 100) * 100; // Segment price into intervals of 100
        if (priceSegments[segment]) {
          priceSegments[segment] += 1; // Counting the number of products sold per price segment
        } else {
          priceSegments[segment] = 1;
        }
      });
    });

    // Get all segments and initialize missing ones with 0
    const allSegments = Array.from(Array(12).keys()).map(seg => seg * 100);
    allSegments.forEach(segment => {
      if (!priceSegments.hasOwnProperty(segment)) {
        priceSegments[segment] = 0;
      }
    });

    // Sort price segments and create label ranges
    const sortedSegments = Object.keys(priceSegments).sort((a, b) => a - b);
    const labels = sortedSegments.map(segment => `${segment}-${parseInt(segment, 10) + 100}`);
    const data = sortedSegments.map(segment => priceSegments[segment]);
  
    const ctx = document.getElementById('priceSegmentSalesChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Sales per Price Segment',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  return (
    <Layout>
      {loading && <Loader />}
      <div className="h-full pt-10">
        <div className="max-w-3xl mx-auto">
          <Link to="/dashboard">
            <button className="float-left bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Back to Dashboard
            </button>
          </Link>
          <h1 className="text-center text-2xl font-bold mb-4">Order Visualizations</h1>
          <div className="mb-8 bg-gray-100 rounded-lg p-4">
            <canvas id="topSellingPhonesChart" width="400" height="400"></canvas>
            <p className="text-center font-semibold">Top Selling Phones</p>
          </div>
          <div className="mb-8 bg-gray-100 rounded-lg p-4">
            <canvas id="brandComparisonChart" width="400" height="400"></canvas>
            <p className="text-center font-semibold">Brand Comparison</p>
          </div>
          <div className="mb-8 bg-gray-100 rounded-lg p-4">
            <canvas id="priceSegmentSalesChart" width="400" height="400"></canvas>
            <p className="text-center font-semibold">Price Segment Sales</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdminVisualizations;