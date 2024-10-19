import React from 'react';
import { Card, List } from 'antd';
import { FaClock } from 'react-icons/fa';

const Insights = ({ insights }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Video Insights</h2>
      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={insights}
        renderItem={(insight) => (
          <List.Item>
            <Card title={`Timestamp: ${insight.start_time} - ${insight.end_time}`}>
              <div className="flex items-center mb-2">
                <FaClock className="text-blue-500 mr-2" />
                <span>{insight.description}</span>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Insights;
