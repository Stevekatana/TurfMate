import React, { useEffect, useState } from 'react'

function Notification(notifications) {
  const [visible, setVisible] = useState(false);
  const [latestNotification, setLatestNotification] = useState(null);

  useEffect(()=>{
    if (notifications.length > 0) {
        setLatestNotification(notifications[notifications.length - 1]);
        setVisible(true);
        setTimeout(() => setVisible(false), 3000);
    }},[notifications])
    
  return (
    <div>
      {
        <div className='rounded-md absolute top-16 right-5 bg-gray-800 text-white p-3 w-auto flex items-center justify-center shadow-lg shadow-gray-800 shado'>
          <div>
            hello
            hello
            hello
            hello
          </div>
        </div>
      }
    </div>
  )
}

export default Notification
