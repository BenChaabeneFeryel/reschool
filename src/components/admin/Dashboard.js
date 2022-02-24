import React from 'react';
import DoughnutChart  from './DoughnutChart.js';
import Barchart from './Barchart.js';
import PieChart from './PieChart.js';

const Dashboard = () => {
    return (
        <main>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Dashboard</h1>
                
                <div className="row">                 
                    <div className="col-xl-4">
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-chart-area me-1"></i>
                                Bar Chart Example
                            </div>
                            <div className="card-body">
                                <Barchart/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-chart-pie me-1"></i>
                                Doughnut Chart Example
                            </div>
                            <div class="doughnut-card-body">
                                <DoughnutChart/>
                            </div>
                            <div class="card-footer small text-muted">Updated today at 11:30 PM</div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-chart-pie me-1"></i>
                                Pie Chart Example
                            </div>
                            <div class="doughnut-card-body">
                                <PieChart/>
                            </div>
                            <div class="card-footer small text-muted">Updated today at 4:51 PM</div>
                        </div>
                    </div>
                </div>
                <div class="card mb-4">
                    <div class="card-header">
                        <i class="fas fa-chart-bar me-1"></i>
                        Chart Example
                    </div>
                    <div class="card-body">
                        <canvas id="myChart" width="400" height="400"></canvas>
                    </div>
                    <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>              
            </div>
        </main>
    );
}

export default Dashboard;
