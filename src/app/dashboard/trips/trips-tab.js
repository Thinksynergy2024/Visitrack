import React from 'react'

const Tabs = ({ currentTab, setCurrentTab }) => {
  return (
    <section className='tab text-sm bg-white w-full shadow-xl mb-2 rounded flex justify-between'>
        <div onClick={() => setCurrentTab(0)} className={`${currentTab === 0 ? 'bg-primary text-background cursor-pointer' : 'cursor-pointer '} text-sm text-center p-2 w-4/12`}>
            <h1>All Trips</h1>
        </div>
        <div onClick={() => setCurrentTab(1)} className={`${currentTab === 1 ? 'bg-primary text-background cursor-pointer ' : 'cursor-pointer '} text-sm text-center p-2 w-4/12`}>
            <h1>Open Trips</h1>
        </div>
        <div onClick={() => setCurrentTab(2)} className={`${currentTab === 2 ? 'bg-primary text-background cursor-pointer ' : 'cursor-pointer '} text-sm text-center p-2 w-4/12`}>
            <h1>Closed Trips</h1>
        </div>     
    </section>
  )
}

export default Tabs