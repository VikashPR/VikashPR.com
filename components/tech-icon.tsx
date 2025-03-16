import {
  PiIcon as Python,
  FileCode2,
  Atom,
  Server,
  Cpu,
  Flame,
  Eye,
  MessageSquare,
  Brain,
  Network,
  BarChart,
  Cloud,
  Layout,
  Microscope,
} from "lucide-react"

interface TechIconProps {
  name: string
  color: string
  size?: number
}

export default function TechIcon({ name, color, size = 16 }: TechIconProps) {
  const iconStyle = { color, width: size, height: size }

  switch (name.toLowerCase()) {
    case "python":
      return (
        <div className="relative">
          <Python style={iconStyle} />
        </div>
      )
    case "javascript":
      return (
        <div className="relative flex items-center justify-center w-4 h-4 bg-[#F7DF1E] rounded-sm">
          <span className="text-[8px] font-bold text-black">JS</span>
        </div>
      )
    case "typescript":
      return (
        <div className="relative flex items-center justify-center w-4 h-4 bg-[#3178C6] rounded-sm">
          <span className="text-[8px] font-bold text-white">TS</span>
        </div>
      )
    case "react":
      return (
        <div className="relative">
          <Atom style={iconStyle} className="animate-spin-slow" />
        </div>
      )
    case "nodejs":
      return (
        <div className="relative">
          <Server style={iconStyle} />
        </div>
      )
    case "tensorflow":
      return (
        <div className="relative">
          <Cpu style={{ ...iconStyle, color: "#FF6F00" }} />
        </div>
      )
    case "pytorch":
      return (
        <div className="relative">
          <Flame style={{ ...iconStyle, color: "#EE4C2C" }} />
        </div>
      )
    case "eye":
      return <Eye style={iconStyle} />
    case "message-square":
      return <MessageSquare style={iconStyle} />
    case "brain":
      return <Brain style={iconStyle} />
    case "network":
      return <Network style={iconStyle} />
    case "bar-chart":
      return <BarChart style={iconStyle} />
    case "cloud":
      return <Cloud style={iconStyle} />
    case "layout":
      return <Layout style={iconStyle} />
    case "microscope":
      return <Microscope style={iconStyle} />
    default:
      return <FileCode2 style={iconStyle} />
  }
}

