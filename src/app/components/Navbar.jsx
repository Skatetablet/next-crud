import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='bg-slate-900'>
      <div className='container mx-auto flex justify-between items-center py-3'>
        <Link href='/'>
          <h3 className='text-3xl font-bold'>NextJS Crud</h3>
        </Link>

        <ul className='flex gap-x-2 text-lg font-bold'>
          <li>
            <Link href='/new' className='text-slate-300 hover:text-slate-200'>
              New Task
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
