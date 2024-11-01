// pages/index.js
// import Certificates from '@/components/Certificates';
import Certificates from "./certificate";
import { certificates } from "@/utils/data/cerficatesdetails";
// import { certificates } from '@/utils/certificates-data';


export default function Home() {
  return (
    <div  id="certificates"   className="container mx-auto p-4">
      {/* <h1 className="text-4xl text-center font-bold my-8">My Portfolio</h1> */}
      <Certificates certificates={certificates} />
    </div>
  );
}
