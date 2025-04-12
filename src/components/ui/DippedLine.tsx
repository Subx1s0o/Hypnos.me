export default function DippedLine() {
  return (
    <div className='flex w-full items-center gap-1'>
      {/* Left line */}
      <div className='h-px flex-1 bg-gray-200' />

      {/* Dip container */}
      <div className='relative w-20'>
        <div className='absolute inset-0 flex items-center'>
          <div className='h-px w-full bg-gray-200' />
        </div>
        <div className='relative h-8 w-full'>
          <div
            className='absolute inset-0 border-b border-gray-200'
            style={{
              borderBottomLeftRadius: '100%',
              borderBottomRightRadius: '100%'
            }}
          />
        </div>
      </div>

      {/* Right line */}
      <div className='h-px flex-1 bg-gray-200' />
    </div>
  )
}
