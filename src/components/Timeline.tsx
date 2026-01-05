import { Clock, Calendar } from "lucide-react";

const Timeline = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">Project Duration</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            ⏳ Project Timeline
          </h2>

          <div className="bg-card p-8 rounded-2xl border shadow-sm">
            <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
              <Calendar className="w-8 h-8 text-secondary" />
              <span className="text-4xl font-extrabold text-primary">7 to 10</span>
              <span className="text-2xl font-semibold text-muted-foreground">Working Days</span>
            </div>
            <p className="text-muted-foreground">
              Complete setup, optimization & verification 
              <br />
              <span className="text-sm">(subject to platform policies)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;