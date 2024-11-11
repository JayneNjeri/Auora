import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const About = () => {
    return ( 
        <div className="flex flex-col items-center justify-start h-screen mt-10">
        <h2 className="font-caveat font-semibold text-4xl mb-8">Our values</h2>
        <div className="flex flex-row items-center space-x-8">
          <Card className="w-1/3">
            <CardHeader className="bg-blue-100 p-4">
              <CardTitle className="text-black">Trustworthy Connections</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p>We verify each daycare to ensure high standards of care and safety, so you can feel confident in your choice.</p>
            </CardContent>
          </Card>
      
          <Card className="w-1/3">
            <CardHeader className="bg-blue-100 p-4">
              <CardTitle className="text-black">Simplified Search</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p>Our app makes it easy to search, filter, and find daycare options that fit your family’s needs.</p>
            </CardContent>
          </Card>
      
          <Card className="w-1/3">
            <CardHeader className="bg-blue-100 p-4">
              <CardTitle className="text-black">Child-Centered Approach</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p>We prioritize centers that focus on nurturing, learning, and creating a safe space for every child.</p>
            </CardContent>
          </Card>
        </div>
      </div>
     );
}
 
export default About;