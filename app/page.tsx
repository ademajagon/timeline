import { FaCheckCircle, FaEnvelope } from "react-icons/fa";
import Timeline from "./components/Timeline";
import { FaFilePdf } from "react-icons/fa6";
import { IoDocuments } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";

const steps = [
  {
    date: "7 Oct 2022",
    title: "Invitation Sent",
    icon: <FaEnvelope className="text-white" />,
  },
  {
    date: "8 Oct 2022",
    title: "Follow-up Sent",
    status: "Waiting for candidate",
    icon: <FaCheckCircle className="text-white" />,
    highlight: true,
  },
  {
    date: "8 Oct 2022",
    title: "Interview Scheduled",
    status: "Waiting for company",
    icon: <FaFilePdf className="text-white" />,
    highlight: true,
  },
  {
    date: "8 Oct 2022",
    title: "Interview Scheduled",
    status: "Information Updated",
    icon: <FaInfoCircle className="text-white" />,
    highlight: true,
  },
  {
    date: "8 Oct 2022",
    title: "Interview Completed",
    icon: <IoDocuments className="text-white" />,
  },
];

export default function Home() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center">
      <div className="max-w-2xl w-full flex flex-col items-center">
        <Timeline steps={steps} />
      </div>
    </div>
  );
}
