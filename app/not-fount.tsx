import * as React from 'react';

import Link from 'next/link';

import {Button} from  '@/components/ui/button'

import { IllustrationNotFound } from '@/components/ui/illustrations';

import {PATHS} from '@/constants/path';

const NotFound:React.FC = () => {
    return (
        <div className='grid h-screen place-items-center'>
            <div className='grid gap-8'>
                <IllustrationNotFound className='size-[320px]'/>
                <h3 className='text-center text-2xl font-semibold tracking-tight'>
                    404 - Page Not Found
                </h3>
                <Button asChild>
                    <Link href={PATHS.SITE_HOME}></Link>  
                 </Button>
            </div>
        </div>
    )
}
