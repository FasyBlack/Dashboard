import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Bell, Download, Plus, MoreHorizontal, Calendar as CalendarIcon } from "lucide-react"; // Ikon-ikon keren

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen text-black">
      <aside className="w-64 flex-shrink-0 bg-zinc-300 border-r p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-8">Dashboard Admin</h1>
        <nav className="flex flex-col space-y-2">
          <Button variant="secondary" className="justify-start">Default</Button>
          <Button variant="ghost" className="justify-start">E-commerce</Button>
          <Button variant="ghost" className="justify-start">Sales</Button>
          <Button variant="ghost" className="justify-start">CRM</Button>
        </nav>
        
      </aside>
      <card className="flex-1 p-8  border-zinc-900">
      <main>
        {/* === HEADER DI DALAM KONTEN === */}
        <header className="flex items-center justify-between mb-8">
          <div className="relative w-1/3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            <Input placeholder="Search..." className="pl-10  border-zinc-300" />
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="text-zinc-400" />
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>20 Sep 2025 - 17 Oct 2025</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="range" />
              </PopoverContent>
            </Popover>
            <Button className="bg-white text-black hover:bg-zinc-200">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>FS</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* === GRID UNTUK CARD-CARD UTAMA === */}
        <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* --- CARD TEAM MEMBERS --- */}
          <Card className="lg:col-span-1  border-zinc-300">
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Invite your team members to collaborate.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar><AvatarImage src="https://i.pravatar.cc/150?img=1" /></Avatar>
                  <div>
                    <p className="font-semibold">Toby Belhome</p>
                    <p className="text-xs text-zinc-400">contact@bundu.io</p>
                  </div>
                </div>
                <Select defaultValue="viewer">
                  <SelectTrigger className="w-[110px]"><SelectValue /></SelectTrigger>
                  <SelectContent><SelectItem value="viewer">Viewer</SelectItem><SelectItem value="dev">Developer</SelectItem></SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar><AvatarImage src="https://i.pravatar.cc/150?img=2" /></Avatar>
                  <div>
                    <p className="font-semibold">Jackson Lee</p>
                    <p className="text-xs text-zinc-400">pre@example.com</p>
                  </div>
                </div>
                <Select defaultValue="dev">
                   <SelectTrigger className="w-[110px]"><SelectValue /></SelectTrigger>
                   <SelectContent><SelectItem value="viewer">Viewer</SelectItem><SelectItem value="dev">Developer</SelectItem></SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar><AvatarImage src="https://i.pravatar.cc/150?img=2" /></Avatar>
                  <div>
                    <p className="font-semibold">Fasy</p>
                    <p className="text-xs text-zinc-400">pre@example.com</p>
                  </div>
                </div>
                <Select defaultValue="dev">
                   <SelectTrigger className="w-[110px]"><SelectValue /></SelectTrigger>
                   <SelectContent><SelectItem value="viewer">Viewer</SelectItem></SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* --- CARD SUBSCRIPTIONS & REVENUE --- */}
          <Card className="lg:col-span-2 border-zinc-300">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Subscriptions</CardTitle>
              <Button variant="ghost">View All</Button>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">+4850</p>
              <p className="text-xs text-green-400">+80% from last month</p>
              <div className="h-40 mt-4 text-center text-zinc-500">
                <p>Chart Placeholder</p>
              </div>
            </CardContent>
          </Card>

          {/* --- CARD UNTUK CHAT / FORM --- */}
          <Card className="lg:col-span-3 border-zinc-300">
             <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
             </CardHeader>
             <CardContent>
                <div className="flex items-start space-x-4">
                    <Avatar><AvatarImage src="https://i.pravatar.cc/150?img=3" /></Avatar>
                    <div className="flex-1">
                        <div className="p-4 rounded-lg bg-zinc-300">
                            <p>Hi, how can I help you today?</p>
                        </div>
                    </div>
                </div>
             </CardContent>
          </Card>
        </div>
      </main>
      </card>
    </div>
  );
}