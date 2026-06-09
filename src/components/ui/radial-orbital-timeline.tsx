"use client";

import { useState, useEffect, useRef } from "react";

import { ArrowRight, Link, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";



interface TimelineItem {

  id: number;

  title: string;

  date: string;

  content: string;

  category: string;

  icon: React.ElementType;

  relatedIds: number[];

  status?: "completed" | "in-progress" | "pending";

  energy: number;

}



interface RadialOrbitalTimelineProps {

  timelineData: TimelineItem[];

}



export default function RadialOrbitalTimeline({

  timelineData,

}: RadialOrbitalTimelineProps) {

  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(

    {}

  );

  const [viewMode] = useState<"orbital">("orbital");

  const [rotationAngle, setRotationAngle] = useState<number>(0);

  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});

  const [centerOffset] = useState<{ x: number; y: number }>({

    x: 0,

    y: 0,

  });

  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);

  const [isMobile, setIsMobile] = useState<boolean>(false);

  const [mounted, setMounted] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const orbitRef = useRef<HTMLDivElement>(null);

  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const check = () => setIsMobile(window.innerWidth < 640);

    check();

    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);

  }, []);



  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {

    if (e.target === containerRef.current || e.target === orbitRef.current) {

      setExpandedItems({});

      setActiveNodeId(null);

      setPulseEffect({});

      setAutoRotate(true);

    }

  };



  const toggleItem = (id: number) => {

    setExpandedItems((prev) => {

      const newState = { ...prev };

      Object.keys(newState).forEach((key) => {

        if (parseInt(key) !== id) {

          newState[parseInt(key)] = false;

        }

      });



      newState[id] = !prev[id];



      if (!prev[id]) {

        setActiveNodeId(id);

        setAutoRotate(false);



        const relatedItems = getRelatedItems(id);

        const newPulseEffect: Record<number, boolean> = {};

        relatedItems.forEach((relId) => {

          newPulseEffect[relId] = true;

        });

        setPulseEffect(newPulseEffect);



        centerViewOnNode(id);

      } else {

        setActiveNodeId(null);

        setAutoRotate(true);

        setPulseEffect({});

      }



      return newState;

    });

  };



  useEffect(() => {

    let rotationTimer: NodeJS.Timeout;



    if (autoRotate && viewMode === "orbital") {

      rotationTimer = setInterval(() => {

        setRotationAngle((prev) => {

          const newAngle = (prev + 0.3) % 360;

          return Number(newAngle.toFixed(3));

        });

      }, 50);

    }



    return () => {

      if (rotationTimer) {

        clearInterval(rotationTimer);

      }

    };

  }, [autoRotate, viewMode]);



  const centerViewOnNode = (nodeId: number) => {

    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;



    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);

    const totalNodes = timelineData.length;

    const targetAngle = (nodeIndex / totalNodes) * 360;



    setRotationAngle(270 - targetAngle);

  };



  const calculateNodePosition = (index: number, total: number) => {

    const angle = ((index / total) * 360 + rotationAngle) % 360;

    const radius = isMobile ? 130 : 280;

    const radian = (angle * Math.PI) / 180;



    const x = radius * Math.cos(radian) + centerOffset.x;

    const y = radius * Math.sin(radian) + centerOffset.y;



    const zIndex = Math.round(100 + 50 * Math.cos(radian));

    const opacity = Math.max(

      0.4,

      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))

    );



    return { x, y, angle, zIndex, opacity };

  };



  const getRelatedItems = (itemId: number): number[] => {

    const currentItem = timelineData.find((item) => item.id === itemId);

    return currentItem ? currentItem.relatedIds : [];

  };



  const isRelatedToActive = (itemId: number): boolean => {

    if (!activeNodeId) return false;

    const relatedItems = getRelatedItems(activeNodeId);

    return relatedItems.includes(itemId);

  };



  const getStatusStyles = (status: TimelineItem["status"]): string => {

    switch (status) {

      case "completed":

        return "text-primary-foreground bg-primary border-primary";

      case "in-progress":

        return "text-foreground bg-accent border-border";

      case "pending":

        return "text-muted-foreground bg-muted border-border";

      default:

        return "text-muted-foreground bg-muted border-border";

    }

  };



  return (

    <div

      className="w-full h-[60vh] sm:h-screen flex flex-col items-center justify-center overflow-hidden"

      ref={containerRef}

      onClick={handleContainerClick}

    >

      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">

        <div

          className="absolute w-full h-full flex items-center justify-center"

          ref={orbitRef}

          style={{

            perspective: "1000px",

            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,

          }}

        >

          <div className={`absolute ${isMobile ? "w-12 h-12" : "w-24 h-24"} rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10`}>

            <div className={`absolute ${isMobile ? "w-16 h-16" : "w-32 h-32"} rounded-full border border-border animate-ping opacity-70`}></div>

            <div

              className={`absolute ${isMobile ? "w-20 h-20" : "w-40 h-40"} rounded-full border border-border animate-ping opacity-50`}

              style={{ animationDelay: "0.5s" }}

            ></div>

            <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? 20 : 40} height={isMobile ? 20 : 40} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>

          </div>



          <div className={`absolute ${isMobile ? "w-[260px] h-[260px]" : "w-[560px] h-[560px]"} rounded-full border border-border`}></div>



          {mounted && timelineData.map((item, index) => {

            const position = calculateNodePosition(index, timelineData.length);

            const isExpanded = expandedItems[item.id];

            const isRelated = isRelatedToActive(item.id);

            const isPulsing = pulseEffect[item.id];

            const Icon = item.icon;



            const nodeStyle = {

              transform: `translate(${position.x}px, ${position.y}px)`,

              zIndex: isExpanded ? 200 : position.zIndex,

              opacity: isExpanded ? 1 : position.opacity,

            };



            return (

              <div

                key={item.id}

                ref={(el) => { nodeRefs.current[item.id] = el; }}

                className="absolute transition-all duration-700 cursor-pointer"

                style={nodeStyle}

                onClick={(e) => {

                  e.stopPropagation();

                  toggleItem(item.id);

                }}

              >

                <div

                  className={`absolute rounded-full -inset-1 ${

                    isPulsing ? "animate-pulse duration-1000" : ""

                  }`}

                  style={{

                    background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,

                    width: `${item.energy * 0.5 + 40}px`,

                    height: `${item.energy * 0.5 + 40}px`,

                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,

                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,

                  }}

                ></div>



                <div

                  className={`

                  ${isMobile ? "w-8 h-8" : "w-14 h-14"} rounded-full flex items-center justify-center

                  ${

                    isExpanded

                      ? "bg-foreground text-background"

                      : isRelated

                      ? "bg-foreground/30 text-foreground"

                      : "bg-background text-foreground"

                  }

                  border-2

                  ${

                    isExpanded

                      ? "border-foreground shadow-lg shadow-foreground/20"

                      : isRelated

                      ? "border-foreground animate-pulse"

                      : "border-foreground/30"

                  }

                  transition-all duration-300 transform

                  ${isExpanded ? "scale-150" : ""}

                `}

                >

                  <Icon size={isMobile ? 12 : 22} />

                </div>



                <div

                  className={`

                  absolute top-12  whitespace-nowrap

                  ${isMobile ? "text-[10px]" : "text-sm"} font-semibold tracking-wider

                  transition-all duration-300

                  ${isExpanded ? "text-foreground scale-125" : "text-foreground/60"}

                `}

                >

                  {item.title}

                </div>



                {isExpanded && !isMobile && (

                  <Card className="absolute top-12 left-1/2 -translate-x-1/2 w-80 bg-card/95 backdrop-blur-lg border-border shadow-xl overflow-visible">

                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-border"></div>

                    <CardHeader className="pb-2">

                      <div className="flex justify-between items-center">

                        <span className="text-xs font-mono text-muted-foreground">{item.date}</span>

                      </div>

                      <CardTitle className="text-sm mt-2">{item.title}</CardTitle>

                    </CardHeader>

                    <CardContent className="text-xs text-muted-foreground">

                      <p>{item.content}</p>

                      <div className="mt-4 pt-3 border-t border-border">

                        <div className="flex justify-between items-center text-xs mb-1">

                          <span className="flex items-center"><Zap size={10} className="mr-1" />Skill Level</span>

                          <span className="font-mono">{item.energy}%</span>

                        </div>

                        <div className="w-full h-1 bg-muted rounded-full overflow-hidden">

                          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: `${item.energy}%` }}></div>

                        </div>

                      </div>

                      {item.relatedIds.length > 0 && (

                        <div className="mt-4 pt-3 border-t border-border">

                          <div className="flex items-center mb-2">

                            <Link size={10} className="text-muted-foreground mr-1" />

                            <h4 className="text-xs uppercase tracking-wider font-medium text-muted-foreground">Connected Skills</h4>

                          </div>

                          <div className="flex flex-wrap gap-1">

                            {item.relatedIds.map((relatedId) => {

                              const relatedItem = timelineData.find((i) => i.id === relatedId);

                              return (

                                <Button key={relatedId} variant="outline" size="sm"

                                  className="flex items-center h-6 px-2 py-0 text-xs rounded-none border-border bg-transparent hover:bg-muted text-foreground/80 hover:text-foreground transition-all"

                                  onClick={(e) => { e.stopPropagation(); toggleItem(relatedId); }}>

                                  {relatedItem?.title}

                                  <ArrowRight size={8} className="ml-1 text-muted-foreground" />

                                </Button>

                              );

                            })}

                          </div>

                        </div>

                      )}

                    </CardContent>

                  </Card>

                )}

              </div>

            );

          })}

        </div>

      </div>

      {isMobile && activeNodeId !== null && (() => {

        const item = timelineData.find((i) => i.id === activeNodeId);

        if (!item) return null;

        return (

          <div

            className="fixed bottom-0 left-0 right-0 z-[500] px-4 pb-6 pt-2"

            onClick={(e) => e.stopPropagation()}

          >

            <Card className="w-full bg-card/98 backdrop-blur-xl border-border shadow-2xl">

              <CardHeader className="pb-2">

                <div className="flex justify-between items-center">

                  <div className="flex items-center gap-2">

                    <span className="text-xs font-mono text-muted-foreground">{item.date}</span>

                    <button

                      className="text-muted-foreground hover:text-foreground text-lg leading-none"

                      onClick={() => { setExpandedItems({}); setActiveNodeId(null); setAutoRotate(true); setPulseEffect({}); }}

                    >

                      ×

                    </button>

                  </div>

                </div>

                <CardTitle className="text-base mt-2">{item.title}</CardTitle>

              </CardHeader>

              <CardContent className="text-sm text-muted-foreground">

                <p>{item.content}</p>

                <div className="mt-4 pt-3 border-t border-border">

                  <div className="flex justify-between items-center text-xs mb-1">

                    <span className="flex items-center"><Zap size={10} className="mr-1" />Skill Level</span>

                    <span className="font-mono">{item.energy}%</span>

                  </div>

                  <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">

                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: `${item.energy}%` }}></div>

                  </div>

                </div>

                {item.relatedIds.length > 0 && (

                  <div className="mt-4 pt-3 border-t border-border">

                    <div className="flex items-center mb-2">

                      <Link size={10} className="text-muted-foreground mr-1" />

                      <h4 className="text-xs uppercase tracking-wider font-medium text-muted-foreground">Connected Skills</h4>

                    </div>

                    <div className="flex flex-wrap gap-1">

                      {item.relatedIds.map((relatedId) => {

                        const relatedItem = timelineData.find((i) => i.id === relatedId);

                        return (

                          <Button key={relatedId} variant="outline" size="sm"

                            className="flex items-center h-7 px-2 py-0 text-xs border-border bg-transparent hover:bg-muted text-foreground/80 hover:text-foreground transition-all"

                            onClick={(e) => { e.stopPropagation(); toggleItem(relatedId); }}>

                            {relatedItem?.title}

                            <ArrowRight size={8} className="ml-1 text-muted-foreground" />

                          </Button>

                        );

                      })}

                    </div>

                  </div>

                )}

              </CardContent>

            </Card>

          </div>

        );

      })()}

    </div>

  );

}
