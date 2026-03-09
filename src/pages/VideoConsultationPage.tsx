import { Video, Mic, MicOff, VideoOff, Phone, MessageSquare, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const VideoConsultationPage = () => {
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);

  return (
    <div className="flex min-h-screen flex-col bg-foreground">
      {/* Video area */}
      <div className="relative flex flex-1 items-center justify-center">
        {/* Remote video (placeholder) */}
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/20">
              <User className="h-12 w-12 text-primary-foreground/60" />
            </div>
            <p className="text-lg font-medium text-primary-foreground/80">Dr. Anika Sharma</p>
            <p className="text-sm text-primary-foreground/50">Connecting...</p>
          </div>
        </div>

        {/* Self view */}
        <div className="absolute bottom-4 right-4 h-32 w-24 overflow-hidden rounded-xl border-2 border-white/20 bg-muted shadow-elevated sm:h-40 sm:w-32">
          <div className="flex h-full items-center justify-center">
            <User className="h-8 w-8 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 bg-card/95 px-4 py-4 backdrop-blur-md">
        <Button
          variant={micOn ? "outline" : "destructive"}
          size="icon"
          className="h-12 w-12 rounded-full"
          onClick={() => setMicOn(!micOn)}
        >
          {micOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
        </Button>
        <Button
          variant={camOn ? "outline" : "destructive"}
          size="icon"
          className="h-12 w-12 rounded-full"
          onClick={() => setCamOn(!camOn)}
        >
          {camOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
        </Button>
        <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
          <MessageSquare className="h-5 w-5" />
        </Button>
        <Button variant="destructive" size="icon" className="h-14 w-14 rounded-full">
          <Phone className="h-6 w-6 rotate-[135deg]" />
        </Button>
      </div>
    </div>
  );
};

export default VideoConsultationPage;
