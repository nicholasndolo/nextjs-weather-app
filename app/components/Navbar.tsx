"use client"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import { github } from '../utils/icons';
import ThemeDropdown from './themeDropdown/ThemeDropdown';
import SearchDialog from './searchDialog/SearchDialog';

function Navbar() {
  const router = useRouter();
  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left"></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />
          <div className="btn-group flex items-center gap-2">
          <ThemeDropdown/>
          <Button
          className="source-code flex items-center gap-2"
          onClick={() => {
            router.push("https://github.com")
          }}
          >
          {github} Source Code
          </Button>
          </div>
      </div>
    </div>
  )
}

export default Navbar