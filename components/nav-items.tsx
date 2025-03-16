"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface NavItem {
  name: string
  href: string
}

interface NavItemsProps {
  items: NavItem[]
  onClick?: () => void
}

export default function NavItems({ items, onClick }: NavItemsProps) {
  return (
    <>
      {items.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.2 }}
        >
          <Link
            href={item.href}
            className="px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-full hover:bg-primary/20 hover:text-primary relative group"
            onClick={onClick}
          >
            {item.name}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
          </Link>
        </motion.div>
      ))}
    </>
  )
}

