import { VISIONITEM } from '@/lib';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const IntercaladeCards = ({
                                     item,
                                     index,
                                 }: {
    item: VISIONITEM;
    index: number;
}) => {
    // Calculate appropriate height class based on image presence
    const heightClass = item.image ? 'min-h-[500px]' : 'min-h-96';

    return (
        <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='relative group w-full'
        >
            <div className='w-full'>
                <div className='w-full flex flex-col rounded-xl transition-all duration-300 ease-in-out overflow-hidden'>
                    <div className={`relative h-full ${heightClass} bg-card/30 backdrop-blur-sm border border-foreground/10 hover:border-primary/20 transition-all duration-300 rounded-xl flex flex-col`}>
                        {item.imagePosition === 'top' && item.image && (
                            <div className='mb-6 pb-0 px-6 pt-6 rounded-lg overflow-hidden'>
                                <div className="rounded-lg overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={800}
                                        height={400}
                                        className='w-full object-cover transition-all duration-500 group-hover:scale-105'
                                    />
                                </div>
                            </div>
                        )}

                        <div className={`px-6 ${item.imagePosition === 'bottom' ? 'pt-6' : ''} pb-6 flex flex-col flex-grow`}>
                            <div className='flex items-center gap-3 mb-6'>
                                <div className='p-2 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-ring transition-all duration-700 ease-in-out'>
                                    <item.icon className='w-5 h-5 text-primary group-hover:text-white transition-all duration-700 ease-in-out' />
                                </div>
                                <h3 className='text-xl font-semibold group-hover:text-ring transition-colors duration-300 ease-in-out'>
                                    {item.title}
                                </h3>
                                {item.badge && (
                                    <span className='ml-3 text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full hidden md:inline-block'>
                    {item.badge}
                  </span>
                                )}
                            </div>
                            <p className='text-foreground/80 text-sm leading-relaxed flex-grow group-hover:text-foreground transition-all duration-700 ease-in-out'>
                                {item.content}
                            </p>
                        </div>

                        {item.imagePosition === 'bottom' && item.image && (
                            <div className='mt-auto pb-6 px-6 rounded-lg overflow-hidden'>
                                <div className="rounded-lg overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={800}
                                        height={400}
                                        className='w-full object-cover transition-all duration-500 group-hover:scale-105'
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};