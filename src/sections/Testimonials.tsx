import React from 'react'

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Fernando E.',
            address: 'Hamden, Connecticut',
            testimonial: 'The site helped us narrow down which insurers to look for. I liked that it&apos;s a one stop shop, you go to one place, and put in what you&apos;re looking for. This is more helpful than trying to navigate all the different insurance companies that are out there on our own.'
        },
        {
            name: 'Ankica B.',
            address: 'Fairfax County, Virginia',
            testimonial: 'I loved it because I save a lot of money, almost $500 per month! I kept full coverage on all of my cars. The people I spoke to were very nice and helpful, and I was able to bundle my homeowner insurance too.'
        },
        {
            name: 'Jaymee H.',
            address: 'Lakewood, Colorado',
            testimonial: 'The site worked well for me. I was satisfied with my new insurance policy, which is $75 cheaper per month. It was an easy process, I didn&apos;t really have to do a lot, I just had to fill up my information.'
        }
    ]
    
    return (
        <div className='w-full py-16 bg-[#F7F7F7]'>
            <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A8A] text-center mb-12'>
                    What Our Customers Say
                </h2>
                
                {/* Desktop Grid */}
                <div className='hidden lg:grid grid-cols-3 gap-8 w-full'>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className='bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex flex-col h-[280px]'>
                            <p className='text-gray-800 text-base leading-relaxed mb-4 flex-grow'>
                                &quot;{testimonial.testimonial}&quot;
                            </p>
                            <div className='text-sm mt-auto'>
                                <p className='font-semibold text-gray-900'>{testimonial.name}</p>
                                <p className='text-gray-600'>{testimonial.address}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile/Tablet Horizontal Scroll */}
                <div className='lg:hidden overflow-x-auto scrollbar-hide w-full'>
                    <div className='flex gap-6 pb-4' style={{ width: 'max-content' }}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className='bg-white rounded-lg p-6 shadow-sm border border-gray-200 min-w-[300px] max-w-[350px] flex-shrink-0 flex flex-col h-[280px]'>
                                <p className='text-gray-800 text-base leading-relaxed mb-4 flex-grow'>
                                    &quot;{testimonial.testimonial}&quot;
                                </p>
                                <div className='text-sm mt-auto'>
                                    <p className='font-semibold text-gray-900'>{testimonial.name}</p>
                                    <p className='text-gray-600'>{testimonial.address}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials