// ** Next Import

import dynamic from 'next/dynamic'

// ! To avoid 'Window is not defined' error
const ReactApexcharts = (dynamic(() => import('react-apexcharts'), { ssr: false })) as any

export default ReactApexcharts
