import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGetDashboardQuery } from "../../redux/services/dashboard";
import LoadingSplash from "../../components/common/loading-splash";
import Chart from "react-apexcharts";
import { formatCamelCaseToTitleCase } from "../../utils/assetHelper";
import LoadingSpinner from "../../components/common/LoadingSpinner";

enum StatsType {
  NUMBER = "NUMBER",
  LIST = "LIST",
  BAR_CHART = "BAR_CHART",
  PIE_CHART = "PIE_CHART",
  TABLE = "TABLE",
}

interface DashboardData {
  statsType: StatsType;
  title: string;
  series: Array<any>;
  labels: Array<any>;
  data: any;
}

const allDashboardStats = [
  "NOTIFICATIONS",
  "MANAGE_ERRANDS",
  "MANAGE_TICKETS",
  "MANAGE_FAQS",
  "MANAGE_ROLES",
  "MANAGE_ADMINS",
];

export const DynamicDashboard = () => {
  const { data: dashboardData, ...dashboardDataApiDetails } =
    useGetDashboardQuery();

  const renderDashboardSection = (data: DashboardData, key: string) => {
    console.log(data);
    switch (data?.statsType) {
      case StatsType.NUMBER:
        return (
          <>
            {Object?.entries(data.data)?.map(([label, value]: any) => (
              <div className="card md:col-span-2 col-span-4 flex-col justify-between gap-6 h-full bg-cover bg-[right_top_-1.7rem] bg-no-repeat channel-stats-bg">
                <i className=" ms-5 mt-5 ki-filled ki-save-deposit  text-6xl"></i>
                <div className="flex flex-col gap-1 pb-4 px-5">
                  <span className="text-5xl font-semibold text-gray-900">
                    {value}
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    {formatCamelCaseToTitleCase(label)}
                  </span>
                </div>
              </div>
            ))}
          </>
        );

      case StatsType.TABLE || StatsType.LIST:
        return (
          <div className="md:col-span-4 col-span-8">
            <div key={key} className="card">
              <div className="card-header flex-wrap gap-2">
                <h3 className="card-title capitalize font-medium text-sm">
                  {data?.title}
                </h3>
              </div>
              <div className="card-body">
                <div className="scrollable-x-auto scrollable-y-auto min-h-[250px] max-h-[250px]">
                  <table className="table table-auto table-border">
                    <thead>
                      <tr>
                        {/* Assuming dynamic headers */}
                        {data.data[0]
                          ? Object?.keys(data.data[0])?.map((header) => (
                              <th key={header}>
                                {formatCamelCaseToTitleCase(header)}
                              </th>
                            ))
                          : ""}
                      </tr>
                    </thead>
                    <tbody>
                      {data.data.length !== 0 ? (
                        data?.data?.map((row: any, rowIndex: number) => (
                          <tr className="capitalize" key={rowIndex}>
                            {row
                              ? Object?.values(row)?.map(
                                  (cell: any, cellIndex: number) => (
                                    <td key={cellIndex}>{cell}</td>
                                  )
                                )
                              : ""}
                          </tr>
                        ))
                      ) : (
                        <tr className="capitalize">
                          <td colSpan={3} className=" w-full h-full flex ">
                            <span className="w-full  h-full flex justify-center items-center py-10">
                              No records
                            </span>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );
      case StatsType.BAR_CHART:
        const barChartOptions = {
          chart: {
            height: 350,
          },

          series: data?.series,
          xaxis: {
            categories: data?.labels,
          },
          labels: data?.labels,
        };

        return (
          <div className="col-span-6">
            <div key={key} className="stat-chart  capitalize">
              <Chart
                options={barChartOptions}
                series={barChartOptions.series}
                type="bar"
                height={350}
              />
            </div>
          </div>
        );
      case StatsType.PIE_CHART:
        const PiechartOptions = {
          chart: {
            height: 350,
          },

          series: data?.series,
          xaxis: {
            categories: data?.labels,
          },
          labels: data?.labels,
        };

        return (
          <div className="col-span-6">
            <div key={key} className="stat-chart  capitalize">
              <Chart
                options={PiechartOptions}
                series={PiechartOptions.series}
                type="pie"
                height={350}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (dashboardDataApiDetails.isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <main className="grow content" id="content" role="content">
      <div className="container-fixed" id="content_container"></div>
      <div className="container-fixed">
        <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-xl font-semibold leading-none text-gray-900">
              Dashboard
            </h1>
          </div>
        </div>
      </div>
      <div className="container-fixed">
        <div className="grid gap-5 grid-cols-8 lg:gap-7.5">
          {dashboardData &&
            allDashboardStats?.map(
              (permission: any) =>
                dashboardData?.[permission] &&
                renderDashboardSection(dashboardData?.[permission], permission)
            )}
        </div>
      </div>
    </main>
  );
};
